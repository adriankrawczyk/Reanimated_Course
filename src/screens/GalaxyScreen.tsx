import { View } from 'react-native'
import { Planets } from '../components/Planets'
import { StarField } from '../components/StarField'
import { Sun } from '../components/Sun'
import { ui } from '../styles/ui'

export function Galaxy() {
  return (
    <View style={ui.container}>
      <StarField />
      <Planets />
      <Sun />
    </View>
  )
}
