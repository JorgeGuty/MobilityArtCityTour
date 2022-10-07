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
    button:{
        position:'absolute', 
        bottom: Constants.interestPointsModalRelativeHeight + Constants.interestPointsModalButtonOffset,
        alignSelf: 'center', 
        borderRadius: 12,
        backgroundColor: Colors.actBlue1,
        paddingHorizontal: 32,
        paddingVertical: 10,
        flexDirection: 'row',
        display:'flex',
        justifyContent:'center',
        alignContent: 'center',
        alignItems:'center'
    },
    buttonLabel: {
        fontSize: 16,
        color: 'white',
        marginLeft: 10
    },
    bodyContainer:{
        marginTop: 15,
        paddingRight: 15,
        //borderWidth:1, 
        paddingLeft: 15,
        flex:1
    }
})