import { cancelAnimation, type SharedValue } from 'react-native-reanimated'
import type { buildWorklet } from './builder'

export const runLoopAnimation = (
  sharedValue: SharedValue<number>,
  config: ReturnType<typeof buildWorklet>,
) => {
  sharedValue.value = config.from
  sharedValue.value = config.animation
}

export const stopLoopAnimation = (sharedValue: SharedValue<number>) => {
  cancelAnimation(sharedValue)
}
