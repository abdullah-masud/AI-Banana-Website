import type { CSSProperties } from 'react'
import type { ArmPhase } from '../../hooks/useRobotArmAnimation'

export type ArmRigConfig = {
  anchorX: number
  anchorY: number
  width: number
  duration: number
  rotationRetracted: number
  rotationDeployed: number
  translateX: number
  translateY: number
  transformOriginX: number
  transformOriginY: number
  zIndex: number
  flipX?: boolean
}

type RobotArmProps = {
  id: string
  src: string
  alt: string
  phase: ArmPhase
  active: boolean
  rig: ArmRigConfig
  debug?: boolean
}

type RigStyles = CSSProperties & Record<`--${string}`, string | number>

export function RobotArm({ id, src, alt, phase, active, rig, debug = false }: RobotArmProps) {
  const styles: RigStyles = {
    '--arm-anchor-x': `${rig.anchorX}%`,
    '--arm-anchor-y': `${rig.anchorY}%`,
    '--arm-width': `${420 * rig.width / 100}px`,
    '--arm-duration': `${rig.duration}ms`,
    '--arm-origin-x': `${rig.transformOriginX}%`,
    '--arm-origin-y': `${rig.transformOriginY}%`,
    '--arm-retracted-rotation': `${rig.rotationRetracted}deg`,
    '--arm-deployed-rotation': `${rig.rotationDeployed}deg`,
    '--arm-translate-x': `${rig.translateX}px`,
    '--arm-translate-y': `${rig.translateY}px`,
    zIndex: rig.zIndex,
  }

  return (
    <span
      className={`robot-arm robot-arm--${active ? phase : 'idle'} ${debug ? 'robot-arm--debug' : ''}`}
      style={styles}
      aria-hidden={!active}
    >
      <span className="robot-arm__asset">
        <img
          className={rig.flipX ? 'robot-arm__image robot-arm__image--flipped' : 'robot-arm__image'}
          src={src}
          alt={active ? alt : ''}
          width="1536"
          height="1024"
          decoding="async"
        />
      </span>
      {debug && <span className="robot-arm__debug-label">{id}</span>}
    </span>
  )
}
