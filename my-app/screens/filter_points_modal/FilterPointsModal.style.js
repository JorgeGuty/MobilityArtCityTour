
import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../../constants/colors';
import { Constants } from '../../constants/constants';

export const styles = StyleSheet.create({
    body: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex:1,
        padding:15
    },
    header: {
        alignItems: 'baseline',
        marginBottom: 20,
        flexDirection: 'row'
    },
    title: { 
        color: Colors.actBlue2, 
        marginLeft:20, 
        marginBottom: 5, 
        marginTop: 10
    },
    filters:{
    },
    filterItem: {
        height: 64,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.actGray5,
        borderTopWidth: 1,
        borderTopColor: Colors.actGray5,
    },
    filterName:{
        marginLeft: 22,

        color: Colors.actGray2
    },
    submitButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
    },
    button: {
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: Colors.actGray5,
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 15
    },
    buttonText:{
        color: Colors.actGray2,
        maxWidth: 170
    },
    showResultsButton:{
        backgroundColor: Colors.actBlue1
    },
    showResultsText:{
        color:'white'
    },


});