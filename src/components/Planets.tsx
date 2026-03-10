import React from 'react'
import { planetsArray } from '../utils/arrays/celestialBodies'
import Planet from './Planet'

export const Planets = () => {
  return (
    <>
      {planetsArray.map((planet) => (
        <Planet key={planet.id} {...planet} />
      ))}
    </>
  )
}
