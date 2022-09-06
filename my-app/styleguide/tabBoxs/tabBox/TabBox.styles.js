import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
  bar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    width: '100%',
    marginBottom: 10,
    alignItems: 'center'
  },
  tabBoxContainer: {
    width: '100%',
    overflow: 'hidden',
    paddingBottom: 10
  },
  tabBoxScreen: {
    width: '100%'
  },
  shadowProp: {
    shadowColor: Colors.text1,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 6
  }
})
