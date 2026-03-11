/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ui } from '../styles/ui'
import { COLORS } from '../constants/colors'
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated'
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler'

const RADIUS = 50
const PLAYGROUND_WIDTH = 200
const PLAYGROUND_HEIGHT = 400

const Ball = () => {
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)

  const pan = Gesture.Pan().onChange((event) => {
    translateX.value += event.changeX
    translateY.value += event.changeY
  })

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
    }
  })

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[style.ball, animatedStyle]} />
    </GestureDetector>
  )
}

const Playground = () => {
  return <View style={style.playground} />
}

export function DragScreen() {
  return (
    <GestureHandlerRootView style={ui.container}>
      <Playground />
      <Ball />
    </GestureHandlerRootView>
  )
}

const style = StyleSheet.create({
  ball: {
    backgroundColor: COLORS.mars,
    borderRadius: RADIUS,
    height: RADIUS,
    width: RADIUS,
  },
  playground: {
    backgroundColor: COLORS.grayish,
    borderRadius: 10,
    height: PLAYGROUND_HEIGHT,
    position: 'absolute',
    width: PLAYGROUND_WIDTH,
  },
})
