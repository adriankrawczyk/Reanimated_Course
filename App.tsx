import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming, withRepeat, SharedValue } from 'react-native-reanimated'

const SIZE = 100;

const handleRotation = (progress: SharedValue<number>) => {
  'worklet';
  return `${progress.value * 2 * Math.PI}rad`;
};

export default function App() { 

  const progress = useSharedValue(0);
  const scale = useSharedValue(1);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: progress.value * SIZE / 2,
      height: SIZE,
      width: SIZE,
      backgroundColor: 'blue',
      transform: [{ scale: scale.value, }, {rotate: handleRotation(progress) }]
    }; 
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(1, { duration: 1000 }), -1, true);
    scale.value = withRepeat(withSpring(2, { duration: 1000 }), -1, true);
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
