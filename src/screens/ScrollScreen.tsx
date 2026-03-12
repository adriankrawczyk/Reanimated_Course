import { View } from 'react-native'
import { ui } from '../styles/ui'
import Animated, { css } from 'react-native-reanimated'

export function ScrollScreen() {
  const colors = ['red', 'green', 'blue']
  return (
    <View style={ui.container}>
      <View style={styles.wrapper}>
        <Animated.ScrollView horizontal>
          {colors.map((backgroundColor) => {
            return (
              <View
                style={[styles.square, { backgroundColor }]}
                key={backgroundColor}
              ></View>
            )
          })}
        </Animated.ScrollView>
      </View>
    </View>
  )
}

const styles = css.create({
  wrapper: {
    width: 300,
    height: 300,
  },
  square: {
    width: 300,
    height: 300,
  },
})
