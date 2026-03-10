import React from 'react'
import { StarBody } from '../types/types'
import { Body } from './Body'
import { useStarAnimation } from '../animations/hooks/useStarAnimation'

interface StarProps {
  star: StarBody
  travelDistance?: number
}

export const Star = ({ star, travelDistance }: StarProps) => {
  const { parallaxStyle } = useStarAnimation(star, travelDistance)

  return <Body {...star} style={parallaxStyle} />
}
