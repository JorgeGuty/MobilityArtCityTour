

import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../../constants/colors';
import { Constants } from '../../constants/constants';
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
    textEntry: {
        borderWidth:1,
        borderColor: Colors.actGray4,
        borderRadius: 10,
        flex: 1,
        alignItems:'center',
        paddingVertical: 2,
        paddingHorizontal: 5,
        marginLeft: 5,
        height:37
    },
    headerElement: {
        alignSelf: 'flex-end'
    }
});