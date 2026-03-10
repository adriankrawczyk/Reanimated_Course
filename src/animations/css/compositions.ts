import { animate } from './builder'
import { duration } from './utils'
import { orbitKeyframes } from './keyframes'
const { both, infinite, linear, rotateCW, rotateCCW, slow } = animate

// Nice animation compositions
export const cssCompositions = {
  spin: (durationS: number, dir: 1 | -1) => [
    both,
    dir > 0 ? rotateCW : rotateCCW,
    duration(durationS),
    infinite,
    linear,
  ],
  orbit: (r: number, dir: 1 | -1) => [
    both,
    { animationName: orbitKeyframes(r, dir) },
    slow,
    infinite,
    linear,
  ],
}
