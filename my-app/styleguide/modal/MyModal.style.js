import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors.js'

export const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: Colors.actGray5, 
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  cancelX:{
    paddingRight: 10,
    paddingLeft: 'auto',
    paddingTop: 10,
    //position: 'absolute',
    width: 60,
  }

});