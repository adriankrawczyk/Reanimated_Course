import { useEffect } from 'react'
import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated'
import { runLoopAnimation, stopLoopAnimation } from '../animations/index'
import { WorkletRecipe } from '../types/animations'

export const useWorklet = (recipe?: WorkletRecipe) => {
  const x = useSharedValue(0)
  const y = useSharedValue(0)
  const rotate = useSharedValue(0)
  const scale = useSharedValue(1)
  const opacity = useSharedValue(1)

  useEffect(() => {
    if (!recipe) return

    if (recipe.translateX) runLoopAnimation(x, recipe.translateX)
    if (recipe.translateY) runLoopAnimation(y, recipe.translateY)
    if (recipe.rotate) runLoopAnimation(rotate, recipe.rotate)
    if (recipe.scale) runLoopAnimation(scale, recipe.scale)
    if (recipe.opacity) runLoopAnimation(opacity, recipe.opacity)

    return () => {
      stopLoopAnimation(x)
      stopLoopAnimation(y)
      stopLoopAnimation(rotate)
      stopLoopAnimation(scale)
      stopLoopAnimation(opacity)
    }
  }, [recipe])

  const animatedStyle = useAnimatedStyle(() => {
    if (!recipe) return {}

    const transforms: Array<Record<string, number | string>> = []

    if (recipe.translateX) transforms.push({ translateX: x.value })
    if (recipe.translateY) transforms.push({ translateY: y.value })
    if (recipe.rotate) transforms.push({ rotate: `${rotate.value}deg` })
    if (recipe.scale) transforms.push({ scale: scale.value })

    return {
      transform: transforms,
      ...(recipe.opacity ? { opacity: opacity.value } : {}),
    }
  })

  return animatedStyle
}
