import { View } from 'react-native'
import { css } from 'react-native-reanimated'
import { Planets } from '../components/Planets'
import { StarField } from '../components/StarField'
import { Sun } from '../components/Sun'
import { COLORS } from '../constants/colors'

export function Galaxy() {
  return (
    <View style={ui.container}>
      <StarField />
      <Planets />
      <Sun />
    </View>
  )
}
const ui = css.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.space,
    overflow: 'visible',
  },
})
