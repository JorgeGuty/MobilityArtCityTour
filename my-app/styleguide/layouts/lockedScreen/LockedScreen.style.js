import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
  textInput: {
    width:'100%',
    height:30,
    borderRadius:20,
    backgroundColor: Colors.actBlue4,
    paddingLeft: 20,
  },
  button: { 
    width:'100%',
    height:45,
    borderRadius:20,
    backgroundColor: Colors.actBlue2,
    marginBottom: 20,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },
  title:{
    fontSize: 30,
    color: Colors.actOrange2,
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30
  },
  subtitle:{
    fontSize: 20,
    color: Colors.actGray1,
    marginBottom: 15,
  },
  link:{
    color: Colors.actBlue2,
    textDecorationLine: 'underline' 
  },
  label:{
    fontSize: 15,
    color: Colors.actOrange2
  },
  buttonLabel:{
    color:'white',
    fontSize:20
  },
  mainContainer:{
    flex:1,
    padding: 30
  },
  bottomSeparation:{
    marginBottom:20
  },
  doubleBottomSeparation:{
    marginBottom:40
  },
  header:{
    flexDirection:'row'
  },
  topCorner: {
    marginRight: 10,
    marginLeft: 'auto',
  },
  topSeparation:{
    marginTop:20
  },
  center:{
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    alignSelf:'center'
  },
  secondaryButton:{

  }
})