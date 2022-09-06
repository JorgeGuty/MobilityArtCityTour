import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const StyleConsultID = StyleSheet.create({
  inputTitle: {
    textAlign: 'left',
    color: Colors.text1,
    marginBottom: 24
  },
  input: {
    width: '100%',
    height: 'auto',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: Colors.background1,
    textAlign: 'center',
    maxHeight: 58
  },
  inputText: {
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'normal',
    fontSize: 34,
    lineHeight: 41,
    color: Colors.text1
  },
  typeContainer: {
    flex: 1.5,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  numberContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginLeft: 16
  },
  inputsContainer: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    marginTop: 70
  },
  option: {
    textAlign: 'center',
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textColor: {
    color: Colors.text1
  },
  options: {
    borderWidth: 0,
    height: 'auto',
    overflow: 'hidden',
    marginBottom: 16
  },
  optionTextInput: {
    width: '100%',
    height: 'auto'
  },
  error: {
    marginTop: 25,
    textAlign: 'center',
    color: Colors.rojoKolbi
  }
})
