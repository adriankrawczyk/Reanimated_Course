import { StyleProp, ViewStyle } from 'react-native'

export interface CelestialBody {
  id: string
  size: number
  x: number
  y: number
  backgroundColor: string
  gradientColors?: [string, string]
  style?: StyleProp<ViewStyle>
  animation?: StyleProp<ViewStyle & Record<string, unknown>>
}

export interface StarBody extends CelestialBody {
  parallaxDuration: number
}

export interface PlanetBody extends CelestialBody {
  speed: number
  rotationDuration: number
  rotationDir: 1 | -1
  r: number
  axisA: Point3D
  axisB: Point3D
}

export interface GenerateRandomArrayOptions {
  backgroundColor?: string
  xOverflow?: number
  yOverflow?: number
}

export type Point3D = {
  x: number
  y: number
  z: number
}
