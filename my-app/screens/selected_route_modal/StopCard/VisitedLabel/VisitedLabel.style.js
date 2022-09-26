import { StyleSheet } from 'react-native'
import { Colors } from '../../../../constants/colors'

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
  visitedArrangement: {
    backgroundColor: Colors.actBlue2
  },
  notVisitedArrangement: {
    backgroundColor: Colors.actGray5
  }
})
