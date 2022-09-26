import { Pressable, TextInput, View, Alert  } from "react-native"
import { Colors } from "../../../constants/colors"
import { MACTText, MACTTextBold } from "../../../constants/fonts"
import LockedScreen from "../../../styleguide/layouts/lockedScreen/LockedScreen"
import { styles as GlobalStyles } from "../../../styleguide/layouts/lockedScreen/LockedScreen.style"
import { styles } from "./ResetPassword.style"
import {sendPasswordResetCode, changePassword} from '../../../simulations/Login.sim'
import { useEffect, useState } from "react"
import FlechaAtras from '../../../assets/icons/flecha_atras_azul.svg'

const ResetPassword = ({ navigation, route }) => {
    
    const email = route.params.email

    const renderContent = () => {
        
        const [newPassword, setNewPassword] = useState('')
        const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('')

        const [errorMessage, setErrorMessage] = useState('')

        const resetPassword = () => {
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
                            "No se pudo guardar la nueva contraseña.\n Por favor intente con otro código"
                        );
                        navigation.navigate('SendCode')
                    }
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
                        Recuperar contraseña
                    </MACTTextBold>
                    <Pressable 
                        style={GlobalStyles.topCorner}
                        onPress={() => navigation.goBack()}
                    >
                        <FlechaAtras/>
                    </Pressable>
                </View>

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
                    onPress={ () => resetPassword()}
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

export default ResetPassword