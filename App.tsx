import React from 'react'
import { View } from 'react-native'
import Animated, { css } from 'react-native-reanimated'
import { starsBackground } from './src/utils/utils'
import { SUN_SIZE } from './src/contstants/constants'
import { StarData } from './src/types/types'

const Sun = () => <Animated.View style={ui.sun} />

const Star = ({ size, x, y }: StarData) => (
  <Animated.View style={[ui.star, { width: size, height: size, left: x, top: y }]} />
)

const StarBackground = () => (
  <>
    {starsBackground.map((star) => (
      <Star key={star.id} {...star} />
    ))}
  </>
)

export default function App() {
  return (
    <View style={ui.container}>
      <StarBackground />
      <Sun />
    </View>
  )
}

const ui = css.create({
  sun: {
    width: SUN_SIZE,
    height: SUN_SIZE,
    backgroundColor: 'orange',
    borderRadius: '50%',
  },
  star: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: '50%',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
})
