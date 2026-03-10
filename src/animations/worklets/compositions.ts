import { DEVICE_HEIGHT } from '../../utils/device'
import { toDurationMs } from '../shared/utils'
import { buildWorklet } from './builders/baseBuilder'
import { BEHAVIORS, EASINGS } from './constants'
import { WorkletRecipe } from '../../types/animations'

// Nice worklets compositions
export const workletCompositions = {
  starsParallax: (
    durationS: number,
    travelDistance = DEVICE_HEIGHT * 2,
  ): WorkletRecipe => ({
    translateY: buildWorklet(
      { from: travelDistance, to: -travelDistance },
      toDurationMs(durationS),
      EASINGS.linear,
      BEHAVIORS.infinite,
    ),
  }),
}
