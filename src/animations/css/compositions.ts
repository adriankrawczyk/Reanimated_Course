import { animate } from './builder'
import { duration } from './utils'
import { orbitKeyframes } from './keyframes'
const { infinite, linear, rotateCW, rotateCCW } = animate

// Nice animation compositions
export const compositions = {
  spin: (durationS: number, dir: 1 | -1) => [
    dir > 0 ? rotateCW : rotateCCW,
    duration(durationS),
    infinite,
    linear,
  ],
  orbit: (speed: number, r: number, dir: 1 | -1) => [
    { animationName: orbitKeyframes(r, dir) },
    duration(10 * speed),
    infinite,
    linear,
  ],
}
