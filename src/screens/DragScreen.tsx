/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ui } from '../styles/ui'
import { COLORS } from '../constants/colors'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDecay,
  useDerivedValue,
  useFrameCallback,
  runOnJS,
} from 'react-native-reanimated'
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler'

const BALL_SIZE = 50
const PLAYGROUND_WIDTH = 200
const PLAYGROUND_HEIGHT = 400

const MAX_X = (PLAYGROUND_WIDTH - BALL_SIZE) / 2
const MAX_Y = (PLAYGROUND_HEIGHT - BALL_SIZE) / 2

const SPEED = 0.003
const DECCELERATION = 0.98
const STOP_THRESHOLD = 0.1

const getPositionInBounds = (value: number, maxRadius: number) => {
  'worklet'
  return Math.min(Math.max(value, -maxRadius), maxRadius)
}

// Bounce algorithm
// The 'ghost' ball can move infinitely outside the screen.
// We "fold" its position into the range -wall to wall (wall is MAX_X or MAX_Y)
// so it looks like it bounces off the screen edges.
const bounce = (position: number, wall: number) => {
  'worklet'
  // One full bounce cycle in 4 phases, -wall -> 0, 0 -> wall, wall -> 0, 0 -> -wall
  const cycle = wall * 4
  // Position inside walls in a bounce loop
  position = (position + wall) % cycle
  // Fix negative modulo results
  if (position < 0) position += cycle
  // Forward phase, ball moves -wall -> wall
  if (position < wall * 2) return position - wall
  // Backwards mirrored phase, wall -> -wall
  return wall * 3 - position
}

const Ball = () => {
  // 'Ghost' ball
  const virtualX = useSharedValue(0)
  const virtualY = useSharedValue(0)

  // Physical ball
  const translateX = useDerivedValue(() => bounce(virtualX.value, MAX_X))
  const translateY = useDerivedValue(() => bounce(virtualY.value, MAX_Y))

  // X,Y at the start of a gesture
  const startX = useSharedValue(0)
  const startY = useSharedValue(0)

  const pressed = useSharedValue(false)

  const velocityX = useSharedValue(0)
  const velocityY = useSharedValue(0)

  // Acceleration
  const frameCallback = useFrameCallback((frameInfo) => {
    if (!velocityX.value && !velocityY.value) return

    if (frameInfo.timeSincePreviousFrame !== null) {
      virtualX.value += velocityX.value
      virtualY.value += velocityY.value
      velocityX.value *= DECCELERATION
      velocityY.value *= DECCELERATION
      if (
        Math.abs(velocityX.value) < STOP_THRESHOLD &&
        Math.abs(velocityY.value) < STOP_THRESHOLD
      ) {
        velocityX.value = 0
        velocityY.value = 0
      }
    }
  }, true)

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true

      // Sync positions at start
      virtualX.value = translateX.value
      virtualY.value = translateY.value

      startX.value = translateX.value
      startY.value = translateY.value
    })
    .onChange((event) => {
      // Dragging without leaving the playground
      virtualX.value = getPositionInBounds(startX.value + event.translationX, MAX_X)
      virtualY.value = getPositionInBounds(startY.value + event.translationY, MAX_Y)
    })
    .onFinalize((event) => {
      pressed.value = false
      // Launch ball
      velocityX.value = event.velocityX * SPEED
      velocityY.value = event.velocityY * SPEED
    })

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
    backgroundColor: pressed.value ? COLORS.green : COLORS.mars,
  }))

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[style.ball, animatedStyle]} />
    </GestureDetector>
  )
}

export function DragScreen() {
  return (
    <GestureHandlerRootView style={ui.container}>
      <View style={style.centeringOverlay}>
        <View style={style.playground}>
          <Ball />
        </View>
      </View>
    </GestureHandlerRootView>
  )
}

const style = StyleSheet.create({
  ball: {
    borderRadius: BALL_SIZE / 2,
    height: BALL_SIZE,
    left: (PLAYGROUND_WIDTH - BALL_SIZE) / 2,
    position: 'absolute',
    top: (PLAYGROUND_HEIGHT - BALL_SIZE) / 2,
    width: BALL_SIZE,
  },
  centeringOverlay: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  playground: {
    backgroundColor: COLORS.grayish,
    borderColor: COLORS.grayish,
    borderRadius: 10,
    borderWidth: 1,
    height: PLAYGROUND_HEIGHT,
    width: PLAYGROUND_WIDTH,
  },
})
