import React from 'react'
import { Galaxy } from '../screens/GalaxyScreen'
import { IconName } from '../types/types'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CircleScreen } from '../screens/CircleScreen'
import { DragScreen } from '../screens/DragScreen'
import { ScrollScreen } from '../screens/ScrollScreen'

const Tab = createBottomTabNavigator()

export function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons: Record<string, IconName> = {
            Galaxy: 'star-outline',
            Circle: 'circle-outline',
            Drag: 'dots-horizontal',
            Scroll: 'gesture-swipe',
          }
          return (
            <MaterialCommunityIcons
              name={icons[route.name] || 'star'}
              color={color}
              size={size}
            />
          )
        },
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#777',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
      })}
    >
      <Tab.Screen name="Scroll" component={ScrollScreen} />
      <Tab.Screen name="Drag" component={DragScreen} />
      <Tab.Screen name="Circle" component={CircleScreen} />
      <Tab.Screen name="Galaxy" component={Galaxy} />
    </Tab.Navigator>
  )
}
