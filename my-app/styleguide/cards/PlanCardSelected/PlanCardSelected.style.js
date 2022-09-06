import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
  container: {
    width: 280,
    paddingTop: 26,
    borderRadius: 18,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  content: {
    marginTop: 10,
    marginHorizontal: 18

  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    elevation: 5
  },
  line: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    width: 280
  },
  header: {
    minHeight: 50,
    marginBottom: 18
  },
  buttons: {
    alignItems: 'center'
  },
  checkButton: {
    marginBottom: 12
  },
  expandButton: {
    margin: 18,
    alignItems: 'center'
  },
  icon: {
    color: Colors.business
  }
})
