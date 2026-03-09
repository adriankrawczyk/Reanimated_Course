import React from 'react'
import { planetsArray } from '../utils/utils'
import { Body } from './Body'
import { compositions } from '../animations/animations'

export const Planets = () => {
  const { spin } = compositions

  return (
    <>
      {planetsArray.map((planet) => (
        <Body key={planet.id} {...planet} animation={spin} />
      ))}
    </>
  )
}
