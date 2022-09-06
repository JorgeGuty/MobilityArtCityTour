import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const StyleSendCode = StyleSheet.create({
  inputTitle: {
    textAlign: 'left',
    color: Colors.text1,
    marginBottom: 24,
    marginTop: 73
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    lineHeight: 29,
    letterSpacing: 0,
    paddingVertical: 4
  },
  options: {
    borderWidth: 0,
    height: 'auto',
    overflow: 'hidden',
    marginBottom: 16
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.textAlt2,
    lineHeight: 29,
    fontSize: 24
  },
  button: {
    maxWidth: 152,
    height: 52,
    marginTop: 72,
    alignSelf: 'center',
    borderRadius: 30,
    paddingHorizontal: 0
  }
})
