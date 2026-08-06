import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export type ArmPhase = 'idle' | 'deploying' | 'completed'

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

    const timers: number[] = []
    const schedule = (callback: () => void, delay: number) => timers.push(window.setTimeout(callback, delay))
    const deploy = (pair: number, start: number, duration: number) => {
      schedule(() => { setActivePairIndex(pair); setPhase('deploying') }, start)
      schedule(() => { setVisiblePairs(pair + 1); setActivePairIndex(null); setPhase('completed') }, start + duration)
    }

    deploy(0, 900, 700)
    deploy(1, 1900, 600)
    deploy(2, 2800, 500)

    return () => timers.forEach(window.clearTimeout)
  }, [reducedMotion])

  return {
    visiblePairs,
    activePairIndex,
    phase,
    workforceOnline: visiblePairs === 3 && activePairIndex === null,
    reducedMotion,
  }
}
