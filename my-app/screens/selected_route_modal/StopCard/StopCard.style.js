import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
  mainContainer: { 
    flex : 1, 
    maxWidth: '80%',
    borderRadius: 18, 
    marginRight: 20, 
    marginVertical: 5, 
    flexDirection: 'row', 
    paddingHorizontal: 30, 
    paddingVertical: 20
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
    },
  icon: {
    color: Colors.business
  },
  indexLabel:{width : 40, height: 40, borderRadius: 20, borderWidth: 3, alignItems: 'center', borderColor: Colors.actBlue2, paddingVertical: 3},
  visitedArrangement: {
    backgroundColor: Colors.actGray5
  },
  notVisitedArrangement: {
    backgroundColor: "white"
  }
})
