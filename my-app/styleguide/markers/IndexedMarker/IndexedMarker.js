import { View, Text } from "react-native"
import { styles } from "./IndexedMarker.style"
import Pin from '../../../assets/icons/pin_de_ubicacion.svg'; 

const IndexedMarker = ({ index }) => {

    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Pin/>
            <Text style={styles.markerText}>
                  {index}
            </Text>
        </View>
    )
}

export default IndexedMarker