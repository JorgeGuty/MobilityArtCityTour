import { Colors } from '../../../constants/colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background1,
    minWidth: 158,
    height: 42,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.business,
    borderWidth: 1,
    paddingHorizontal: 16
  },
  button: {
    color: Colors.business

  },
  clicked: {
    backgroundColor: Colors.background1Clicked
  },
  disable: {
    disabled: true,
    opacity: 0.45
  }
})
