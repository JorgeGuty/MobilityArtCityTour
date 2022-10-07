

import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../../../constants/colors';
import { Constants } from '../../../constants/constants';
export const styles = StyleSheet.create({
    mainContainer: {
        position:'absolute',
        top:0,
        height: Constants.homeHeaderHeight,
        width: '100%',
        backgroundColor: Colors.actGray6,
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 10
    },
    headerElement: {
        alignSelf: 'flex-end'
    }


});