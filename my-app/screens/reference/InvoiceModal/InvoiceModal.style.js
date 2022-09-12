import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors.js'

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: Colors.background2,
    alignItems: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    maxWidth: '100%',
    maxHeight: '100%',
    marginTop: 10,
    paddingHorizontal: 24
  },
  icon: {
    color: Colors.text1,
    fontSize: 24,
    fontFamily: 'material-icon'
  },
  iconPress: {
    position: 'absolute',
    right: 24,
    top: 24
  },
  image: {
    width: '100%',
    height: '85%',
    resizeMode: 'contain'
  },
  invoiceStyle: {
    display: 'flex',
    color: Colors.text2,
    paddingTop: 24,
    paddingBottom: 10,
    paddingLeft: 38,
    alignSelf: 'flex-start'
  }
})
