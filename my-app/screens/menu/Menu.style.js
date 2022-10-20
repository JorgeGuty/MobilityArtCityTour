import { Dimensions, StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors'
import { Constants } from '../../constants/constants'

export const styles = StyleSheet.create({
    background: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        backgroundColor: 'rgba(53, 53, 53, 0.5)'
          
    },
    options: {
        paddingHorizontal: 50
    },
    option:{
        marginBottom: 20
    },
    menuHeader: {
        height: Constants.homeHeaderHeight,
        width: '100%',
        justifyContent: 'flex-end',
        padding: 10,

    },
})