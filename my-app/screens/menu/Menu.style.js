import { Dimensions, StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors'
import { Constants,  } from '../../constants/constants'

export const styles = StyleSheet.create({
    background: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        backgroundColor: 'rgba(53, 53, 53, 0.5)',
        position: 'absolute'
          
    },
    options: {
        paddingHorizontal: 50,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    option:{
        marginBottom: 20,
    },
    menuHeader: {
        height: Constants.homeHeaderHeight,
        width: '100%',
        justifyContent: 'flex-end',
        padding: 10,

    },
    menuSlider: {
        width: Dimensions.get('screen').width * 2,
        height: Dimensions.get('screen').height,
        flexDirection: 'row',
    },
    contentCard: {
        borderRadius: 20,
        backgroundColor: Colors.actGray5,
        flex: 1,
        marginHorizontal: 50,
        height: Dimensions.get('screen').height - 100,
        padding: 20,
        alignItems: 'center',
        flexDirection: 'column'
    },
    fontAmplifierInput:{
        borderRadius: 8,
        height: 50,
        width: 200,
        display: 'flex',
        flexDirection: 'row',
    },
    incrementFontSizeInput:{
        backgroundColor: Colors.actBlue2,
        flex: 1,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    decrementFontSizeInput:{
        backgroundColor: Colors.actGray3,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fontAmplifierExample: {
        height: 30,
    },
    contactInfoLine: {
        marginTop: 5,
        flexDirection:'row',
        alignItems: 'center',
        marginBottom: 15
    },
    contactInfoText: {
        marginBottom: 20
    }
})