import { useEffect, useState } from 'react'
import { API_KEY } from '../constants/scroll'
import { Video } from '../types/types'

export function useVideos() {
  const [videos, setVideos] = useState<Video[]>([])

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await fetch(
          'https://api.pexels.com/videos/search?query=people&orientation=portrait&per_page=10',
          { headers: { Authorization: API_KEY } },
        )
        const data = await res.json()
        setVideos(data.videos || [])
      } catch (error) {
        console.error('Error fetching videos:', error)
      }
    }
    getVideos()
  }, [])

  return { videos }
}
