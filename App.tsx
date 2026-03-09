import React from 'react'
import { View } from 'react-native'
import Animated, { css } from 'react-native-reanimated'

import { compositions } from './src/animations/animations'

const SIZE = 200

export default function App() {
  return (
    <View style={ui.container}>
      <Animated.View style={[ui.box, compositions.heroBackground]} />
    </View>
  )
}

const ui = css.create({
  box: {
    height: SIZE,
    width: SIZE,
    backgroundColor: 'blue',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
})
