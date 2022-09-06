import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const StyleModalModality = StyleSheet.create({
  cardBox: {
    width: '100%',
    paddingHorizontal: 9,
    paddingBottom: 6,
    marginBottom: 24
  },
  modaltitle: {
    color: Colors.text2,
    textAlign: 'left',
    flex: 1
  },
  conditionsText: {
    textAlign: 'center',
    color: Colors.text2
  },
  textHighlighted: {
    color: Colors.business
  },
  conditionsContainer: {
    marginTop: 24
  }
})
