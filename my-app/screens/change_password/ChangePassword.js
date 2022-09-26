import { Pressable, TextInput, View, Alert } from "react-native"
import { Colors } from "../../constants/colors"
import { MACTText, MACTTextBold } from "../../constants/fonts"
import LockedScreen from "../../styleguide/layouts/lockedScreen/LockedScreen"
import { styles as GlobalStyles } from "../../styleguide/layouts/lockedScreen/LockedScreen.style"
import { styles } from "./ChangePassword.style"
import {validateLogin, changePassword} from '../../simulations/Login.sim'
import { useEffect, useState } from "react"
import FlechaAtras from '../../assets/icons/flecha_atras_azul.svg'

const ChangePassword = ({ navigation }) => {
    
    const renderContent = () => {
        
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [newPassword, setNewPassword] = useState('')
        const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('')

        const [errorMessage, setErrorMessage] = useState('')

        const passChangeValidation = () => {
            validateLogin(email, password)
            .then(
                (success) => {
                    if (success && newPassword === newPasswordConfirmation) {
                        changePassword(email, newPassword).then(
                            (success) => {
                                if(success){                                 
                                    Alert.alert(
                                        "Éxito!",
                                        "La nueva contraseña fue guardada con éxito."
                                    );
                                    navigation.navigate('Login')                                         
                                }
                                else {
                                    Alert.alert(
                                        "Error",
                                        "No se pudo actualizar la contraseña, por favor inténtelo más tarde."
                                    );
                                }
                            }
                        )
                    }
                    else {
                        Alert.alert(
                            "Error",
                            "Correo electrónico y/o contraseña inválidos.\nPor favor intente de nuevo."
                        );
                    }
                }
            ).catch(
                (error) => { 
                    console.error(error)
                    Alert.alert(
                        "Error de servidor",
                        "Ocurrió un error en nuestros servidores, por favor intentar el trámite más tarde o contactar con un administrador."
                    );
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
                        Cambiar contraseña
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

                {/* Contraseña vieja */}
                <TextInput
                    style={[GlobalStyles.textInput, GlobalStyles.bottomSeparation]}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="contraseña actual"
                ></TextInput>

                {/* Contraseña nueva */}
                <TextInput
                    style={[GlobalStyles.textInput, GlobalStyles.bottomSeparation]}
                    onChangeText={setNewPassword}
                    value={newPassword}
                    placeholder="contraseña nueva"
                ></TextInput>

                {/* Contraseña nueva */}
                <TextInput
                    style={[GlobalStyles.textInput, GlobalStyles.doubleBottomSeparation]}
                    onChangeText={setNewPasswordConfirmation}
                    value={newPasswordConfirmation}
                    placeholder="confirmación contraseña nueva"
                ></TextInput>

                {/* Submit */}
                <Pressable
                    style={[GlobalStyles.button]}
                    onPress={ () => passChangeValidation()}
                >
                    <MACTTextBold
                        style={GlobalStyles.buttonLabel}
                    >Cambiar contraseña</MACTTextBold>
                </Pressable>
            </View>
        )
    }
    
    return (
        <LockedScreen content={renderContent()}/>
    )
}

export default ChangePassword