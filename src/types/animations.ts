import { EasingFunction } from 'react-native'

export interface TimingLoopConfig {
  from: number
  to: number
  durationS: number
  easing?: EasingFunction
  iterations?: number
  reverse?: boolean
}
