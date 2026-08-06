import { useEffect, useState } from 'react'
import { robotArmConfig } from '../data/robotArmConfig'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export type ArmPhase = 'idle' | 'deploying' | 'completed' | 'retracting'

export function useRobotArmAnimation() {
  const reducedMotion = usePrefersReducedMotion()
  const [visiblePairs, setVisiblePairs] = useState(0)
  const [activePairIndex, setActivePairIndex] = useState<number | null>(null)
  const [phase, setPhase] = useState<ArmPhase>('idle')

  useEffect(() => {
    if (reducedMotion) {
      setVisiblePairs(3)
      setActivePairIndex(null)
      setPhase('completed')
      return
    }

    let timers: number[] = []
    const schedule = (callback: () => void, delay: number) => timers.push(window.setTimeout(callback, delay))

    const runCycle = () => {
      timers.forEach(window.clearTimeout)
      timers = []
      setVisiblePairs(0)
      setActivePairIndex(null)
      setPhase('idle')

      const deploy = (pair: number, start: number, duration: number) => {
        schedule(() => { setActivePairIndex(pair); setPhase('deploying') }, start)
        schedule(() => { setVisiblePairs(pair + 1); setActivePairIndex(null); setPhase('completed') }, start + duration)
      }
      const retract = (pair: number, start: number, duration: number) => {
        schedule(() => { setActivePairIndex(pair); setPhase('retracting') }, start)
        schedule(() => { setVisiblePairs(pair); setActivePairIndex(null); setPhase(pair ? 'completed' : 'idle') }, start + duration)
      }

      deploy(0, 900, 700)
      deploy(1, 1900, 600)
      deploy(2, 2800, 500)
      retract(2, 5800, 500)
      retract(1, 6450, 600)
      retract(0, 7200, 700)
    }

    runCycle()
    const cycle = window.setInterval(runCycle, robotArmConfig.cycleDuration)
    return () => { timers.forEach(window.clearTimeout); window.clearInterval(cycle) }
  }, [reducedMotion])

  return {
    visiblePairs,
    activePairIndex,
    phase,
    workforceOnline: visiblePairs === 3 && activePairIndex === null,
    reducedMotion,
  }
}
