import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const SIZE = 100;

export default function App() { 

  const progress = useSharedValue(0);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      height: SIZE,
      width: SIZE,
      backgroundColor: 'blue',
    };
  }, []);

  useEffect(() => {
    progress.value = withTiming(1, { duration: 1000 });
  }, []);

  return (  
    <View style={styles.container}>
      <Animated.View style={reanimatedStyle} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})
