import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  insideContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: Colors.background1
  },
  content: {
    color: Colors.text1,
    fontWeight: 'bold'
  }
})
