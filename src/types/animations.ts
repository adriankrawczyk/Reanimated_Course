export interface WorkletLoopConfig {
  from: number
  animation: number
}

export interface WorkletRecipe {
  translateX?: WorkletLoopConfig
  translateY?: WorkletLoopConfig
  rotate?: WorkletLoopConfig
  scale?: WorkletLoopConfig
  opacity?: WorkletLoopConfig
}
