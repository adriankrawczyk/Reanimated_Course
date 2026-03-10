import { useEffect } from 'react'
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withRepeat,
  Easing,
} from 'react-native-reanimated'

const BASE_DURATION = 2000

export const useOrbitAnimation = (r: number, speed: number) => {
  const progress = useSharedValue(0)

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, {
        duration: BASE_DURATION * (1 / speed),
        easing: Easing.linear,
      }),
      -1,
      false,
    )
  }, [progress])

  const orbitStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: r * Math.cos(progress.value * Math.PI * 2) },
        { translateY: r * Math.sin(progress.value * Math.PI * 2) },
      ],
    }
  })

  return {
    orbitStyle,
  }
}
