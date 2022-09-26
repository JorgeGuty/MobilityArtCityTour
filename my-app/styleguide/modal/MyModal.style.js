import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors.js'

export const styles = StyleSheet.create({
  mainContainer:{
    width: '100%',
    backgroundColor: Colors.actGray6, 
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position:'absolute', 
    bottom:0
  },
  cancelX:{
    paddingRight: 10,
    paddingLeft: 'auto',
    paddingTop: 10,
    //position: 'absolute',
    width: 60,
  },
  scrollView:{
    position:'absolute', 
    bottom:0
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1
  }
});