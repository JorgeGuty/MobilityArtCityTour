

import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../../../../constants/colors';
export const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Colors.actBlue2,
        borderRadius: 15,
        width: Dimensions.get('screen').width / 2,
        height: 37.5,

    },
    tabOption: {
        flex: 1,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent:'center',
    },
    tabOptionLabel: { 
        fontSize: 20, 
        flexShrink: 1,
        color: Colors.actBlue1,
    },
    selectedTabOptionLabel: { 
        color: Colors.actGray6,
    },
    selectedTab: {
        backgroundColor: Colors.actBlue1
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 2
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    
        elevation: 1
    },


});