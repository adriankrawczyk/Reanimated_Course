import React, { useEffect } from 'react'
import { View } from 'react-native'
import Animated, {
  useAnimatedReaction,
  useAnimatedSensor,
  SensorType,
  useSharedValue,
  useAnimatedRef,
  scrollTo,
} from 'react-native-reanimated'

import { ui } from '../styles/ui'
import { COLORS } from '../constants/colors'
import { Video } from '../types/types'
import { styles } from '../styles/scroll'
import {
  PAGE_HEIGHT,
  PAGES_CYCLE_LENGTH,
  SCROLL_COOLDOWN,
  TILT_SENSITIVITY,
} from '../constants/scroll'
import { useVideos } from '../hooks/useVideos'
import { useScroll } from '../hooks/useScroll'
import { VideoItem } from '../components/VideoItem'

export const ScrollScreen = () => {
  const { videos } = useVideos()
  const { activePage, onMomentumScrollEnd, scrollHandler, animatedBg } = useScroll(videos)

  const listRef = useAnimatedRef<Animated.FlatList<Video>>()

  const animatedSensor = useAnimatedSensor(SensorType.ACCELEROMETER, {
    interval: 16,
  })

  const lastTiltTime = useSharedValue(0)
  const pageSV = useSharedValue(0)
  const baseY = useSharedValue(0)
  const isInitialized = useSharedValue(false)
  const videoCount = videos.length

  useEffect(() => {
    pageSV.value = activePage
  }, [activePage])

  useAnimatedReaction(
    () => animatedSensor.sensor.value,
    (sensor) => {
      const y = sensor.y
      const now = Date.now()

      if (!isInitialized.value) {
        baseY.value = y
        isInitialized.value = true
        return
      }

      // Resting angle
      baseY.value = baseY.value * 0.95 + y * 0.05
      const delta = y - baseY.value

      if (now - lastTiltTime.value < SCROLL_COOLDOWN) {
        baseY.value = y
        return
      }

      // Tilt down
      if (delta < -TILT_SENSITIVITY && pageSV.value < videoCount - 1) {
        lastTiltTime.value = now
        baseY.value = y
        const nextOffset = (pageSV.value + 1) * PAGE_HEIGHT
        scrollTo(listRef, 0, nextOffset, true)
      }

      // Tilt up
      if (delta > TILT_SENSITIVITY && pageSV.value > 0) {
        lastTiltTime.value = now
        baseY.value = y
        const prevOffset = (pageSV.value - 1) * PAGE_HEIGHT
        scrollTo(listRef, 0, prevOffset, true)
      }
    },
  )

  const renderItem = ({ item, index }: { item: Video; index: number }) => (
    <VideoItem video={item} isActive={index === activePage} />
  )

  return (
    <Animated.View style={[ui.container, styles.center, animatedBg]}>
      <View style={styles.wrapper}>
        <Animated.FlatList
          ref={listRef}
          data={videos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          snapToInterval={PAGE_HEIGHT}
          snapToAlignment="start"
          disableIntervalMomentum
          decelerationRate="fast"
          showsVerticalScrollIndicator={false}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          onMomentumScrollEnd={onMomentumScrollEnd}
          windowSize={3}
          maxToRenderPerBatch={3}
          initialNumToRender={2}
        />
      </View>

      <View style={styles.footerTab}>
        {videos.slice(0, PAGES_CYCLE_LENGTH).map((_, i) => (
          <View
            key={i}
            style={[
              styles.littleTab,
              {
                backgroundColor: i === activePage ? COLORS.star : COLORS.gray,
              },
            ]}
          />
        ))}
      </View>
    </Animated.View>
  )
}
