import { useEffect } from 'react'
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withRepeat,
  Easing,
} from 'react-native-reanimated'
import { BASE_Z_INDEX } from '../../constants/constants'

const BASE_DURATION = 3000
const BASE_PERSPECTIVE = 1000
const TILT_FACTOR = 0.3
const Z_FACTOR = 4

export const useOrbitAnimation = (r: number, speed: number) => {
  const progress = useSharedValue(0)

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, {
        duration: BASE_DURATION / speed,
        easing: Easing.linear,
      }),
      -1,
      false,
    )
  }, [speed])

  const orbitStyle = useAnimatedStyle(() => {
    const angle = progress.value * Math.PI * 2

    const x = r * Math.cos(angle)
    const y = r * Math.sin(angle) * TILT_FACTOR
    const z = r * Math.sin(angle) * Z_FACTOR

    const scale = BASE_PERSPECTIVE / (BASE_PERSPECTIVE - z)

    return {
      zIndex: Math.round(BASE_Z_INDEX + z),

      transform: [{ translateX: x }, { translateY: y }, { scale }],
    }
  })

  return {
    orbitStyle,
  }
}
