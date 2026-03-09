import React from 'react'
import { planetsArray } from '../utils/utils'
import { Body } from './Body'

export const Planets = () => (
  <>
    {planetsArray.map((planet) => (
      <Body key={planet.id} {...planet} />
    ))}
  </>
)
