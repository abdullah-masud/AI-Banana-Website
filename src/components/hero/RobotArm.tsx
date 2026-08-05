import type { ArmPhase } from '../../hooks/useRobotArmAnimation'

type RobotArmProps = {
  src: string
  alt: string
  side: 'left' | 'right'
  level: 'upper' | 'middle' | 'lower'
  phase: ArmPhase
  active: boolean
}

export function RobotArm({ src, alt, side, level, phase, active }: RobotArmProps) {
  return (
    <img
      className={`robot-arm robot-arm--${side} robot-arm--${level} robot-arm--${active ? phase : 'idle'}`}
      src={src}
      alt={active ? alt : ''}
      aria-hidden={!active}
      width="1536"
      height="1024"
      decoding="async"
    />
  )
}
