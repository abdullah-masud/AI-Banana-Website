import { CheckCircle2 } from 'lucide-react'
import { robotArmConfig } from '../../data/robotArmConfig'
import { useRobotArmAnimation } from '../../hooks/useRobotArmAnimation'
import { RobotArm } from './RobotArm'
import { TaskQueue } from './TaskQueue'

export function RobotWorkforce() {
  const animation = useRobotArmAnimation()
  const activePair = animation.activePairIndex === null ? null : robotArmConfig.pairs[animation.activePairIndex]
  const debugRig = robotArmConfig.debug
  const latestResult = animation.visiblePairs ? robotArmConfig.pairs[animation.visiblePairs - 1].result : 'Working quietly.'
  const handledText = animation.workforceOnline ? 'Everything handled.' : activePair ? (animation.phase === 'retracting' ? activePair.result : activePair.action) : latestResult

  return (
    <div className={`robot-workforce ${animation.workforceOnline ? 'robot-workforce--online' : ''}`} aria-label="AI Banana quietly activating business capabilities">
      <div className={`robot-workforce__stage ${debugRig ? 'robot-workforce__stage--debug' : ''}`}>
        <div className="robot-workforce__halo" />
        <div className="robot-rig">
          <div className="robot-rig__rear-arms">
            {robotArmConfig.tasks.map((task) => (
              <RobotArm
                key={task.id}
                id={task.id}
                src={task.asset}
                alt={`${task.title} capability arm active`}
                rig={task.rig}
                phase={task.pair === animation.activePairIndex ? animation.phase : task.pair < animation.visiblePairs ? 'completed' : 'idle'}
                active={task.pair === animation.activePairIndex || task.pair < animation.visiblePairs}
                debug={debugRig}
              />
            ))}
          </div>
          <img className="robot-rig__body" src={robotArmConfig.body} alt="AI Banana Master robot" width="1536" height="1024" fetchPriority="high" decoding="async" />
          {debugRig && <><span className="robot-rig__centreline" /><span className="robot-rig__label">Character rig</span></>}
        </div>
        <div className={`robot-workforce__status ${animation.workforceOnline ? 'robot-workforce__status--online' : ''}`} aria-live="polite">
          <span className="status-pulse" />
          <div><small>{activePair?.label ?? 'AI Workforce'}</small><strong>{animation.workforceOnline ? 'AI Workforce Online' : activePair?.action ?? (animation.visiblePairs ? 'Capabilities active' : 'Ready')}</strong></div>
        </div>
        <div className="robot-workforce__handled"><CheckCircle2 /><span><small>Task status</small><strong>{handledText}</strong></span></div>
        <p className="robot-workforce__signature">“I've already handled it.”</p>
      </div>
      <TaskQueue activePairIndex={animation.activePairIndex} visiblePairs={animation.visiblePairs} phase={animation.phase} />
    </div>
  )
}
