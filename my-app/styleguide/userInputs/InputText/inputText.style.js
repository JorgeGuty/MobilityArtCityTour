import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: Colors.background1,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.text2,
    borderStyle: 'solid',
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    fontFamily: 'Montserrat-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 0.04,
    color: Colors.text2,
    height: 40
  },
  text: {
    fontWeight: '500',
    borderColor: Colors.business,
    fontFamily: 'Montserrat-Regular',
    fontStyle: 'normal',
    letterSpacing: 0.04
  },
  focus: {
    borderColor: Colors.business,
    fontFamily: 'Montserrat-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0.04,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6
  },
  textChanged: {
    fontWeight: '500',
    fontFamily: 'Montserrat-Regular',
    fontStyle: 'normal',
    letterSpacing: 0.04,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6
  },
  disabled: {
    backgroundColor: Colors.background1,
    opacity: 0.45
  }

})
