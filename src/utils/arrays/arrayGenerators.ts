import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../device'
import { randomColor } from '../colorUtils'
import { getRandomSize, getRandomInBounds } from '../randomUtils'

export interface GenerateRandomArrayOptions {
  backgroundColor?: string
  xOverflow?: number
  yOverflow?: number
}

export const generateRandomArray = (
  count: number,
  size: number,
  variance: number,
  options: GenerateRandomArrayOptions = {},
) =>
  Array.from({ length: count }, (_, index) => ({
    id: `${index}`,
    size: getRandomSize(variance, size),
    x: getRandomInBounds(size + variance, DEVICE_WIDTH, options.xOverflow),
    y: getRandomInBounds(size + variance, DEVICE_HEIGHT, options.yOverflow),
    backgroundColor: options.backgroundColor ?? randomColor(),
  }))
