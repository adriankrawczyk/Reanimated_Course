import { PAGE_WIDTH, PAGE_HEIGHT } from '../constants/scroll'
import {} from '../constants/scroll'
import { COLORS } from '../constants/colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  footerTab: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    marginTop: 15,
    width: PAGE_WIDTH,
  },
  full: {
    height: '100%',
    width: '100%',
  },
  littleTab: {
    borderRadius: 4,
    height: 8,
    width: 30,
  },
  square: {
    height: PAGE_HEIGHT,
    width: PAGE_WIDTH,
  },
  wrapper: {
    backgroundColor: COLORS.space,
    borderRadius: 20,
    height: PAGE_HEIGHT,
    overflow: 'hidden',
    width: PAGE_WIDTH,
  },
})
