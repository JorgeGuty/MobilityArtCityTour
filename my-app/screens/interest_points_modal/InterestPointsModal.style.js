import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors'
import { Dimensions } from 'react-native'
import { Constants } from '../../constants/constants'

export const styles = StyleSheet.create({
    modal: {
        height: Constants.interestPointsModalRelativeHeight, 
        maxHeight:260,
        width:'100%', 
        borderWidth: 1, 
        position:'absolute', 
        bottom:0, 
        backgroundColor: Colors.actGray6, 
        borderColor: Colors.actGray5,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
})