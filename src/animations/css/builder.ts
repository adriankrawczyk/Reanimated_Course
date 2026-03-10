import { css } from 'react-native-reanimated'
import { KEYFRAMES } from './keyframes'

// Translate to animationName and some magic to fix TS errors
const dynamicPresets = Object.fromEntries(
  Object.entries(KEYFRAMES).map(([key, value]) => [key, { animationName: value }]),
) as { [K in keyof typeof KEYFRAMES]: { animationName: (typeof KEYFRAMES)[K] } }

// Presets for css animations
export const animate = css.create({
  infinite: { animationIterationCount: 'infinite' },
  linear: { animationTimingFunction: 'linear' },
  slow: { animationDuration: '10s' },
  ...dynamicPresets,
})
