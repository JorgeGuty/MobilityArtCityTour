import { View, Text } from "react-native"
import { styles } from "./IndexedMarker.style"
import pin from '../../../../assets/icons/pin_de_ubicacion.svg'; 

const IndexedMarker = ({ index }) => {

    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
          }}>
            <View style={styles.marker}>
              <Text style={styles.markerText}>
                {index}
              </Text>
            </View>
        </View>
    )
}

export default IndexedMarker