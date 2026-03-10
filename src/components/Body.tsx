import React from 'react'
import { View } from 'react-native'
import Animated, { css } from 'react-native-reanimated'
import { CelestialBody } from '../types/types'
import { darken } from '../utils/colorUtils'
import { BORDER_WIDTH, DARKEN_AMOUNT, MIN_BORDER_WIDTH } from '../contstants/constants'
import { useWorklet } from '../hooks/useWorklet'

export const Body = ({
  size,
  x,
  y,
  backgroundColor,
  gradientColors,
  style,
  animation,
  workletAnimation,
}: Partial<CelestialBody>) => {
  const bodySize = size ?? 0
  const bgColor = backgroundColor ?? 'white'
  const thiccBorderColor = darken(bgColor, DARKEN_AMOUNT)
  const hasGradient = gradientColors && gradientColors.length === 2
  const workletStyle = useWorklet(workletAnimation)

  return (
    <Animated.View
      style={[
        ui.baseBody,
        {
          width: bodySize,
          height: bodySize,
          left: x,
          top: y,
          backgroundColor: hasGradient ? undefined : bgColor,
          borderRadius: bodySize / 2,
          borderWidth: bodySize > MIN_BORDER_WIDTH ? BORDER_WIDTH : 0,
          borderColor: thiccBorderColor,
          overflow: hasGradient ? 'hidden' : undefined,
        },
        style,
        animation,
        workletStyle,
      ]}
    >
      {hasGradient && (
        <>
          <View style={[ui.half, { backgroundColor: gradientColors[0] }]} />
          <View style={[ui.half, { backgroundColor: gradientColors[1] }]} />
        </>
      )}
    </Animated.View>
  )
}
const ui = css.create({
  baseBody: {
    position: 'absolute',
    borderStyle: 'solid',
  },
  half: {
    flex: 1,
  },
})
