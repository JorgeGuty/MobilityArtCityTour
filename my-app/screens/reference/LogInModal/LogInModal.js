import { View, Modal, Pressable, Image } from 'react-native'
import { styles } from './LogInModal.style.js'
import { H7, H5 } from '../../constants/fonts'
import InputText from '../../styleguide/userInputs/InputText/inputText.js'
import i18n from '../../configs/i18n.config.js'
import IconClose from '../../assets/icons/close.svg'
import { useState } from 'react'

const LogInModal = ({ emailTextStyle, logInTextStyle, inputStyle, passwordStyle, styleContainer, errorStyle, ranaStyle, navigation }) => {
  const [loading, setLoading] = useState(false)
  const [animatedSend, setAnimatedSend] = useState(false)
  const [error, setError] = useState(false)

  const animatedLoading = () => {
    if (animatedSend) {
      navigation.navigate('Home', { showLogIn: false })
    } else {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setError(true)
        setAnimatedSend(true)
      }, 3000)
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
            <H5 style={[styles.logIn, logInTextStyle]}>{i18n.t('LOGIN_TITLE')}</H5>
          </View>
          <View style={styles.logInContainer}>
            <H7 style={[styles.email, emailTextStyle]}>{i18n.t('LOGIN_EMAILTEXT')}</H7>
            <InputText
              active
              style={[styles.input, styles.inputText]}
              textChangedStyle={styles.inputText}
              textStyle={styles.inputText}
              focusStyle={styles.inputText}
            />
            <H7 style={[styles.password, passwordStyle]}>{i18n.t('LOGIN_PASSWORDTEXT')}</H7>
            <InputText
              active
              style={[styles.input, styles.inputText]}
              textChangedStyle={styles.inputText}
              textStyle={styles.inputText}
              focusStyle={styles.inputText}
              secured
              onSubmitEditing={() => animatedLoading()}
            />
            {
              error
                ? <H7 style={[styles.error, errorStyle]}>{i18n.t('LOGIN_ERRORTEXT')}</H7>
                : null
            }
          </View>
          {
            loading
              ? <Image style={[styles.rana, ranaStyle]} source={require('../../assets/images/kolbi-loading.gif')} />
              : null
          }
        </View>
      </View>
    </Modal>
  )
}

export default LogInModal
