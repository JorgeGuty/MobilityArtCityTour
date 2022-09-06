import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
  anotherServiceButton: {
    width: 329
  },
  backToHomeButton: {
    width: 252
  },
  changeH5Color: {
    color: Colors.textAlt1
  },
  buttonsRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 16
  },
  children: {
    flex: 1,
    marginTop: 17.5,
    paddingRight: 32
  },
  minScreen: {
    height: 520
  },
  minAnotherServiceButton: {
    width: 285
  },
  minBackToHomeButton: {
    width: 195
  }
})
