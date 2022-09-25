import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors.js'

export const styles = StyleSheet.create({
  headerTitle: {
    alignSelf:'center', 
    borderWidth:1,
    fontSize: 30, 
    color: Colors.actBlue2, 
    flexShrink: 1, 
    height:60,
    // paddingTop:20, 
    // paddingLeft:20
  },
  nextBusTime:{
    fontSize: 25, 
    //borderWidth:1, 
    color: 'black', 
    alignSelf:'flex-end',
    flex: 1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingLeft: 5
  },

});