
import { Pressable, View, Text, Animated, Dimensions } from "react-native"
import { styles } from "./Menu.style"
import CancelX from '../../assets/icons/cancel_x_gris.svg'
import RouteChangeIcon from '../../assets/icons/cambio_ruta_icon.svg'
import HelpIcon from '../../assets/icons/ayuda_icon.svg'
import AccessibilityIcon from '../../assets/icons/accesibilidad_icon.svg'
import GoBackIcon from '../../assets/icons/flecha_atras_blanca.svg'
import FacebookIcon from '../../assets/icons/facebookIcon.svg'
import InstagramIcon from '../../assets/icons/instagramIcon.svg'
import MailIcon from '../../assets/icons/mailIcon.svg'
import { Constants,  } from "../../constants/constants"
import IconButton from "../../styleguide/buttons/icon_button/IconButton"
import { useEffect, useRef, useState } from "react"
import { fontContext } from '../../contexts/fontContext'
import { MACTText, MACTTextBold } from "../../constants/fonts"
import { Colors } from "../../constants/colors"


const Menu  = ({ navigation, route }) => {

    let routes = route.params.routes

    const [menuSelection, setMenuSelection] = useState(0)

    const menuOptionsHorizontalTranslation = useRef(new Animated.Value(0)).current

    const [menuDepth, setMenuDepth] = useState(0)

    let paramsAccessibilitySettings = route.params.accessibilitySettings ? route.params.accessibilitySettings : null

    const [accessibilitySettings, setAccessibilitySettings] = useState({
        fontAmplifier: 0
    })

    useEffect(()=> {
        if (paramsAccessibilitySettings !== null) {
          let modifiedAccessibility = {
            ...paramsAccessibilitySettings
          };    
          setAccessibilitySettings(modifiedAccessibility)
        }
      },[paramsAccessibilitySettings])

    const goBackActionsStack = [
        () => navigation.navigate('Home', {accessibilitySettings: accessibilitySettings}),
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

    const onPressHelp = () => {
        setMenuSelection(3)
        setMenuDepth(menuDepth + 1)
        bringSelectedOptionOptions()
    }

    const onPressAccessibility = () => {
        setMenuSelection(2)
        setMenuDepth(menuDepth + 1)
        bringSelectedOptionOptions()
    }

    const incrementFontSize = () => {
        let modifiedAccessibility = {
            ...accessibilitySettings
        }
        modifiedAccessibility.fontAmplifier = modifiedAccessibility.fontAmplifier < 4 ? modifiedAccessibility.fontAmplifier + 2 : modifiedAccessibility.fontAmplifier
        setAccessibilitySettings(modifiedAccessibility)    
    }

    const decrementFontSize = () => {
        let modifiedAccessibility = {
            ...accessibilitySettings
        }
        modifiedAccessibility.fontAmplifier = modifiedAccessibility.fontAmplifier > -4 ? modifiedAccessibility.fontAmplifier - 2 : modifiedAccessibility.fontAmplifier
        setAccessibilitySettings(modifiedAccessibility)
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
        {
            icon: <HelpIcon/>,
            label: 'Ayuda',
            onPress: onPressHelp
        },
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
                                        accessibilitySettings={accessibilitySettings}
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
                                            accessibilitySettings={accessibilitySettings}
                                        />
                                    </View>
                                )
                            })
                        }                        
                    </View>
                    :
                    menuSelection === 2 ?
                    <View style={styles.contentCard}>
                        <MACTTextBold
                            style={[{fontSize:  30, color: Colors.actOrange1}]}
                        >
                            Accesibilidad
                        </MACTTextBold>
                        <MACTTextBold
                            style={[{fontSize:  20, color: Colors.actBlue1}]}
                        >
                            Tamaño del texto
                        </MACTTextBold>
                        <MACTText
                            style={[styles.fontAmplifierExample, {fontSize: (20 + accessibilitySettings.fontAmplifier)}]}
                        >
                            Texto
                        </MACTText>
                        <View
                            style={[styles.fontAmplifierInput, Constants.shadow]}
                        >
                            <Pressable
                                style={styles.decrementFontSizeInput}
                                onPress={decrementFontSize}
                                >
                                <MACTTextBold                                    
                                    style={{fontSize:  40}}                                        
                                >
                                    -
                                </MACTTextBold>
                            </Pressable>
                            <Pressable
                                style={styles.incrementFontSizeInput}
                                onPress={incrementFontSize}
                            >
                                <MACTTextBold
                                    style={{fontSize:  40}}
                                >
                                    +
                                </MACTTextBold>                                
                            </Pressable>
                        </View>
                        {
                            accessibilitySettings.fontAmplifier === 0 && <MACTText>Por defecto</MACTText>
                        }
                    </View>
                    :
                    menuSelection === 3 ?
                    <View style={styles.contentCard}>
                        <MACTTextBold
                            style={[{fontSize:  30, color: Colors.actOrange1}]}
                        >
                            Ayuda
                        </MACTTextBold>
                        <MACTTextBold
                            style={[{fontSize:  20, color: Colors.actBlue1}]}
                        >
                            Redes Sociales
                        </MACTTextBold>
                        <MACTText
                            style={styles.contactInfoText}
                        >
                            Puedes contactarnos por medio de nuestras redes sociales:
                        </MACTText>

                        <InstagramIcon height={30} width={30}></InstagramIcon>
                        <MACTText
                            style={styles.contactInfoText}
                        >
                            @artcitytour
                        </MACTText>

                        <FacebookIcon height={30} width={30}></FacebookIcon>
                        <MACTText
                            style={styles.contactInfoText}
                        >
                            @ArtCityTour
                        </MACTText>
                        <MACTTextBold
                            style={[{fontSize:  20, color: Colors.actBlue1}]}
                        >
                            Soporte
                        </MACTTextBold>
                        <MACTText
                            style={styles.contactInfoText}
                        >
                            O para consultas sobre la aplicación con nuestro equipo de soporte:
                        </MACTText>

                        <MailIcon></MailIcon>
                        <MACTText
                            style={styles.contactInfoText}
                        >
                            movilidadact.soporte@gmail.com</MACTText>
                    </View>
                    :
                    null
                }
            </Animated.View>            
        </View>
    )
}

export default Menu
