import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
  container: {
    width: 280,
    paddingTop: 18,
    borderRadius: 18

  },
  insideContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: Colors.background1,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
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
    borderBottomColor: Colors.textAlt2,
    borderBottomWidth: 2,
    width: 280
  },
  header: {
    minHeight: 50,
    marginBottom: 18,
    marginTop: 8

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
