import { CheckCircle2 } from 'lucide-react'
import { robotTaskConfig } from '../../data/robotTaskConfig'
import { siteConfig } from '../../data/siteConfig'
import { useRobotArmAnimation } from '../../hooks/useRobotArmAnimation'
import { TaskQueue } from './TaskQueue'

export function RobotWorkforce() {
  const animation = useRobotArmAnimation()
  const activePair = animation.activePairIndex === null ? null : robotTaskConfig.pairs[animation.activePairIndex]
  const latestResult = animation.visiblePairs ? robotTaskConfig.pairs[animation.visiblePairs - 1].result : 'Working quietly.'
  const handledText = animation.workforceOnline ? 'Everything handled.' : activePair?.action ?? latestResult

  return (
    <div className={`robot-workforce ${animation.workforceOnline ? 'robot-workforce--online' : ''}`} aria-label="AI Banana Power Mode with six active business capabilities">
      <div className="robot-workforce__stage robot-workforce__stage--power-mode">
        <div className="robot-workforce__halo" />
        <img className="robot-workforce__power-mode" src={siteConfig.assets.powerModeHero} alt="AI Banana in Power Mode with six proportioned capability arms" width="578" height="718" fetchPriority="high" decoding="async" />
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
