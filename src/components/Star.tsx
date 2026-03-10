import React, { useMemo } from 'react'
import { workletCompositions } from '../animations/index'
import { Star as StarModel } from '../types/types'
import { DEVICE_HEIGHT } from '../utils/device'
import { Body } from './Body'

interface StarProps {
  star: StarModel
  travelDistance?: number
}

export const Star = ({ star, travelDistance = DEVICE_HEIGHT * 2 }: StarProps) => {
  const workletAnimation = useMemo(
    () => workletCompositions.starsParallax(star.parallaxDuration, travelDistance),
    [star.parallaxDuration, travelDistance],
  )

  return <Body {...star} workletAnimation={workletAnimation} />
}
