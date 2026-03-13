import { View } from 'react-native'
import { ui } from '../styles/ui'
import Animated, {
  css,
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolateColor,
} from 'react-native-reanimated'
import { useState } from 'react'
import { COLORS } from '../constants/colors'

const PAGE_ARRAY = ['red', 'green', 'blue']
const BG_COLORS = ['#ff8888', '#88ff88', '#8888ff']
const PAGE_WIDTH = 300
const INPUT_RANGE = PAGE_ARRAY.map((_, i) => i * PAGE_WIDTH)

export function ScrollScreen() {
  const [activePage, setActivePage] = useState(0)
  const scrollX = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler((e) => {
    scrollX.value = e.contentOffset.x
  })

  const animatedBg = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(scrollX.value, INPUT_RANGE, BG_COLORS),
  }))

  return (
    <Animated.View style={[ui.container, animatedBg]}>
      <View style={styles.wrapper}>
        <Animated.ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          onMomentumScrollEnd={(e) => {
            const page = Math.round(e.nativeEvent.contentOffset.x / PAGE_WIDTH)
            setActivePage(page)
          }}
        >
          {PAGE_ARRAY.map((color) => (
            <View key={color} style={[styles.square, { backgroundColor: color }]} />
          ))}
        </Animated.ScrollView>

        <View style={styles.footerTab}>
          {PAGE_ARRAY.map((color, i) => (
            <View
              key={color}
              style={[
                styles.littleTab,
                { backgroundColor: i === activePage ? COLORS.star : COLORS.gray },
              ]}
            />
          ))}
        </View>
      </View>
    </Animated.View>
  )
}

const styles = css.create({
  wrapper: {
    width: PAGE_WIDTH,
    height: PAGE_WIDTH,
  },
  square: {
    width: PAGE_WIDTH,
    height: PAGE_WIDTH,
  },
  footerTab: {
    width: PAGE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  littleTab: {
    height: 10,
    width: 50,
    borderRadius: 10,
  },
})
