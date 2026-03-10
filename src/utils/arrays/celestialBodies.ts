import { useMemo } from 'react'
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
  MIN_R,
  MAX_R,
} from '../../contstants/constants'
import { useAppDimensions } from '../../AppContext'
import { darken } from '../colorUtils'
import { PlanetBody, StarBody } from '../../types/types'
import { generateRandomArray } from './arrayGenerators'
import { getRandomDirection, getRandomDuration, randomNumber } from '../randomUtils'

export const useStarsArray = (): StarBody[] => {
  const { DEVICE_HEIGHT, DEVICE_WIDTH } = useAppDimensions()

  return useMemo(
    () =>
      generateRandomArray(
        STAR_COUNT,
        STAR_SIZE,
        STAR_SIZE_VARIANCE,
        DEVICE_WIDTH,
        DEVICE_HEIGHT,
        {
          backgroundColor: 'white',
          yOverflow: DEVICE_HEIGHT * STAR_VERTICAL_OVERFLOW_FACTOR,
        },
      ).map((star) => ({
        ...star,
        parallaxDuration: Number(
          getRandomDuration(
            STAR_PARALLAX_DURATION_MIN,
            STAR_PARALLAX_DURATION_MAX,
          ).toFixed(2),
        ),
      })),
    [DEVICE_HEIGHT, DEVICE_WIDTH],
  )
}

export const usePlanetsArray = (): PlanetBody[] => {
  const { DEVICE_HEIGHT, DEVICE_WIDTH } = useAppDimensions()

  return useMemo(
    () =>
      generateRandomArray(
        PLANET_COUNT,
        PLANET_SIZE,
        PLANET_SIZE_VARIANCE,
        DEVICE_WIDTH,
        DEVICE_HEIGHT,
      ).map((planet) => ({
        ...planet,
        // Works ?
        x: DEVICE_WIDTH / 2 - SUN_SIZE / 4,
        y: DEVICE_HEIGHT / 2 - SUN_SIZE / 4,
        r: randomNumber(MIN_R, MAX_R),
        rotationDuration: Math.ceil(
          getRandomDuration(PLANET_ROTATION_DURATION_MIN, PLANET_ROTATION_DURATION_MAX),
        ),
        rotationDir: getRandomDirection(),
        gradientColors: [planet.backgroundColor, darken(planet.backgroundColor)] as [
          string,
          string,
        ],
      })),
    [DEVICE_HEIGHT, DEVICE_WIDTH],
  )
}
