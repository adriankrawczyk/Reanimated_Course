import React, { useEffect } from 'react'
import { View } from 'react-native'
import { VideoView, useVideoPlayer } from 'expo-video'

import { Video } from '../types/types'
import { styles } from '../styles/scroll'

type Props = {
  video: Video
  isActive: boolean
}

export const VideoItem = ({ video, isActive }: Props) => {
  const videoSource = video.video_files?.[3]?.link || video.video_files?.[0]?.link || ''

  const player = useVideoPlayer(videoSource, (p) => {
    p.loop = true
  })

  useEffect(() => {
    if (isActive) {
      player.play()
    } else {
      player.pause()
    }
  }, [isActive])

  return (
    <View style={styles.square}>
      <VideoView
        nativeControls={false}
        player={player}
        style={styles.full}
        contentFit="cover"
      />
    </View>
  )
}
