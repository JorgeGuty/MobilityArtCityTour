import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: Colors.business,
    minHeight: 36,
    minWidth: 38,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 6,
    paddingVertical: 5
  },
  icon: {
    fontFamily: 'material-icon',
    fontSize: 24,
    color: Colors.icon
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
  },
  text: {
    color: Colors.textAlt2,
    marginLeft: 16
  },
  textIn: {
    minWidth: 158,
    height: 42,
    paddingVertical: 10,
    paddingHorizontal: 16,
    justifyContent: 'space-around'
  }
})
