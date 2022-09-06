import { Colors } from '../../../constants/colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    maxWidth: '90%',
    height: 48,
    backgroundColor: Colors.background1,
    borderWidth: 1,
    borderColor: Colors.text2,
    borderStyle: 'solid',
    borderRadius: 8
  },
  imageStyle: {
    width: 32,
    height: 32,
    borderRadius: 100
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
  checkBoxStyle: {
    fontFamily: 'material-icon',
    paddingRight: 11,
    fontSize: 24,
    color: Colors.text2
  },
  disabled: {
    backgroundColor: Colors.background1,
    opacity: 0.45
  },
  checked: {
    fontFamily: 'Montserrat-Regular',
    fontStyle: 'normal',
    fontWeight: '500',
    paddingLeft: 11,
    lineHeight: 17,
    letterSpacing: 0.04,
    color: Colors.text2
  }
})
