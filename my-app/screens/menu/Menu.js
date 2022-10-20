import { Pressable, View } from "react-native"
import { styles } from "./Menu.style"
import CancelX from '../../assets/icons/cancel_x_gris.svg'
import RouteChangeIcon from '../../assets/icons/cambio_ruta_icon.svg'
import HelpIcon from '../../assets/icons/ayuda_icon.svg'
import AccessibilityIcon from '../../assets/icons/accesibilidad_icon.svg'
import { Constants } from "../../constants/constants"
import IconButton from "../../styleguide/buttons/icon_button/IconButton"


const Menu  = ({ navigation }) => {

    const onPressHelp = () => {
        console.log('ayuda')
    }

    const onPressAccessibility = () => {
        console.log('accesibilidad')
    }

    const onPressRouteChange = () => {
        console.log('cambio de ruta')
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
                style={styles.menuHeader}
            >
                <Pressable
                    onPress={() => navigation.goBack()}
                >
                    <CancelX
                        style={Constants.shadow}
                    ></CancelX>
                </Pressable>
            </View>
            <View
                style={styles.options}
            >
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
        </View>
    )
}



export default Menu