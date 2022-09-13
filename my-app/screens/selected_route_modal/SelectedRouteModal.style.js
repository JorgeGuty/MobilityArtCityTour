import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors'
import { Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    mainContainer: {
        height: Dimensions.get('screen').height / 3, 
        width:'100%', borderWidth: 1, position:'absolute', 
        bottom:0, 
        backgroundColor: Colors.actGray6, 
        borderColor: Colors.actGray5
    },
    title: { 
        fontSize: 20, 
        color: Colors.actGray1, 
        marginLeft:20, 
        marginBottom: 5, 
        marginTop: 10
    },
    stopsScroll:{ 
        flex: 1, 
        paddingBottom:30
    }
})