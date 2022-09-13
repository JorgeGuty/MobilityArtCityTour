import { StyleSheet } from 'react-native'
import { Colors } from '../../../../constants/colors'

export const styles = StyleSheet.create({
  marker: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
    width: 30,
    height: 30,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderColor: Colors.actBlue2,
    backgroundColor: Colors.actBlue2,
    transform: [{ rotateZ: '45deg' }]
  },
  markerText: { 
    color: "white", 
    transform: [{ rotateZ: '-45deg' }], 
    fontWeight: 'bold', 
    fontSize: 14 
    }
})