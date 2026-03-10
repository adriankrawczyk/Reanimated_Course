import { cancelAnimation, type SharedValue } from 'react-native-reanimated'
import { WorkletLoopConfig } from '../../types/animations'

export const runLoopAnimation = (
  sharedValue: SharedValue<number>,
  config: WorkletLoopConfig,
) => {
  sharedValue.value = config.from
  sharedValue.value = config.animation
}

export const stopLoopAnimation = (sharedValue: SharedValue<number>) => {
  cancelAnimation(sharedValue)
}
