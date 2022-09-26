import {Alert, Pressable, TextInput, View} from "react-native"
import { Colors } from "../../../constants/colors"
import { MACTText, MACTTextBold } from "../../../constants/fonts"
import LockedScreen from "../../../styleguide/layouts/lockedScreen/LockedScreen"
import { styles as GlobalStyles } from "../../../styleguide/layouts/lockedScreen/LockedScreen.style"
import { styles } from "./SendCode.style"
import {sendPasswordResetCode} from '../../../simulations/Login.sim'
import { useEffect, useState } from "react"
import FlechaAtras from '../../../assets/icons/flecha_atras_azul.svg'

const SendCode = ({ navigation }) => {

    const [email, setEmail] = useState('')

    const sendCode = () => {
        sendPasswordResetCode(email)

        .then(
            (response) => {

                if (!response.ok) {
                    Alert.alert(
                        "Error",
                        "El correo electrónico no esta registrado en la aplicación.\nPor favor, intente de nuevo con otro correo."
                    );
                    console.log(response);
                }

                navigation.navigate('EnterCode', {email:email})
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

                {/* Email */}
                <TextInput
                    style={[GlobalStyles.textInput, GlobalStyles.bottomSeparation]}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="correo electrónico"
                ></TextInput>

                {/* Submit */}
                <Pressable
                    style={[GlobalStyles.button]}
                    onPress={ () => sendCode()}
                >
                    <MACTTextBold
                        style={GlobalStyles.buttonLabel}
                    >Enviar código</MACTTextBold>
                </Pressable>
            </View>
        )
    }

    return (
        <LockedScreen content={renderContent()}/>
    )
}

export default SendCode
