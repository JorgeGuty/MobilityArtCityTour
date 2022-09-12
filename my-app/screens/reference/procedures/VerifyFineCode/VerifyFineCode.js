import { StyleVerifyCode } from './VerifyFineCode.style'
import { H7 } from '../../../constants/fonts'
import i18n from '../../../configs/i18n.config'
import ScreenProcedureStructure from '../ScreenStructure/ScreenProcedureStructure'
import InputText from '../../../styleguide/userInputs/InputText/inputText'
import { useState } from 'react'

const VerifyFineCode = ({ navigation, email }) => {
  const defaultEmail = '*******@*****.com'
  const text = `${i18n.t('VERIFYCODE_TEXT')} ${email == null ? defaultEmail : email}:`
  const [animatedSend, setAnimatedSend] = useState(false)
  const [error, setError] = useState(false)

  const animatedLoading = () => {
    if (animatedSend) {
      navigation.navigate('FineDetail')
    } else {
      setTimeout(() => {
        setError(true)
        setAnimatedSend(true)
      }, 500)
    }
  }
  return (
    <ScreenProcedureStructure titleText={i18n.t('CONSULT_FINE')} navigation={navigation} onPressBackButton={() => navigation.goBack()}>
      <H7 style={StyleVerifyCode.inputTitle}>{text}</H7>
      <InputText
        active
        style={[StyleVerifyCode.input, StyleVerifyCode.inputText]}
        textChangedStyle={StyleVerifyCode.inputText}
        textStyle={StyleVerifyCode.inputText}
        focusStyle={StyleVerifyCode.inputText}
        keyboardType='numeric'
        onSubmitEditing={() => animatedLoading()}
      />
      {
        error
          ? <H7 style={StyleVerifyCode.error}>{i18n.t('ERROR_CODE')}</H7>
          : null
      }
    </ScreenProcedureStructure>
  )
}

export default VerifyFineCode
