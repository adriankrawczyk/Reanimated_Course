import React, { useEffect } from 'react'
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import {
  runLoopAnimation,
  stopLoopAnimation,
  workletCompositions,
} from '../animations/index'
import { Star as StarModel } from '../types/types'
import { DEVICE_HEIGHT } from '../utils/device'

interface StarProps {
  star: StarModel
  travelDistance?: number
}

export const Star = ({ star, travelDistance = DEVICE_HEIGHT * 2 }: StarProps) => {
  const translateY = useSharedValue(travelDistance)

  useEffect(() => {
    const parallaxLoop = workletCompositions.starsParallax(
      star.parallaxDuration,
      travelDistance,
    )
    runLoopAnimation(translateY, parallaxLoop)

    return () => {
      stopLoopAnimation(translateY)
    }
  }, [star.parallaxDuration, travelDistance, translateY])

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }))

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          width: star.size,
          height: star.size,
          left: star.x,
          top: star.y,
          borderRadius: star.size / 2,
          backgroundColor: star.backgroundColor,
        },
        animatedStyle,
      ]}
    />
  )
}
