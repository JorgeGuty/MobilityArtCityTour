import { View, Modal, Pressable } from 'react-native'
import { useState } from 'react'
import { styles } from './LogOutModal.style.js'
import { H7, H5 } from '../../constants/fonts'
import InputText from '../../styleguide/userInputs/InputText/inputText.js'
import IconClose from '../../assets/icons/close.svg'
import i18n from '../../configs/i18n.config.js'

const LogOutModal = ({ visible, pinTextStyle, logOutTextStyle, inputStyle, modalStyle, styleContainer, errorStyle, navigation }) => {
  const [animatedSend, setAnimatedSend] = useState(false)
  const [error, setError] = useState(false)

  const animatedLoading = () => {
    if (animatedSend) {
      navigation.navigate('LockedScreen')
      navigation.navigate('LogInModal')
    } else {
      setTimeout(() => {
        setError(true)
        setAnimatedSend(true)
      }, 500)
    }
  }
  return (
    <Modal visible transparent animationType='slide'>
      <View style={styles.modal}>
        <Pressable style={styles.touchScreen} onPress={() => navigation.goBack()} />
        <View style={[styles.container, styleContainer]}>
          <Pressable style={styles.iconPress} onPress={() => navigation.goBack()}>
            <IconClose />
          </Pressable>
          <View style={styles.titleContainer}>
            <H5 style={[styles.logOut, logOutTextStyle]}>{i18n.t('LOGOUT_TITLE')}</H5>
          </View>
          <View style={styles.logOutContainer}>
            <H7 style={[styles.pin, pinTextStyle]}>{i18n.t('LOGOUT_INPUTTEXT')}</H7>
            <InputText
              active
              style={[styles.input, styles.inputText]}
              textChangedStyle={styles.inputText}
              textStyle={styles.inputText}
              focusStyle={styles.inputText}
              keyboardType='numeric'
              onSubmitEditing={() => animatedLoading()}
            />
            {
              error
                ? <H7 style={[styles.error, errorStyle]}>{i18n.t('LOGOUT_ERROR')}</H7>
                : null
            }
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default LogOutModal
