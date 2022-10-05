

import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../../../constants/colors';
export const styles = StyleSheet.create({
    mainContainer: {
        position:'absolute',
        top:0,
        height: Dimensions.get('screen').height / 10,
        width: '100%',
        backgroundColor: Colors.actGray6,
        justifyContent:'flex-end',
        padding: 10
    }
});