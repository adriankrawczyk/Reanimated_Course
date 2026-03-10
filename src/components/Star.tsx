import React from 'react'
import { StarBody } from '../types/types'
import { Body } from './Body'
import { useStarAnimation } from '../animations/hooks/useStarAnimation'

export const Star = ({ star }: { star: StarBody }) => {
  const { parallaxStyle } = useStarAnimation(star)

  return <Body {...star} style={parallaxStyle} />
}
