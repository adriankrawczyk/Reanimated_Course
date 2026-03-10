import { DEVICE_HEIGHT } from '../../utils/device'
import { toDurationMs } from '../shared/utils'
import { buildWorklet } from './builder'
import { BEHAVIORS, EASINGS } from './constants'

// Nice worklets compositions
export const workletCompositions = {
  starsParallax: (durationS: number, travelDistance = DEVICE_HEIGHT * 2) =>
    buildWorklet(
      { from: travelDistance, to: -travelDistance },
      toDurationMs(durationS),
      EASINGS.linear,
      BEHAVIORS.infinite,
    ),
}
