import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
  container: {
    marginTop: 73.5
  },
  inputTitle: {
    color: Colors.text1,
    marginBottom: 24
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
    color: Colors.rojoKolbi,
    paddingTop: 24,
    alignSelf: 'center'
  },
  rana: {
    width: 280,
    height: 308,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius: 64,
    backgroundColor: Colors.background2,
    marginTop: 79
  }
})
