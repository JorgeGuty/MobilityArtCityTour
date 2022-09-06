import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
  optionalWidth: {
    maxWidth: 110
  },
  optionalFlex: {
    flex: 1
  },
  default: {
    backgroundColor: Colors.background1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minWidth: 110,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 0.5,
    elevation: 5
  },
  defaultSingleLine: {
    paddingHorizontal: 27,
    paddingVertical: 11
  },
  defaultDoubleLine: {
    paddingVertical: 11,
    paddingHorizontal: 0
  },
  disabledButton: {
    backgroundColor: Colors.backgroundDisabled
  },
  holdedButton: {
    shadowColor: Colors.business,
    shadowOffset: {
      width: 10.0 - 10,
      height: 10.0 - 10
    },
    shadowRadius: 10
  },
  selectedButton: {
    backgroundColor: Colors.business
  },
  // disabled = Not pressed, enabled = pressed, cancel = disabled = (true)
  defaultButtonText: {
    color: Colors.text2
  },
  selectedButtonText: {
    color: Colors.background1
  },
  disabledButtonText: {
    color: Colors.textDisabled
  },
  textAlign: {
    textAlign: 'center'
  },
  textTopLine: {
    paddingHorizontal: 15,
    marginBottom: 6
  }
})
