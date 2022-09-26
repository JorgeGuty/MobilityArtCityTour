import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors'

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1
  },
  headerContainer:{  
    alignContent:'center', 
    flexDirection: 'row', 
    display:'flex', 
    alignItems:'center', 
    paddingTop: 10, 
  },
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
  bodyContainer: {
    padding: 10,
    flex:1
  },

  markVisitedButton : {
    borderRadius: 30,
    height: 60,
    marginHorizontal: 60,
    justifyContent:'center',
    alignItems:'center'
  },
  
  unvisitedStyling: {
    backgroundColor: Colors.actBlue2,
  },

  visitedStyling:{
    backgroundColor: Colors.actGray3,
  },

  markVisitedButtonLabel: {
    fontSize: 20,
    color: 'white', 
  },
  descriptionContainer:{
    backgroundColor: Colors.actGray5,
    padding: 20,
    borderRadius: 20,
    marginBottom: 10
  },
  descriptionText:{
    fontSize: 18
  }
})
