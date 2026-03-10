import Animated, { css } from 'react-native-reanimated'
import { cssCompositions } from '../animations/css/compositions'
import { PlanetBody } from '../types/types'
import { Body } from './Body'

interface OrbitProps {
  planet: PlanetBody
  orbitAnimation: Record<string, unknown>[]
  children?: React.ReactNode
}

const Orbit = ({ planet, orbitAnimation, children }: OrbitProps) => (
  <Animated.View
    style={[ui.orbitOrigin, { left: planet.x, top: planet.y }, ...orbitAnimation]}
  >
    {children}
  </Animated.View>
)

export default function Planet(planet: PlanetBody) {
  const orbitAnimation = cssCompositions.orbit(planet.r, planet.rotationDir)

  return (
    <Orbit planet={planet} orbitAnimation={orbitAnimation}>
      <Body
        {...planet}
        x={-planet.size / 2}
        y={-planet.size / 2}
        animation={cssCompositions.spin(planet.rotationDuration, planet.rotationDir)}
      />
    </Orbit>
  )
}

const ui = css.create({
  orbitOrigin: {
    position: 'absolute',
    width: 0,
    height: 0,
  },
})
