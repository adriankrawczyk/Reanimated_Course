import React from 'react'
import { css } from 'react-native-reanimated'
import { SUN_SIZE } from '../contstants/constants'
import { COLORS } from '../contstants/colors'
import { Body } from './Body'

export const Sun = () => (
  <Body size={SUN_SIZE} backgroundColor={COLORS.sun} style={ui.sunShadow} />
)

const ui = css.create({
  sunShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 0,
    elevation: 10,
  },
})
