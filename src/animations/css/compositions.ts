import { duration } from '../shared/utils'
import { animate } from './builder'

const { both, infinite, linear, rotateCW, rotateCCW } = animate

// Nice animation compositions
export const cssCompositions = {
  spin: (durationS: number, dir: 1 | -1) => [
    both,
    dir > 0 ? rotateCW : rotateCCW,
    duration(durationS),
    infinite,
    linear,
  ],
}
