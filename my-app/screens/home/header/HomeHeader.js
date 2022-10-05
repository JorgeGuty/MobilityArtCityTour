import { Dimensions, View, Text } from "react-native"
import { useState } from "react";
import { Colors } from "../../../constants/colors"
import { MACTText } from "../../../constants/fonts"
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "./HomeHeader.style";
import TabToggle from "./tabToggle/tabToggle";

const HomeHeader = ({toggler, setToggler}) => {

    const [active, setActive] = useState(true)

    return (
        <View
            style={styles.mainContainer}
        >
            <TabToggle
                toggler={toggler}
                setToggler={setToggler}
            ></TabToggle>
        </View>
    )
}

export default HomeHeader