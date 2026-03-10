import {
  STAR_SIZE,
  STAR_SIZE_VARIANCE,
  STAR_COUNT,
  STAR_VERTICAL_OVERFLOW_FACTOR,
  STAR_PARALLAX_DURATION_MIN,
  STAR_PARALLAX_DURATION_MAX,
  PLANET_COUNT,
  PLANET_SIZE,
  PLANET_SIZE_VARIANCE,
  PLANET_ROTATION_DURATION_MIN,
  PLANET_ROTATION_DURATION_MAX,
  SUN_SIZE,
} from '../../contstants/constants'
import { darken } from '../colorUtils'
import { PlanetBody, StarBody } from '../../types/types'
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../device'
import { generateRandomArray } from './arrayGenerators'
import { getRandomDirection, getRandomDuration, randomNumber } from '../randomUtils'

export const starsArray: StarBody[] = generateRandomArray(
  STAR_COUNT,
  STAR_SIZE,
  STAR_SIZE_VARIANCE,
  {
    backgroundColor: 'white',
    yOverflow: DEVICE_HEIGHT * STAR_VERTICAL_OVERFLOW_FACTOR,
  },
).map((star) => ({
  ...star,
  parallaxDuration: Number(
    getRandomDuration(STAR_PARALLAX_DURATION_MIN, STAR_PARALLAX_DURATION_MAX).toFixed(2),
  ),
}))

export const planetsArray: PlanetBody[] = generateRandomArray(
  PLANET_COUNT,
  PLANET_SIZE,
  PLANET_SIZE_VARIANCE,
).map((planet) => ({
  ...planet,
  x: DEVICE_WIDTH / 2 - SUN_SIZE / 4,
  y: DEVICE_HEIGHT / 2 - SUN_SIZE / 4,
  r: randomNumber(SUN_SIZE * 1.5, SUN_SIZE * 3),
  rotationDuration: Math.ceil(
    getRandomDuration(PLANET_ROTATION_DURATION_MIN, PLANET_ROTATION_DURATION_MAX),
  ),
  rotationDir: getRandomDirection(),
  gradientColors: [planet.backgroundColor, darken(planet.backgroundColor)] as [
    string,
    string,
  ],
}))
