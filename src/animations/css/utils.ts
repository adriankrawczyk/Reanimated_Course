export const duration = (s: number) => ({
  animationDuration: `${s}s`,
})

export const rotateAroundPoint = (r: number) => ({
  from: { transform: [{ rotate: '0deg' }, { translateX: r }] },
  to: { transform: [{ rotate: '360deg' }, { translateX: r }] },
})
