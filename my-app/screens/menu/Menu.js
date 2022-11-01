
import { Pressable, View, Text, Animated, Dimensions } from "react-native"
import { styles } from "./Menu.style"
import CancelX from '../../assets/icons/cancel_x_gris.svg'
import RouteChangeIcon from '../../assets/icons/cambio_ruta_icon.svg'
import HelpIcon from '../../assets/icons/ayuda_icon.svg'
import AccessibilityIcon from '../../assets/icons/accesibilidad_icon.svg'
import GoBackIcon from '../../assets/icons/flecha_atras_blanca.svg'
import { Constants,  } from "../../constants/constants"
import IconButton from "../../styleguide/buttons/icon_button/IconButton"
import { useEffect, useRef, useState } from "react"
import { fontContext } from '../../contexts/fontContext'


const Menu  = ({ navigation, route }) => {

    let routes = route.params.routes
    
    const [menuSelection, setMenuSelection] = useState(0)

    const menuOptionsHorizontalTranslation = useRef(new Animated.Value(0)).current

    const [menuDepth, setMenuDepth] = useState(0)

    const [fontAmplifier, setFontAmplifier] = useState(0)

    const goBackActionsStack = [
        () => navigation.navigate('Home', {fontAmplifier: fontAmplifier}),
        () => bringMenuOptions()
    ]

    const bringSelectedOptionOptions = () => {
        moveOptionsVertically(-Dimensions.get('screen').width)
        console.log(goBackActionsStack)
    }

    const bringMenuOptions = () => {
        moveOptionsVertically(0)
    }

    const moveOptionsVertically = (translation) => {
        Animated.sequence([
          Animated.timing(
            menuOptionsHorizontalTranslation,
            {
              toValue: translation,
              duration: Constants.animationsDuration,
              useNativeDriver: true
            }
          )
        ]).start()
      }

    const onPressAccessibility = () => {
        setFontAmplifier(fontAmplifier + 1)
    }

    const onPressRouteChange = () => {
        setMenuSelection(1)      
        setMenuDepth(menuDepth + 1)       
        bringSelectedOptionOptions()
    }

    const returnHomeWithRouteChange = (newIndex) => {
        navigation.navigate('Home', {selectedRouteIndex: newIndex})
    }

    const goBack = () => {
        setMenuDepth(menuDepth - 1)  
        goBackActionsStack[menuDepth]()
    }
    
    const menuOptions = [
        // {
        //     icon: <HelpIcon/>,
        //     label: 'Ayuda',
        //     onPress: onPressHelp
        // },
        {
            icon: <AccessibilityIcon/>,
            label: 'Accesibilidad',
            onPress: onPressAccessibility
        },
        {
            icon: <RouteChangeIcon/>,
            label: 'Cambiar de Ruta',
            onPress: onPressRouteChange
        }
    ]

    return (
        <View
            style = {styles.background}
        >
            <View
                style={[styles.menuHeader]}
            >
                <Pressable
                    onPress={goBack}
                >
                    { 
                        menuDepth === 0 ?
                        <CancelX
                        style={Constants.shadow}
                        ></CancelX>
                        : 
                        <GoBackIcon
                            style={Constants.shadow}
                            ></GoBackIcon>
                    }
                </Pressable>
            </View>
            <Animated.View
                style={
                    [
                        styles.menuSlider, 
                        {
                            transform: [{ translateX: menuOptionsHorizontalTranslation }]
                        }
                    ]
                }
            >
                <View style={styles.options}>
                    {
                        menuOptions.map((option, index) => {
                            return (
                                <View
                                    key = {index}
                                    style = {styles.option}
                                >
                                    <IconButton                                
                                        icon = {option.icon}
                                        label = {option.label}
                                        onPress = {option.onPress}
                                    />
                                </View>
                            )
                        })
                    }
                </View>
                {
                    menuSelection === 1 ?
                    <View style={styles.options}>
                        {
                            routes.map((route, index) => {
                                return (
                                    <View
                                    key = {index}
                                    style = {styles.option}
                                    >
                                        <IconButton                                
                                            label = {route.name}
                                            onPress = {() => returnHomeWithRouteChange(index)}
                                            />
                                    </View>
                                )
                            })
                        }                        
                    </View>
                    :
                    null
                }
            </Animated.View>            
        </View>
    )
}

export default Menu
