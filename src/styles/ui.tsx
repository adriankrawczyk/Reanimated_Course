import { css } from 'react-native-reanimated'
import { COLORS } from '../constants/colors'

export const ui = css.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.space,
    overflow: 'visible',
  },
})
