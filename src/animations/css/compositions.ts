import { animate } from './builder'
import { duration } from './utils'

const { both, infinite, linear, rotateCW, rotateCCW } = animate

const orbitKeyframes = (r: number, dir: 1 | -1) => ({
  from: {
    transform: [{ rotate: '0deg' }, { translateX: r }],
  },
  to: {
    transform: [{ rotate: dir > 0 ? '360deg' : '-360deg' }, { translateX: r }],
  },
})

// Nice animation compositions
export const cssCompositions = {
  spin: (durationS: number, dir: 1 | -1) => [
    both,
    dir > 0 ? rotateCW : rotateCCW,
    duration(durationS),
    infinite,
    linear,
  ],
  orbit: (r: number, durationS: number, dir: 1 | -1) => [
    both,
    { animationName: orbitKeyframes(r, dir) },
    duration(durationS),
    infinite,
    linear,
  ],
  rotate: (r: number, durationS = 10, dir: 1 | -1 = 1) => [
    both,
    { animationName: orbitKeyframes(r, dir) },
    duration(durationS),
    infinite,
    linear,
  ],
}
