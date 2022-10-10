import { View, Text, Pressable } from "react-native"
import { styles } from "../IndexedMarker/IndexedMarker.style"
import Pin from '../../../assets/icons/pin_punto_interes.svg'; 

const SimpleMarker = ({point, onPress}) => {

    return (
        <Pressable 
            style={{
                alignItems: 'center',
                justifyContent: 'center'
            }}
            onPress={() => onPress(point)}
        >
            <Pin width={35} height={35}/>
        </Pressable>
    )
}

export default SimpleMarker