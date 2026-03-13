import { StyleProp, ViewStyle } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

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

export interface Point {
  x: number
  y: number
}

export interface Point3D extends Point {
  z: number
}

export type IconName = React.ComponentProps<typeof MaterialCommunityIcons>['name']

export type VideoFile = { link: string; width: number; height: number }
export type Video = { id: number; video_files: VideoFile[] }
