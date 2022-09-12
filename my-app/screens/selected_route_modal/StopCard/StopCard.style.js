import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
  mainContainer: { 
    flex : 1, 
    backgroundColor: "white", 
    borderRadius: 18, 
    marginHorizontal: 10, 
    marginVertical: 5, 
    flexDirection: 'row', 
    paddingHorizontal: 30, 
    paddingVertical: 20
    },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,

    elevation: 20
  },
  icon: {
    color: Colors.business
  },
  indexLabel:{width : 40, height: 40, borderRadius: 20, borderWidth: 3, alignItems: 'center', borderColor: Colors.actBlue2, paddingVertical: 3}
})
