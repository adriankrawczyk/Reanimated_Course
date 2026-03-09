import React from 'react'
import { planetsArray } from '../utils/utils'
import { Body } from './Body'
import { compositions } from '../animations/animations'

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
