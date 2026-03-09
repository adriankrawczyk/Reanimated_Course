import {
  STAR_SIZE,
  STAR_SIZE_VARIANCE,
  STAR_COUNT,
  PLANET_COUNT,
  PLANET_SIZE,
  PLANET_SIZE_VARIANCE,
} from '../contstants/constants'
import { randomColor } from './colorUtils'

const getRandomSize = (variance: number, size: number) => {
  return Math.random() * variance - variance / 2 + size
}

const generateRandomArray = (
  count: number,
  size: number,
  variance: number,
  backgroundColor?: string,
) =>
  Array.from({ length: count }, () => ({
    id: Math.random().toString(36).substring(7),
    size: getRandomSize(variance, size),
    x: Math.random() * 400,
    y: Math.random() * 800,
    backgroundColor: backgroundColor ?? randomColor(),
  }))

export const starsArray = generateRandomArray(
  STAR_COUNT,
  STAR_SIZE,
  STAR_SIZE_VARIANCE,
  'white',
)

export const planetsArray = generateRandomArray(
  PLANET_COUNT,
  PLANET_SIZE,
  PLANET_SIZE_VARIANCE,
)
