import { StyleSheet } from 'react-native'
import { Colors } from '../../../../constants/colors'

export const StyleModalStructure = StyleSheet.create({
  modal: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  touchScreen: {
    width: '100%',
    height: '100%'
  },
  container: {
    width: '100%',
    height: 'auto',
    maxHeight: '100%',
    paddingHorizontal: 38,
    paddingVertical: 24,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: Colors.background2,
    shadowRadius: 16,
    shadowOpacity: 0.45,
    elevation: 15
  },
  titleContainer: {
    marginBottom: 27,
    flexDirection: 'row'
  }
})
