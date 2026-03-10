import Animated, { css } from 'react-native-reanimated'
import { cssCompositions } from '../animations/css/compositions'
import { PlanetBody } from '../types/types'
import { Body } from './Body'

export default function Planet(planet: PlanetBody) {
  const orbitAnimation = cssCompositions.orbit(
    planet.r,
    10,
    planet.rotationDir,
  ) as unknown as Record<string, unknown>[]

  return (
    <Animated.View
      style={[ui.orbitOrigin, { left: planet.x, top: planet.y }, ...orbitAnimation]}
    >
      <Body
        {...planet}
        x={-planet.size / 2}
        y={-planet.size / 2}
        animation={cssCompositions.spin(planet.rotationDuration, planet.rotationDir)}
      />
    </Animated.View>
  )
}

const ui = css.create({
  orbitOrigin: {
    position: 'absolute',
    width: 0,
    height: 0,
  },
})
