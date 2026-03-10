import Animated, { css } from 'react-native-reanimated'
import { compositions } from '../animations/css/compositions'
import { useOrbitAnimation } from '../animations/hooks/useOrbitAnimation'
import { PlanetBody } from '../types/types'
import { Body } from './Body'

interface OrbitProps {
  planet: PlanetBody
  orbitAnimation: ReturnType<typeof useOrbitAnimation>
  children?: React.ReactNode
}

const Orbit = ({ planet, orbitAnimation, children }: OrbitProps) => {
  return (
    <Animated.View
      style={[
        ui.orbitOrigin,
        { left: planet.x, top: planet.y },
        orbitAnimation.orbitStyle,
      ]}
    >
      {children}
    </Animated.View>
  )
}

export function Planet(planet: PlanetBody) {
  const { rotationDuration, rotationDir, r, speed } = planet
  const orbitAnimation = useOrbitAnimation(r, speed)

  return (
    <Orbit planet={planet} orbitAnimation={orbitAnimation}>
      <Body
        {...planet}
        x={-planet.size / 2}
        y={-planet.size / 2}
        animation={compositions.spin(rotationDuration, rotationDir)}
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
