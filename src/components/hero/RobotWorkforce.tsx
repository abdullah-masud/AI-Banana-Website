import { CheckCircle2 } from 'lucide-react'
import { robotArmConfig } from '../../data/robotArmConfig'
import { useRobotArmAnimation } from '../../hooks/useRobotArmAnimation'
import { RobotArm } from './RobotArm'
import { TaskQueue } from './TaskQueue'

export function RobotWorkforce() {
  const animation = useRobotArmAnimation()
  const activeTask = animation.activeTaskIndex === null ? null : robotArmConfig.tasks[animation.activeTaskIndex]
  const debugRig = robotArmConfig.debug

  return (
    <div className={`robot-workforce ${animation.workforceOnline ? 'robot-workforce--online' : ''}`} aria-label="AI Banana actively handling business tasks">
      <div className={`robot-workforce__stage ${debugRig ? 'robot-workforce__stage--debug' : ''}`}>
        <div className="robot-workforce__halo" />
        <div className="robot-rig">
          <div className="robot-rig__rear-arms">
            {robotArmConfig.tasks.map((task, index) => (
              <RobotArm
                key={task.id}
                id={task.id}
                src={task.asset}
                alt={`${task.title} robotic arm performing ${task.action.toLowerCase()}`}
                rig={task.rig}
                phase={index === animation.activeTaskIndex ? animation.phase : 'idle'}
                active={index === animation.activeTaskIndex}
                debug={debugRig}
              />
            ))}
          </div>
          <img className="robot-rig__body" src={robotArmConfig.body} alt="AI Banana Master robot" width="1536" height="1024" fetchPriority="high" decoding="async" />
          {debugRig && <><span className="robot-rig__centreline" /><span className="robot-rig__label">Character rig</span></>}
        </div>
        <div className={`robot-workforce__status ${animation.workforceOnline ? 'robot-workforce__status--online' : ''}`} aria-live="polite">
          <span className="status-pulse" />
          <div><small>{activeTask ? activeTask.title : 'AI Workforce'}</small><strong>{animation.workforceOnline ? 'AI Workforce Online' : activeTask ? activeTask.action : 'Ready'}</strong></div>
        </div>
        <div className="robot-workforce__handled"><CheckCircle2 /><span><small>Task status</small><strong>{activeTask && animation.phase === 'completed' ? activeTask.result : animation.workforceOnline ? 'Everything handled.' : 'Working quietly.'}</strong></span></div>
        <p className="robot-workforce__signature">“I've already handled it.”</p>
      </div>
      <TaskQueue activeTaskIndex={animation.activeTaskIndex} completedTaskCount={animation.completedTaskCount} phase={animation.phase} />
    </div>
  )
}
