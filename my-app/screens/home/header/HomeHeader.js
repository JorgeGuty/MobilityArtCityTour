import { Dimensions, View, Text, Pressable, Animated } from "react-native"
import { useState, useRef,useEffect } from "react";
import { Colors } from "../../../constants/colors"
import { MACTText } from "../../../constants/fonts"
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "./HomeHeader.style";
import TabToggle from "./tab_toggle/TabToggle";
import BotonBuscar from '../../../assets/icons/boton_buscar.svg'
import BotonMenu from '../../../assets/icons/boton_menu.svg'
import { Constants } from "../../../constants/constants";

const HomeHeader = ({toggler, setToggler, filterPoints, setShowSearchHeader}) => {

    const [active, setActive] = useState(true)

    const searchButtonTranslation = useRef(new Animated.Value(Dimensions.get('screen').width)).current


    const showSearchButton = () => {
      Animated.sequence([
        Animated.timing(
          searchButtonTranslation,
          {
            toValue: 0,
            duration: Constants.animationsDuration,
            useNativeDriver: true
          }
        )
      ]).start()
    }
  
    const hideSearchButton = () => {
      Animated.sequence([
        Animated.timing(
          searchButtonTranslation,
          {
            toValue: Dimensions.get('screen').width,
            duration: Constants.animationsDuration,
            useNativeDriver: true
          }
        )
      ]).start()
    }
  
    useEffect(() => {
      !!toggler ? hideSearchButton() : showSearchButton()
    }, [toggler])

    return (
        <View
            style={styles.mainContainer}
            
        >
            <Pressable
                style={styles.headerElement}
            >
                <BotonMenu></BotonMenu>
            </Pressable>
            <View
                style={styles.headerElement}
            >
                <TabToggle
                    toggler={toggler}
                    setToggler={setToggler}
                ></TabToggle>
            </View>
            <Animated.View
                style={[
                    styles.headerElement,
                    { transform: [{ translateX: searchButtonTranslation }] }
                ]}
            >
                <Pressable
                  onPress={() => setShowSearchHeader(true)}
                >
                    <BotonBuscar></BotonBuscar>
                </Pressable>
            </Animated.View>

            
        </View>
    )
}

export default HomeHeader