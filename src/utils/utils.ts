export const starsBackground = Array.from({ length: 30 }, () => ({
  id: Math.random().toString(36).substring(7),
  size: Math.random() * 2 + 2,
  x: Math.random() * 400,
  y: Math.random() * 800,
}))
