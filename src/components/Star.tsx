import React, { useEffect } from 'react'
import {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated'
import { StarBody } from '../types/types'
import { useAppDimensions } from '../AppContext'
import { Body } from './Body'

interface StarProps {
  star: StarBody
  travelDistance?: number
}

export const Star = ({ star, travelDistance }: StarProps) => {
  const { DEVICE_HEIGHT } = useAppDimensions()
  const resolvedTravelDistance = travelDistance ?? DEVICE_HEIGHT * 2
  const translateY = useSharedValue(resolvedTravelDistance)

  useEffect(() => {
    translateY.value = withRepeat(
      withTiming(-resolvedTravelDistance, {
        duration: star.parallaxDuration * 1000,
        easing: Easing.linear,
      }),
      -1,
      false,
    )
  }, [resolvedTravelDistance, star.parallaxDuration, translateY])

  const parallaxStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }))

  return <Body {...star} style={parallaxStyle} />
}
