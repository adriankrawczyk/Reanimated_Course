import { animate } from './builder'
import { duration } from './utils'
import { orbitKeyframes } from './keyframes'
const { infinite, linear, rotateCW, rotateCCW, slow } = animate

// Nice animation compositions
export const compositions = {
  spin: (durationS: number, dir: 1 | -1) => [
    dir > 0 ? rotateCW : rotateCCW,
    duration(durationS),
    infinite,
    linear,
  ],
  orbit: (r: number, dir: 1 | -1) => [
    { animationName: orbitKeyframes(r, dir) },
    slow,
    infinite,
    linear,
  ],
}
