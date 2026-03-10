import { withRepeat, withTiming, type EasingFunction } from 'react-native-reanimated'
import { WorkletLoopConfig } from '../../../types/animations'
import {
  BEHAVIORS,
  EASINGS,
  type AnimationRange,
  type AnimationBehavior,
} from '../constants'

// Configuration object
export const buildWorklet = (
  range: AnimationRange,
  duration: number,
  easing: EasingFunction = EASINGS.linear,
  behavior: AnimationBehavior = BEHAVIORS.once,
): WorkletLoopConfig => ({
  from: range.from,
  animation: withRepeat(
    withTiming(range.to, { duration, easing }),
    behavior.iterations,
    behavior.reverse,
  ),
})
