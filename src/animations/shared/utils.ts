// CSS
export const duration = (s: number) => ({
  animationDuration: `${s}s`,
})

// WORKLETS
export const toDurationMs = (durationS: number) =>
  Math.max(1, Math.round(durationS * 1000))

// SHARED
