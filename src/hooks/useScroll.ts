import { useState, useCallback } from 'react'
import { BG_COLORS, PAGE_HEIGHT, PAGES_CYCLE_LENGTH } from '../constants/scroll'
import {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import { Video } from '../types/types'

export const useScroll = (videos: Video[]) => {
  const [activePage, setActivePage] = useState(0)
  const scrollY = useSharedValue(0)

  const onMomentumScrollEnd = useCallback(
    (e: { nativeEvent: { contentOffset: { y: number } } }) => {
      const page =
        Math.round(e.nativeEvent.contentOffset.y / PAGE_HEIGHT) % PAGES_CYCLE_LENGTH
      setActivePage(page)
    },
    [],
  )

  const scrollHandler = useAnimatedScrollHandler((e) => {
    scrollY.value = e.contentOffset.y
  })

  const animatedBg = useAnimatedStyle(() => {
    const length = Math.max(videos.length, 3)
    const inputRange = Array.from({ length }).map((_, i) => i * PAGE_HEIGHT)
    const outputRange = Array.from({ length }).map(
      (_, i) => BG_COLORS[i % BG_COLORS.length],
    )

    return {
      backgroundColor: interpolateColor(scrollY.value, inputRange, outputRange),
    }
  }, [videos.length])

  return { activePage, onMomentumScrollEnd, scrollHandler, animatedBg }
}
