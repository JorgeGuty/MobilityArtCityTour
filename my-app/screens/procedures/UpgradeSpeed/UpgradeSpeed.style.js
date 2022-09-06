import { StyleSheet } from 'react-native'
import { Colors } from '../../../styleguide/colors'

export const styles = StyleSheet.create({
  inputTitle: {
    textAlign: 'left',
    color: Colors.text1,
    marginBottom: 24,
    marginTop: '10%'
  },
  input: {
    width: '100%',
    height: 'auto',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: Colors.background1,
    textAlign: 'center'
  },
  inputText: {
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 34,
    lineHeight: 41,
    color: Colors.text1
  },
  error: {
    marginTop: 25,
    textAlign: 'center',
    color: Colors.rojoKolbi
  }
})
