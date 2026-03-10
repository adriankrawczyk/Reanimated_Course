import { useEffect } from 'react'
import {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated'
import { StarBody } from '../../types/types'
import { useAppDimensions } from '../../AppContext'
import { STAR_TRAVEL_DISTANCE_FACTOR } from '../../constants/constants'

export const useStarAnimation = (star: StarBody) => {
  const { DEVICE_HEIGHT } = useAppDimensions()
  const travelDistance = DEVICE_HEIGHT * STAR_TRAVEL_DISTANCE_FACTOR

  const translateY = useSharedValue(travelDistance)

  useEffect(() => {
    translateY.value = withRepeat(
      withTiming(-travelDistance, {
        duration: star.parallaxDuration * 1000,
        easing: Easing.linear,
      }),
      -1,
      false,
    )
  }, [travelDistance, star.parallaxDuration, translateY])

  const parallaxStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }))

  return {
    parallaxStyle,
  }
}
