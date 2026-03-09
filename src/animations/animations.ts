import { css } from 'react-native-reanimated'

// Raw keyframes
const KEYFRAMES = {
  rotateCW: {
    from: { transform: [{ rotate: '0deg' }] },
    to: { transform: [{ rotate: '360deg' }] },
  },
  rotateCCW: {
    from: { transform: [{ rotate: '0deg' }] },
    to: { transform: [{ rotate: '-360deg' }] },
  },
  parallax: {
    from: { transform: [{ translateY: 0 }] },
    to: { transform: [{ translateY: -1000 }] },
  },
}

// Translate to animationName and some magic to fix TS errors
const dynamicPresets = Object.fromEntries(
  Object.entries(KEYFRAMES).map(([key, value]) => [key, { animationName: value }]),
) as { [K in keyof typeof KEYFRAMES]: { animationName: (typeof KEYFRAMES)[K] } }

const animate = css.create({
  both: { animationFillMode: 'both' },
  infinite: { animationIterationCount: 'infinite' },
  alternate: { animationDirection: 'alternate' },
  linear: { animationTimingFunction: 'linear' },
  ...dynamicPresets,
})

const duration = (s: number) => ({
  animationDuration: `${s}s`,
})

const { both, infinite, alternate, linear, rotateCW, rotateCCW, parallax } = animate

// Nice animation compositions
export const compositions = {
  spin: (durationS: number, dir: 1 | -1) => [
    both,
    dir > 0 ? rotateCW : rotateCCW,
    duration(durationS),
    infinite,
    linear,
  ],
  stars: [both, parallax, infinite, alternate, linear],
}
