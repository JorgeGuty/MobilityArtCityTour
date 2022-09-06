import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.business,
    minWidth: 158,
    height: 42,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16
  },
  button: {
    color: Colors.textAlt2
  },
  clicked: {
    backgroundColor: Colors.businessClicked,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,

    elevation: 5
  },
  disable: {
    disabled: true,
    opacity: 0.45,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,

    elevation: 5
  }
})
