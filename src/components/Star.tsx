import React, { useEffect } from 'react'
import {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated'
import { StarBody } from '../types/types'
import { DEVICE_HEIGHT } from '../utils/device'
import { Body } from './Body'

interface StarProps {
  star: StarBody
  travelDistance?: number
}

export const Star = ({ star, travelDistance = DEVICE_HEIGHT * 2 }: StarProps) => {
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
  }, [star.parallaxDuration, travelDistance])

  const parallaxStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }))

  return <Body {...star} style={parallaxStyle} />
}
