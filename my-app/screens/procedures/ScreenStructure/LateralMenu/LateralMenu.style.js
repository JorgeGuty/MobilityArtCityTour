import { StyleSheet } from 'react-native'
import { Colors } from '../../../../constants/colors'

export const StyleLateralMenu = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 226,
    paddingVertical: 16,
    paddingHorizontal: 8
  },
  headerContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    maxHeight: 54,
    maxWidth: 170,
    marginBottom: 30
  },
  separator: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.textAlt2
  }
})
