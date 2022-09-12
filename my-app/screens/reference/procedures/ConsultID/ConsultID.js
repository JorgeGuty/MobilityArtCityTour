import { View } from 'react-native'
import { useState } from 'react'
import { StyleConsultID } from './ConsultID.style'
import { H7 } from '../../../constants/fonts'
import i18n from '../../../configs/i18n.config'
import ScreenProcedureStructure from '../ScreenStructure/ScreenProcedureStructure'
import InputText from '../../../styleguide/userInputs/InputText/inputText'
import DropDownBox from './DropDownBox/DropDownBox'
/*
  Use example:
  <ConsultID  />
*/
const ConsultID = ({ navigation }) => {
  const [animatedSend, setAnimatedSend] = useState(false)
  const [error, setError] = useState(false)

  const animatedLoading = () => {
    if (animatedSend) {
      navigation.navigate('SendCode')
    } else {
      setTimeout(() => {
        setError(true)
        setAnimatedSend(true)
      }, 500)
    }
  }
  return (
    <ScreenProcedureStructure titleText={i18n.t('INITIALCONSULT_TITLE1')} navigation={navigation} onPressBackButton={() => navigation.goBack()}>
      <View style={StyleConsultID.inputsContainer}>
        <View style={StyleConsultID.typeContainer}>
          <H7 style={StyleConsultID.inputTitle}>{i18n.t('CONSULTID_TYPE')}</H7>
          <DropDownBox options={i18n.t('IDTYPESELECT_OPTIONS', { returnObjects: true })} />
        </View>
        <View style={StyleConsultID.numberContainer}>
          <H7 style={StyleConsultID.inputTitle}>{i18n.t('CONSULTID_NUMBER')}</H7>
          <InputText
            active
            style={[StyleConsultID.input, StyleConsultID.inputText]}
            textChangedStyle={StyleConsultID.inputText}
            textStyle={StyleConsultID.inputText}
            focusStyle={StyleConsultID.inputText}
            keyboardType='numeric'
            onSubmitEditing={() => animatedLoading()}
          />
        </View>
      </View>
      {
        error
          ? <H7 style={StyleConsultID.error}>{i18n.t('ID_ERROR')}</H7>
          : null
      }
    </ScreenProcedureStructure>
  )
}

export default ConsultID
