import React from 'react'
import { useStarsArray } from '../utils/arrays/celestialBodies'
import { Star } from './Star'

export const StarField = () => {
  const starsArray = useStarsArray()

  return (
    <>
      {starsArray.map((star) => (
        <Star key={star.id} star={star} />
      ))}
    </>
  )
}
