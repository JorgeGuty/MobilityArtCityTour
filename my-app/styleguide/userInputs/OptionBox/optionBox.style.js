import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    maxWidth: '90%',
    height: 41,
    backgroundColor: Colors.background1,
    borderWidth: 1,
    borderColor: Colors.text2,
    borderStyle: 'solid',
    borderRadius: 8
  },
  radioBtnStyle: {
    fontFamily: 'material-icon',
    fontSize: 24,
    alignSelf: 'center',
    color: Colors.text2
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 0.04,
    color: Colors.text2,
    alignSelf: 'center',
    paddingLeft: 11

  },
  disabled: {
    backgroundColor: Colors.background1,
    opacity: 0.45
  },
  selected: {
    fontFamily: 'Montserrat-Regular',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 17,
    letterSpacing: 0.04,
    fontSize: 14,
    color: Colors.text2,
    paddingLeft: 11
  }
})
