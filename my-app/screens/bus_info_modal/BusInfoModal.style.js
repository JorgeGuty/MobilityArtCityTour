import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors.js'

export const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 30, 
    //borderWidth:1, 
    color: Colors.actBlue2, 
    flex: 2,
    justifyContent:'center',
    alignItems:'center',
    marginLeft: 10,
    alignSelf:'center',
    // paddingTop:20, 
    // paddingLeft:20
  },

  headerContainer:{  
    alignContent:'center', 
    flexDirection: 'row', 
    display:'flex', 
    alignItems:'center', 
    paddingTop: 10, 
  },
  scheduleTimeCard:{
    flex : 1, 
    maxWidth: '80%',
    borderRadius: 18, 
    marginRight: 20, 
    marginVertical: 5, 
    flexDirection: 'row', 
    paddingHorizontal: 30, 
    paddingVertical: 20,
    backgroundColor: Colors.actGray4
  },
  scheduleTimeLabel: {
    fontSize: 20, 

  },
  completeScheduleLabel: {
    fontSize: 20, 
  },
  isNextArrangement: {

  },
  bodyContainer: {
    paddingBottom: 10,
    //borderWidth:1, 
    paddingTop: 10,
    paddingLeft: 10,
    flex:1
  },
  nextBusLabel: {
    fontSize: 25, 
    //borderWidth:1, 
    color: Colors.actBlue2, 
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    // paddingTop:20, 
    // paddingLeft:20
  },
  nextBusInfoContainer:{
    alignContent:'center', 
    flexDirection: 'row', 
    display:'flex', 
    //borderWidth:1, 
    alignItems:'center', 
  },
  nextBusTime:{
    fontSize: 25, 
    //borderWidth:1, 
    color: 'black', 
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    paddingLeft: 5
  },
});