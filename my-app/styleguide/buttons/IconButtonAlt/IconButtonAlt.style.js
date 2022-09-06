import { Colors } from '../../../constants/colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: Colors.background3,
    minHeight: 36,
    minWidth: 38,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 11
  },
  icon: {
    fontFamily: 'material-icon',
    fontSize: 24,
    color: Colors.business
  },
  clicked: {
    backgroundColor: Colors.background3Clicked
  },
  text: {
    marginLeft: 16
  },
  disable: {
    disabled: true,
    opacity: 0.45
  },
  textIn: {
    minWidth: 158,
    height: 42,
    paddingVertical: 10,
    paddingHorizontal: 16,
    justifyContent: 'space-around'
  }
})
