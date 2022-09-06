import { StyleConsultInvoices } from './ConsultInvoices.style'
import { H7 } from '../../../constants/fonts'
import i18n from '../../../configs/i18n.config'
import ScreenProcedureStructure from '../ScreenStructure/ScreenProcedureStructure'
import InputText from '../../../styleguide/userInputs/InputText/inputText'
import { Image } from 'react-native'
import { useState } from 'react'

const ConsultInvoices = ({ ranaStyle, errorText, errorStyle, navigation }) => {
  const [loading, setLoading] = useState(false)
  const [animatedSend, setAnimatedSend] = useState(false)
  const [error, setError] = useState(false)

  const animatedLoading = () => {
    if (animatedSend) {
      navigation.navigate('ConsultID')
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
    <ScreenProcedureStructure titleText={i18n.t('INITIALCONSULT_TITLE1')} navigation={navigation} onPressBackButton={() => navigation.goBack()}>
      <H7 style={StyleConsultInvoices.inputTitle}>{i18n.t('INITIALCONSULT_TEXT')}</H7>
      <InputText
        active
        style={[StyleConsultInvoices.input, StyleConsultInvoices.inputText]}
        textChangedStyle={StyleConsultInvoices.inputText}
        textStyle={StyleConsultInvoices.inputText}
        focusStyle={StyleConsultInvoices.inputText}
        keyboardType='numeric'
        onSubmitEditing={() => animatedLoading()}
      />
      {
        error
          ? <H7 style={StyleConsultInvoices.error}>{i18n.t('FINE_ERRORTEXT')}</H7>
          : null
      }
      {
        loading
          ? <Image style={[StyleConsultInvoices.rana, ranaStyle]} source={require('../../../assets/images/kolbi-loading.gif')} />
          : null
      }
    </ScreenProcedureStructure>
  )
}

export default ConsultInvoices
