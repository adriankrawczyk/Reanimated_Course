import { Easing } from 'react-native-reanimated'

export type AnimationRange = { from: number; to: number }
export type AnimationBehavior = { iterations: number; reverse: boolean }

// Raw Ranges
export const RANGES = {
  rotateCW: { from: 0, to: 360 },
  rotateCCW: { from: 0, to: -360 },
  pulse: { from: 1, to: 1.2 },
  fadeIn: { from: 0, to: 1 },
  fadeOut: { from: 1, to: 0 },
}

export const BEHAVIORS = {
  infinite: { iterations: -1, reverse: false },
  yoyo: { iterations: -1, reverse: true },
  once: { iterations: 1, reverse: false },
}

export const EASINGS = {
  linear: Easing.linear,
  ease: Easing.ease,
  inOut: Easing.inOut(Easing.ease),
  elastic: Easing.elastic(1),
}
