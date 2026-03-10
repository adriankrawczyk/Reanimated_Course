export const getRandomSize = (variance: number, size: number) => {
  return Math.random() * variance - variance / 2 + size
}

export const getRandomInBounds = (maxSize: number, screenDim: number, overflow = 0) => {
  return Math.random() * (screenDim - maxSize + overflow * 2) - overflow
}

export const getRandomDirection = (): 1 | -1 => (Math.random() < 0.5 ? 1 : -1)

export const getRandomDuration = (min: number, max: number) =>
  Math.random() * (max - min) + min
