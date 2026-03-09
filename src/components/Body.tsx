import React from 'react'
import Animated, { css } from 'react-native-reanimated'
import { CelestialBody } from '../types/types'
import { darken } from '../utils/colorUtils'
import { BORDER_WIDTH, DARKEN_AMOUNT, MIN_BORDER_WIDTH } from '../contstants/constants'

export const Body = ({ size, x, y, backgroundColor, style }: Partial<CelestialBody>) => {
  const bodySize = size ?? 0
  const bgColor = backgroundColor ?? 'white'
  const thiccBorderColor = darken(bgColor, DARKEN_AMOUNT)
  return (
    <Animated.View
      style={[
        ui.baseBody,
        {
          width: bodySize,
          height: bodySize,
          left: x,
          top: y,
          backgroundColor: bgColor,
          borderRadius: bodySize / 2,
          borderWidth: bodySize > MIN_BORDER_WIDTH ? BORDER_WIDTH : 0,
          borderColor: thiccBorderColor,
        },
        style,
      ]}
    />
  )
}

const ui = css.create({
  baseBody: {
    position: 'absolute',
    borderStyle: 'solid',
  },
})
