import React from 'react'
import { BASE_Z_INDEX, SUN_SIZE } from '../constants/constants'
import { COLORS } from '../constants/colors'
import { Body } from './Body'

export const Sun = () => (
  <Body style={{ zIndex: BASE_Z_INDEX }} size={SUN_SIZE} backgroundColor={COLORS.sun} />
)
