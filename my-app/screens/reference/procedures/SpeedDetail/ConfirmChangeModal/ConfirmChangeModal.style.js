import { StyleSheet } from 'react-native'
import { Colors } from '../../../../constants/colors'

export const StyleConfirmChange = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 16,
    paddingVertical: 32,
    marginHorizontal: 14,
    backgroundColor: Colors.background1,
    marginBottom: 56, 
    borderRadius: 8
  },
  titleText: {
    color: Colors.text2,
    textAlign: 'left',
    flex: 1
  },
  textConfirm: {
    color: Colors.text2,
    marginBottom: 48,
    textAlign: 'center',
    justifyContent: 'flex-start'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cancelButtonText: {
    color: Colors.business
  },
  confirmButtonText: {
    color: Colors.textAlt2
  },
  buttonsSize: {
    width: 282
  }
})
