import React from 'react'
import { AppDimensionsProvider } from './src/AppContext'
import { NavigationContainer } from '@react-navigation/native'
import { MyTabs } from './src/navigation/MyTabs'

export default function App() {
  return (
    <NavigationContainer>
      <AppDimensionsProvider>
        <MyTabs />
      </AppDimensionsProvider>
    </NavigationContainer>
  )
}
