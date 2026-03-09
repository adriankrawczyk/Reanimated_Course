import React from 'react'
import { View } from 'react-native'
import { css } from 'react-native-reanimated'
import { COLORS } from './src/contstants/colors'

import { StarField } from './src/components/StarField'
import { Planets } from './src/components/Planets'
import { Sun } from './src/components/Sun'

export default function App() {
  return (
    <View style={ui.container}>
      <StarField />
      <Sun />
      <Planets />
    </View>
  )
}

const ui = css.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.space,
  },
})
