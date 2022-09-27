import { Pressable, TextInput, View, Alert } from "react-native"
import { Colors } from "../../constants/colors"
import { MACTText, MACTTextBold } from "../../constants/fonts"
import LockedScreen from "../../styleguide/layouts/lockedScreen/LockedScreen"
import { styles as GlobalStyles } from "../../styleguide/layouts/lockedScreen/LockedScreen.style"
import { styles } from "./Login.style"
import {validateLogin} from '../../simulations/Login.sim'
import { useEffect, useState } from "react"
const Login = ({ navigation }) => {

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const loginValidation = () => {
        validateLogin(email, password)
        .then(
            (response) => {

                if (!response.ok) {
                    Alert.alert(
                        "Error de inicio de sesión",
                        "Correo electrónico  y/o contraseña inválidos.\nPor favor intente de nuevo."
                    );
                    console.log(response);
                }
                else navigation.navigate('Home')
                
            }
        ).catch((error) =>
        { 
            console.error(error)
            Alert.alert(
                "Error de servidor",
                "Ocurrió un error en nuestros servidores, por favor intentar el trámite más tarde o contactar con un administrador."
            );
            navigation.navigate('Login')

        }
    )
    }

    const renderContent = () => {
        return (
            <View
                style={GlobalStyles.mainContainer}
            >
                <MACTTextBold
                    style={GlobalStyles.subtitle}
                >
                    Iniciar sesión
                </MACTTextBold>

                {/* Email */}
                <TextInput
                    style={[GlobalStyles.textInput, GlobalStyles.bottomSeparation]}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="correo electrónico"
                ></TextInput>

                {/* Contraseña */}
                <TextInput
                    style={[GlobalStyles.textInput]}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry 
                    placeholder="contraseña"
                ></TextInput>

                {/* Submit */}
                <Pressable
                    style={[GlobalStyles.button, styles.submitButton, GlobalStyles.halfBottomSeparation]}
                    onPress={ () => loginValidation()}
                >
                    <MACTTextBold
                        style={GlobalStyles.buttonLabel}
                    >Iniciar sesión</MACTTextBold>
                </Pressable>
                {/* Olvidé mi contraseña */}
                <Pressable
                    style={[GlobalStyles.center, GlobalStyles.halfBottomSeparation]}
                    onPress={ () => navigation.navigate('SendCode')}                
                >
                    <MACTText
                        style={[GlobalStyles.link]}
                    >¿Ovidó su contraseña?</MACTText>
                </Pressable>


                {/* Cambiar contraseña */}
                <Pressable
                    onPress={ () => navigation.navigate('ChangePassword')} 
                    style={[GlobalStyles.center, GlobalStyles.bottomSeparation]}
                >
                    <MACTText
                        style={[GlobalStyles.link, styles.link]}
                    >Cambiar contraseña</MACTText>
                </Pressable>

                <View style={[GlobalStyles.lineSeparation, GlobalStyles.bottomSeparation]}></View>

                <MACTText style={GlobalStyles.center}>¿No tienes una cuenta?</MACTText>

                

                {/* Crear cuenta */}
                <Pressable
                    style={[GlobalStyles.button, GlobalStyles.bottomSeparation]}
                    onPress={ () => navigation.navigate('SignUp')}
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

export default Login
