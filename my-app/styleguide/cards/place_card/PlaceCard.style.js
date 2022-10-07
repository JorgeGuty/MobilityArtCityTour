import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainContainer:{
        width: '100%',
        backgroundColor: Colors.actGray5,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: 15
    },
    image:{
        flex: 1,
        borderRadius: 15,
        marginRight: 15
    
    },
    infoBox:{
        alignContent: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    title:{
        justifyContent: 'center',
        padding: 15
    },
    relevantInfo:{
        padding: 15
    },
    openState:{
        color: Colors.actOrange1
    }
})