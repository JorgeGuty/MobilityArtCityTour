import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'
import { Dimensions } from 'react-native'
import { Constants } from '../../../constants/constants'

export const styles = StyleSheet.create({

    button:{
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

})