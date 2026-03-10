import React from 'react'
import { planetsArray } from '../utils/arrays/celestialBodies'
import { Body } from './Body'
import { compositions } from '../animations/index'

export const Planets = () => (
  <>
    {planetsArray.map((planet) => (
      <Body
        key={planet.id}
        {...planet}
        animation={compositions.spin(planet.rotationDuration, planet.rotationDir)}
      />
    ))}
  </>
)
