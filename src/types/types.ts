import { StyleProp, ViewStyle } from 'react-native'

export interface CelestialBody {
  id: string
  size: number
  x: number
  y: number
  backgroundColor: string
  style?: StyleProp<ViewStyle>
  animation?: StyleProp<ViewStyle & Record<string, unknown>>
}
