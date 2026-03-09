import React from 'react'
import { starsArray } from '../utils/utils'
import { Body } from './Body'

export const StarField = () => (
  <>
    {starsArray.map((star) => (
      <Body key={star.id} {...star} />
    ))}
  </>
)
