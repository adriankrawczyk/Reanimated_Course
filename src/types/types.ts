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

export interface Planet extends CelestialBody {
  rotationDuration: number
  rotationDir: 1 | -1
}
