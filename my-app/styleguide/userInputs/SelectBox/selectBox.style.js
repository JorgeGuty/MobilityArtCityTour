import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    backgroundColor: Colors.background1,
    borderWidth: 1,
    borderColor: Colors.text2,
    borderStyle: 'solid',
    fontFamily: 'Montserrat-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    maxWidth: '90%',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 0.04,
    color: Colors.text2,
    borderRadius: 8,
    justifyContent: 'space-between',
    height: 40
  },
  arrow: {
    color: Colors.text2,
    fontSize: 24,
    fontFamily: 'material-icon',
    marginRight: 8,
    position: 'absolute',
    right: 4,
    top: 8
  },
  textInput: {
    flex: 1,
    fontFamily: 'Montserrat-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 0.04
  },
  dropDownScroll: {
    position: 'absolute',
    zIndex: 2,
    top: 40,
    maxHeight: 180,
    maxWidth: '90%',
    backgroundColor: 'white'
  },
  dropdown: {
    paddingTop: 10
  },
  disabled: {
    backgroundColor: Colors.background1,
    opacity: 0.45
  },
  focused: {
    borderColor: Colors.business,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6
  }
})
