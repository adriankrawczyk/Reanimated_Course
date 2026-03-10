import { AnimationRange, BEHAVIORS, EASINGS } from '../constants'
import { buildWorklet } from './baseBuilder'

export const buildMoveTo = (
  from: { x: number; y: number },
  to: { x: number; y: number },
  duration: number,
  easing = EASINGS.inOut,
) => ({
  x: buildWorklet({ from: from.x, to: to.x }, duration, easing),
  y: buildWorklet({ from: from.y, to: to.y }, duration, easing),
})

export const buildRotateAround = () => ({})

export const buildLoop = (
  range: AnimationRange,
  duration: number,
  easing = EASINGS.linear,
) => buildWorklet(range, duration, easing, BEHAVIORS.infinite)
