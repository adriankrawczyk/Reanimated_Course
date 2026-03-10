import React from 'react'
import { View } from 'react-native'
import { css } from 'react-native-reanimated'
import { COLORS } from './src/constants/colors'

import { StarField } from './src/components/StarField'
import { Planets } from './src/components/Planets'
import { Sun } from './src/components/Sun'
import { AppDimensionsProvider } from './src/AppContext'

function MainAppContent() {
  return (
    <View style={ui.container}>
      <StarField />
      <Planets />
      <Sun />
    </View>
  )
}

export default function App() {
  return (
    <AppDimensionsProvider>
      <MainAppContent />
    </AppDimensionsProvider>
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
