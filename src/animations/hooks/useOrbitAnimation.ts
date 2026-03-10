import { useEffect } from 'react'
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withRepeat,
  Easing,
} from 'react-native-reanimated'
import { BASE_Z_INDEX } from '../../constants/constants'
import { Point3D } from '../../types/types'

const BASE_DURATION = 3000
const BASE_PERSPECTIVE = 1000

export const useOrbitAnimation = (
  rotationDir: number,
  r: number,
  speed: number,
  axisA: Point3D,
  axisB: Point3D,
) => {
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
    const angle = progress.value * Math.PI * 2 * rotationDir
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)

    // Linear combination of the two axes allows any 3D orientation
    const x = r * (axisA.x * cos + axisB.x * sin)
    const y = r * (axisA.y * cos + axisB.y * sin)
    const z = r * (axisA.z * cos + axisB.z * sin)

    const scale = BASE_PERSPECTIVE / (BASE_PERSPECTIVE - z)

    return {
      zIndex: Math.round(BASE_Z_INDEX + z),
      transform: [{ translateX: x }, { translateY: y }, { scale }],
    }
  })

  return { orbitStyle }
}
