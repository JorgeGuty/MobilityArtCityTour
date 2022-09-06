import { StyleSheet } from 'react-native'
import { Colors } from '../../../../constants/colors'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: Colors.background1,
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingVertical: 32,
    marginTop: 159,
    borderRadius: 8,
    alignItems: 'center'
  },
  title: {
    color: Colors.text2,
    textAlign: 'center'
  },
  text: {
    color: Colors.text2,
    textAlign: 'center',
    marginVertical: 24
  },
  button: {
    color: Colors.business,
    width: 282
  },
  buttonText: {
    color: Colors.textAlt2
  }
})
