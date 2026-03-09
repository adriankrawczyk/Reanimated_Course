import { css } from 'react-native-reanimated'

// Raw keyframes
const KEYFRAMES = {
  rotateScale: {
    from: { opacity: 0, transform: [{ scale: 1 }, { rotate: '0deg' }] },
    to: {
      opacity: 1,
      borderRadius: 100,
      transform: [{ scale: 2 }, { rotate: '360deg' }],
    },
  },
  rotateAxis: {
    from: { transform: [{ rotateX: '0deg' }, { rotateY: '0deg' }] },
    to: { transform: [{ rotateX: '360deg' }, { rotateY: '360deg' }] },
  },
}

// Translate to animationName and some magic to fix TS errors
const dynamicPresets = Object.fromEntries(
  Object.entries(KEYFRAMES).map(([key, value]) => [key, { animationName: value }]),
) as { [K in keyof typeof KEYFRAMES]: { animationName: (typeof KEYFRAMES)[K] } }

const animate = css.create({
  base: { animationDuration: '1s', animationFillMode: 'both' },
  verySlow: { animationDuration: '10s' },
  infinite: { animationIterationCount: 'infinite' },
  alternate: { animationDirection: 'alternate' },
  linear: { animationTimingFunction: 'linear' },
  ...dynamicPresets,
})

const { base, rotateScale, rotateAxis, verySlow, infinite, alternate, linear } = animate

// Nice animation compositions
export const compositions = {
  heroBackground: [base, rotateScale, verySlow, infinite, alternate, linear],
  cardEntrance: [base, rotateScale],
  spin: [base, rotateAxis, verySlow, infinite, alternate, linear],
}
