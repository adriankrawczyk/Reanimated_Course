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
  deviceWidth: number,
  deviceHeight: number,
  options: GenerateRandomArrayOptions = {},
) => {
  return Array.from({ length: count }, (_, index) => ({
    id: `${index}`,
    size: getRandomSize(variance, size),
    x: getRandomInBounds(size + variance, deviceWidth, options.xOverflow),
    y: getRandomInBounds(size + variance, deviceHeight, options.yOverflow),
    backgroundColor: options.backgroundColor ?? randomColor(),
  }))
}
