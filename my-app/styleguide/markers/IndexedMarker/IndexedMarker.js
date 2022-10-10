import { View, Text, Pressable } from "react-native"
import { styles } from "./IndexedMarker.style"
import Pin from '../../../assets/icons/pin_parada.svg'; 

const IndexedMarker = ({ index }) => {

    return (
        <Pressable 
            style={{
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Pin/>
            <Text style={styles.markerText}>
                  {index}
            </Text>
        </Pressable>
    )
}

export default IndexedMarker