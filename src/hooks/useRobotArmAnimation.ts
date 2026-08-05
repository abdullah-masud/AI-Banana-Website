import { useEffect, useState } from 'react'
import { siteConfig } from '../data/siteConfig'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export type ArmPhase = 'idle' | 'deploying' | 'working' | 'completed' | 'retracting'

export function useRobotArmAnimation() {
  const reducedMotion = usePrefersReducedMotion()
  const [activeTaskIndex, setActiveTaskIndex] = useState<number | null>(null)
  const [phase, setPhase] = useState<ArmPhase>('idle')
  const [completedTaskCount, setCompletedTaskCount] = useState(0)
  const [workforceOnline, setWorkforceOnline] = useState(false)

  useEffect(() => {
    const animation = siteConfig.robotArmAnimation

    if (reducedMotion) {
      setActiveTaskIndex(null)
      setPhase('completed')
      setCompletedTaskCount(animation.tasks.length)
      setWorkforceOnline(true)
      return
    }

    let timers: number[] = []

    const schedule = (callback: () => void, delay: number) => {
      timers.push(window.setTimeout(callback, delay))
    }

    const runCycle = () => {
      timers.forEach(window.clearTimeout)
      timers = []
      setActiveTaskIndex(null)
      setPhase('idle')
      setCompletedTaskCount(0)
      setWorkforceOnline(false)

      animation.tasks.forEach((task, index) => {
        schedule(() => { setActiveTaskIndex(index); setPhase('deploying') }, task.start)
        schedule(() => setPhase('working'), task.start + task.duration * .3)
        schedule(() => { setPhase('completed'); setCompletedTaskCount(index + 1) }, task.start + task.duration * .66)
        schedule(() => setPhase('retracting'), task.start + task.duration * .84)
        schedule(() => { setActiveTaskIndex(null); setPhase('idle') }, task.start + task.duration)
      })

      schedule(() => setWorkforceOnline(true), animation.finalAt)
      schedule(() => {
        setCompletedTaskCount(0)
        setWorkforceOnline(false)
      }, animation.resetAt)
    }

    runCycle()
    const cycle = window.setInterval(runCycle, animation.cycleDuration)

    return () => {
      timers.forEach(window.clearTimeout)
      window.clearInterval(cycle)
    }
  }, [reducedMotion])

  return { activeTaskIndex, phase, completedTaskCount, workforceOnline, reducedMotion }
}
