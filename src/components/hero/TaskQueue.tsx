import { BarChart3, CalendarDays, Check, Database, Mail, Phone, Workflow } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'
import type { ArmPhase } from '../../hooks/useRobotArmAnimation'

const icons = { receptionist: Phone, email: Mail, calendar: CalendarDays, crm: Database, workflow: Workflow, analytics: BarChart3 }

type TaskQueueProps = {
  activeTaskIndex: number | null
  completedTaskCount: number
  phase: ArmPhase
}

export function TaskQueue({ activeTaskIndex, completedTaskCount, phase }: TaskQueueProps) {
  return (
    <div className="robot-task-queue" aria-label="AI workforce task queue">
      {siteConfig.robotArmAnimation.tasks.map((task, index) => {
        const Icon = icons[task.id]
        const complete = index < completedTaskCount
        const active = index === activeTaskIndex
        const status = complete ? task.result : active ? task.action : task.incoming

        return (
          <div className={`robot-task ${active ? 'robot-task--active' : ''} ${complete ? 'robot-task--complete' : ''}`} key={task.id}>
            <span className="robot-task__icon">{complete ? <Check /> : <Icon />}</span>
            <span><small>{task.title}</small><strong>{status}</strong></span>
            {active && <i className={`robot-task__progress robot-task__progress--${phase}`} />}
          </div>
        )
      })}
    </div>
  )
}
