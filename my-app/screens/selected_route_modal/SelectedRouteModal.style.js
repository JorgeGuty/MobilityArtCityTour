import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors'
import { Dimensions } from 'react-native'
import { Constants } from '../../constants/constants'

export const styles = StyleSheet.create({
    mainContainer: {
        height: Constants.selectedRouteModalRelativeHeight, 
        width:'100%', 
        borderWidth: 1, 
        position:'absolute', 
        bottom:0, 
        backgroundColor: Colors.actGray6, 
        borderColor: Colors.actGray5,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    title: { 
 
        color: Colors.actBlue1, 
        marginLeft:20, 
        marginBottom: 5, 
        marginTop: 10
    },
    stopsScroll:{ 
        flex: 1, 
        paddingBottom:30
    }
})