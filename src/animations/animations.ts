import { css } from 'react-native-reanimated'

/**
 * 1. RAW KEYFRAMES
 */
const KEYFRAMES = {
  rotateScale: {
    from: { opacity: 0, transform: [{ scale: 1 }, { rotate: '0deg' }] },
    to: {
      opacity: 1,
      borderRadius: 100,
      transform: [{ scale: 2 }, { rotate: '360deg' }],
    },
  },
}

/**
 * 2. UTILITIES & PRESETS
 */
// Magic to fix TS errors
const dynamicPresets = Object.fromEntries(
  Object.entries(KEYFRAMES).map(([key, value]) => [key, { animationName: value }]),
) as { [K in keyof typeof KEYFRAMES]: { animationName: (typeof KEYFRAMES)[K] } }

const animate = css.create({
  // Base
  base: { animationDuration: '1s', animationFillMode: 'both' },
  // Modifiers
  verySlow: { animationDuration: '10s' },
  infinite: { animationIterationCount: 'infinite' },
  alternate: { animationDirection: 'alternate' },
  linear: { animationTimingFunction: 'linear' },
  // Presets (Dynamically Mapped & Typed)
  ...dynamicPresets,
})

/**
 * 3. DESTRUCTURING
 */
const { base, rotateScale, verySlow, infinite, alternate, linear } = animate

export const compositions = {
  heroBackground: [base, rotateScale, verySlow, infinite, alternate, linear],
  cardEntrance: [base, rotateScale],
} as const
