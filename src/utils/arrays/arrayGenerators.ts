import { GenerateRandomArrayOptions } from '../../types/types'
import { randomColor } from '../colorUtils'
import { getRandomSize, getRandomInBounds } from '../randomUtils'

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
