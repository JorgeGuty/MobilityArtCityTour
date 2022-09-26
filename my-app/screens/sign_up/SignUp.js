import { Pressable, TextInput, View, Alert } from "react-native"
import { Colors } from "../../constants/colors"
import { MACTText, MACTTextBold } from "../../constants/fonts"
import LockedScreen from "../../styleguide/layouts/lockedScreen/LockedScreen"
import { styles as GlobalStyles } from "../../styleguide/layouts/lockedScreen/LockedScreen.style"
import { styles } from "./SignUp.style"
import {validateLogin, changePassword, signUp} from '../../simulations/Login.sim'
import { useEffect, useState } from "react"
import FlechaAtras from '../../assets/icons/flecha_atras_azul.svg'

const SignUp = ({ navigation }) => {
    
    const renderContent = () => {
        
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [passwordConfirmation, setPasswordConfirmation] = useState('')

        const createAccount = () => {
            signUp(email, password)
            .then(
                (response) => {
                    if (!response.ok) {
                        Alert.alert(
                            "Error al crear cuenta",
                            "El correo electrónico ingresado ya existe.\n Si tiene problemas iniciando sesión, recupere la clave de su cuenta."
                        );
                    }
                    navigation.navigate('Login')
                }
            )
        }

        return (
            <View
                style={GlobalStyles.mainContainer}
            >
                <View style={[GlobalStyles.header, GlobalStyles.bottomSeparation]}>
                    <MACTTextBold
                        style={GlobalStyles.subtitle}
                    >
                        Crear cuenta
                    </MACTTextBold>
                    <Pressable 
                        style={GlobalStyles.topCorner}
                        onPress={() => navigation.goBack()}
                    >
                        <FlechaAtras/>
                    </Pressable>
                </View>

                {/* Email */}
                <TextInput
                    style={[GlobalStyles.textInput, GlobalStyles.bottomSeparation]}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="correo electrónico"
                ></TextInput>

                {/* Contraseña */}
                <TextInput
                    style={[GlobalStyles.textInput, GlobalStyles.bottomSeparation]}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="contraseña"
                ></TextInput>

                {/* Confirmación contraseña */}
                <TextInput
                    style={[GlobalStyles.textInput, GlobalStyles.doubleBottomSeparation]}
                    onChangeText={setPasswordConfirmation}
                    value={passwordConfirmation}
                    placeholder="confirmación contraseña"
                ></TextInput>

                {/* Submit */}
                <Pressable
                    style={[GlobalStyles.button]}
                    onPress={ () => createAccount()}
                >
                    <MACTTextBold
                        style={GlobalStyles.buttonLabel}
                    >Crear cuenta</MACTTextBold>
                </Pressable>
            </View>
        )
    }
    
    return (
        <LockedScreen content={renderContent()}/>
    )
}

export default SignUp