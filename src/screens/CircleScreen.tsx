import { View } from 'react-native'
import { ui } from '../styles/ui'
import Svg, { Path } from 'react-native-svg'
import { useEffect } from 'react'
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withRepeat,
  withTiming,
  cancelAnimation,
} from 'react-native-reanimated'

const WIDTH = 300
const HEIGHT = 300
const RESOLUTION = 100
const CENTER_X = WIDTH / 2
const CENTER_Y = HEIGHT / 2

const LINE_LENGTH = 250
const RADIUS = LINE_LENGTH / (2 * Math.PI)

const AnimatedPath = Animated.createAnimatedComponent(Path)

const projectPoint = (x: number, y: number) => {
  'worklet'
  return `${x + CENTER_X} ${CENTER_Y - y}`
}

export function CircleScreen() {
  const progress = useSharedValue(0)

  const animatedProps = useAnimatedProps(() => {
    let d = ''

    for (let i = 0; i < RESOLUTION; i++) {
      const stepProgress = i / RESOLUTION
      const angle = stepProgress * Math.PI * 2
      // LINE
      const lineX = (stepProgress - 0.5) * LINE_LENGTH
      const lineY = 0
      // CIRCLE
      const circleX = -Math.sin(angle) * RADIUS
      const circleY = Math.cos(angle) * RADIUS
      // INTERPOLATION BETWEEN THEM
      const x = lineX + (circleX - lineX) * progress.value
      const y = lineY - (circleY - lineY) * progress.value

      const projected = projectPoint(x, y)

      d += `${i === 0 ? 'M' : 'L'} ${projected} `
    }

    return { d }
  })

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, {
        duration: 2000,
      }),
      -1,
      true,
    )

    return () => {
      cancelAnimation(progress)
    }
  }, [progress])

  return (
    <View style={ui.container}>
      <Svg width={WIDTH} height={HEIGHT}>
        <AnimatedPath
          animatedProps={animatedProps}
          stroke="red"
          strokeWidth={4}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  )
}
