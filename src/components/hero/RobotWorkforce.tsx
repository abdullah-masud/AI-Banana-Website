import { CheckCircle2 } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'
import { useRobotArmAnimation } from '../../hooks/useRobotArmAnimation'
import { RobotArm } from './RobotArm'
import { TaskQueue } from './TaskQueue'

export function RobotWorkforce() {
  const animation = useRobotArmAnimation()
  const activeTask = animation.activeTaskIndex === null ? null : siteConfig.robotArmAnimation.tasks[animation.activeTaskIndex]

  return (
    <div className={`robot-workforce ${animation.workforceOnline ? 'robot-workforce--online' : ''}`} aria-label="AI Banana actively handling business tasks">
      <div className="robot-workforce__stage">
        <div className="robot-workforce__halo" />
        {siteConfig.robotArmAnimation.tasks.map((task, index) => (
          <RobotArm
            key={task.id}
            src={task.asset}
            alt={`${task.title} robotic arm performing ${task.action.toLowerCase()}`}
            side={task.side}
            level={task.level}
            phase={index === animation.activeTaskIndex ? animation.phase : 'idle'}
            active={index === animation.activeTaskIndex}
          />
        ))}
        <img className="robot-workforce__body" src={siteConfig.assets.robotBody} alt="AI Banana Master robot" width="1536" height="1024" fetchPriority="high" decoding="async" />
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
