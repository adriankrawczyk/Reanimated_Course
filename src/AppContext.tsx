import React, { createContext, useContext } from 'react'
import { useWindowDimensions } from 'react-native'

interface AppDimensionsContextProps {
  DEVICE_WIDTH: number
  DEVICE_HEIGHT: number
}

const AppDimensionsContext = createContext<AppDimensionsContextProps>({
  DEVICE_WIDTH: 0,
  DEVICE_HEIGHT: 0,
})

export const AppDimensionsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = useWindowDimensions()

  return (
    <AppDimensionsContext.Provider value={{ DEVICE_WIDTH, DEVICE_HEIGHT }}>
      {children}
    </AppDimensionsContext.Provider>
  )
}

export const useAppDimensions = () => useContext(AppDimensionsContext)
