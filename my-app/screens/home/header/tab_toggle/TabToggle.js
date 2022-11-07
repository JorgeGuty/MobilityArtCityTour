import { Pressable, View } from "react-native"
import { MACTText } from "../../../../constants/fonts"
import { styles } from "./TabToggle.style"
import { Colors } from '../../../../constants/colors';

const TabToggle = ({toggler, setToggler, accessibilitySettings}) => {

    return (
        <Pressable
            style={styles.mainContainer}
            onPress={() => setToggler(!toggler)}
        >
            <View
                style={[styles.tabOption, !!toggler ? [styles.selectedTab, styles.shadow] : null]}
            >
                <MACTText 
                    style={[styles.tabOptionLabel, !!toggler ? styles.selectedTabOptionLabel : null, {fontSize:   20}]}
                >
                    Mi Ruta
                </MACTText>
            </View>
            <View
                style={[styles.tabOption, !toggler ? [styles.selectedTab, styles.shadow] : null]}
            >
                <MACTText 
                    style={[styles.tabOptionLabel, !toggler ? styles.selectedTabOptionLabel : null, {fontSize:   20}]}
                >
                    Puntos
                </MACTText>
            </View>
        </Pressable>
    )
}

export default TabToggle