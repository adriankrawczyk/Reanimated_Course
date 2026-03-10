import React from 'react'
import { starsArray } from '../utils/arrays/celestialBodies'
import { Star } from './Star'

export const StarField = () => (
  <>
    {starsArray.map((star) => (
      <Star key={star.id} star={star} />
    ))}
  </>
)
