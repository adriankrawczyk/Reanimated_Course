import React from 'react'
import { usePlanetsArray } from '../utils/arrays/celestialBodies'
import Planet from './Planet'

export const Planets = () => {
  const planetsArray = usePlanetsArray()

  return (
    <>
      {planetsArray.map((planet) => (
        <Planet key={planet.id} {...planet} />
      ))}
    </>
  )
}
