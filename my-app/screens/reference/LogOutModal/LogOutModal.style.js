import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors.js'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    paddingHorizontal: 38,
    paddingTop: 24,
    paddingBottom: 80,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: Colors.background2,
    shadowRadius: 16,
    shadowOpacity: 0.45
  },
  modal: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  touchScreen: {
    width: '100%',
    height: '100%'
  },
  logOutContainer: {
    backgroundColor: Colors.background1,
    width: '100%',
    height: 'auto',
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingBottom: 24
  },
  logOut: {
    color: Colors.text2,
    marginBottom: 27,
    alignSelf: 'flex-start'
  },
  pin: {
    paddingTop: 32,
    color: Colors.text1
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
  },
  icon: {
    color: Colors.text1,
    fontSize: 24,
    fontFamily: 'material-icon'
  },
  iconPress: {
    right: 40,
    top: 24,
    position: 'absolute'
  },
  titleContainer: {
    marginBottom: 27,
    flexDirection: 'row',
    alignSelf: 'center'
  }
})