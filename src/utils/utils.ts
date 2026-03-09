import { Dimensions } from 'react-native'
import {
  STAR_SIZE,
  STAR_SIZE_VARIANCE,
  STAR_COUNT,
  PLANET_COUNT,
  PLANET_SIZE,
  PLANET_SIZE_VARIANCE,
  PLANET_ROTATION_DURATION_MIN,
  PLANET_ROTATION_DURATION_MAX,
} from '../contstants/constants'
import { darken, randomColor } from './colorUtils'

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window')

const getRandomSize = (variance: number, size: number) => {
  return Math.random() * variance - variance / 2 + size
}

const getRandomInBounds = (maxSize: number, screenDim: number) => {
  return Math.random() * (screenDim - maxSize)
}

const getRandomDirection = (): 1 | -1 => (Math.random() < 0.5 ? 1 : -1)

const getRandomDuration = (min: number, max: number) =>
  Math.ceil(Math.random() * (max - min) + min)

const generateRandomArray = (
  count: number,
  size: number,
  variance: number,
  backgroundColor?: string,
) =>
  Array.from({ length: count }, () => ({
    id: Math.random().toString(36).substring(7),
    size: getRandomSize(variance, size),
    x: getRandomInBounds(size + variance, SCREEN_W),
    y: getRandomInBounds(size + variance, SCREEN_H),
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
).map((planet) => ({
  ...planet,
  rotationDuration: getRandomDuration(
    PLANET_ROTATION_DURATION_MIN,
    PLANET_ROTATION_DURATION_MAX,
  ),
  rotationDir: getRandomDirection(),
  gradientColors: [planet.backgroundColor, darken(planet.backgroundColor)] as [
    string,
    string,
  ],
}))
