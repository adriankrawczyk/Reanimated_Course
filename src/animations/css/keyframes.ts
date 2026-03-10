// Raw keyframes
export const KEYFRAMES = {
  rotateCW: {
    from: { transform: [{ rotate: '0deg' }] },
    to: { transform: [{ rotate: '360deg' }] },
  },
  rotateCCW: {
    from: { transform: [{ rotate: '0deg' }] },
    to: { transform: [{ rotate: '-360deg' }] },
  },
}

export const orbitKeyframes = (r: number, dir: 1 | -1) => ({
  from: {
    transform: [{ rotate: '0deg' }, { translateX: r }],
  },
  to: {
    transform: [{ rotate: dir > 0 ? '360deg' : '-360deg' }, { translateX: r }],
  },
})
