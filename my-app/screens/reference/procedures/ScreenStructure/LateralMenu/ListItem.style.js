import { StyleSheet } from 'react-native'
import { Colors } from '../../../../constants/colors'

export const StyleListItem = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 30
  },
  text: {
    color: Colors.text1,
    marginLeft: 8,
    flex: 1
  }
})
