import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'

const SIZE = 100;

export default function App() { 

  const progress = useSharedValue(1);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      height: SIZE,
      width: SIZE,
      backgroundColor: 'blue',
    };
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
