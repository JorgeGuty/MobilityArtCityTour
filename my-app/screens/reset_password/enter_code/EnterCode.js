import { Pressable, TextInput, View } from "react-native"
import { Colors } from "../../../constants/colors"
import { MACTText, MACTTextBold } from "../../../constants/fonts"
import LockedScreen from "../../../styleguide/layouts/lockedScreen/LockedScreen"
import { styles as GlobalStyles } from "../../../styleguide/layouts/lockedScreen/LockedScreen.style"
import { styles } from "./EnterCode.style"
import {sendPasswordResetCode, validatePasswordResetCode} from '../../../simulations/Login.sim'
import { useEffect, useState } from "react"
import FlechaAtras from '../../../assets/icons/flecha_atras_azul.svg'

const EnterCode = ({ navigation, route }) => {
    
    const [code, setCode] = useState(0)

    const email = route.params.email

    const validateCode = () => {
        validatePasswordResetCode(code)
        .then(
            (success) => {
                if (success) {
                    navigation.navigate('ResetPassword', {email:email})
            }
                else {
                    Alert.alert(
                        "Error",
                        "El código ingresado es inválido.\n Por favor, intente de nuevo o envíe otro código"
                    );
                }
            }
        )
    }

    const renderContent = () => {
        return (
            <View
                style={GlobalStyles.mainContainer}
            >
                <View style={[GlobalStyles.header, GlobalStyles.bottomSeparation]}>
                    <MACTTextBold
                        style={GlobalStyles.subtitle}
                    >
                        Recuperar contraseña
                    </MACTTextBold>
                    <Pressable 
                        style={GlobalStyles.topCorner}
                        onPress={() => navigation.goBack()}
                    >
                        <FlechaAtras/>
                    </Pressable>
                </View>

                {/* Código de recuperación */}
                <TextInput
                    style={[GlobalStyles.textInput]}
                    onChangeText={setCode}
                    value={code}
                    placeholder="código de recuperación"
                    keyboardType="numeric"
                ></TextInput>
                {/* Olvidé mi contraseña */}
                <Pressable
                    style={styles.recoverPasswordLink}
                    onPress={ () => navigation.navigate('SendCode')}                
                >
                    <MACTText
                        style={[GlobalStyles.link]}
                    >Enviar código de nuevo</MACTText>
                </Pressable>

                {/* Submit */}
                <Pressable
                    style={[GlobalStyles.button, GlobalStyles.topSeparation]}
                    onPress={ () => validateCode()}
                >
                    <MACTTextBold
                        style={[GlobalStyles.buttonLabel]}
                    >Validar código</MACTTextBold>
                </Pressable>
            </View>
        )
    }
    
    return (
        <LockedScreen content={renderContent()}/>
    )
}

export default EnterCode