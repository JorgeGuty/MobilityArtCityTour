import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors'
import { Dimensions } from 'react-native'
import { Constants } from '../../constants/constants'

export const styles = StyleSheet.create({
    header: {
        position:'absolute',
        top:0,
        height: 52,
        width: '100%',
        backgroundColor: Colors.actGray6,
        paddingLeft: 10,
        flexDirection: 'row'
    },
    filters: {
        justifyContent:'center'
    },
    categories: {
        
    }
})