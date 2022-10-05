import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'
import { Dimensions } from 'react-native'
import { Constants } from '../../../constants/constants'

export const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        padding: 10,
    },
    bar: {
        alignSelf: 'center'
    },
    label: {
        fontSize: 14,
        color: Colors.actGray3
    },
    selectedLabel: {
        color: Colors.actGray1
    }
})