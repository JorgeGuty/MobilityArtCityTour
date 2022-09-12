import { useState } from 'react'
import { View } from 'react-native'
import { styles } from './ConsultIDFine.style'
import { H7 } from '../../../constants/fonts'
import i18n from '../../../configs/i18n.config'
import ScreenProcedureStructure from '../ScreenStructure/ScreenProcedureStructure'
import InputText from '../../../styleguide/userInputs/InputText/inputText'
import DropDownBox from '../ConsultID/DropDownBox/DropDownBox'

const ConsultIDFine = ({ navigation }) => {
  const [animatedSend, setAnimatedSend] = useState(false)
  const [error, setError] = useState(false)

  const animatedLoading = () => {
    if (animatedSend) {
      navigation.navigate('SendFineCode')
    } else {
      setTimeout(() => {
        setError(true)
        setAnimatedSend(true)
      }, 500)
    }
  }
  return (
    <ScreenProcedureStructure titleText={i18n.t('CONSULT_FINE')} navigation={navigation} onPressBackButton={() => navigation.goBack()}>
      <View style={styles.inputsContainer}>
        <View style={styles.typeContainer}>
          <H7 style={styles.inputTitle}>{i18n.t('CONSULTID_TYPE')}</H7>
          <DropDownBox options={i18n.t('IDTYPESELECT_OPTIONS', { returnObjects: true })} />
        </View>
        <View style={styles.numberContainer}>
          <H7 style={styles.inputTitle}>{i18n.t('CONSULTID_NUMBER')}</H7>
          <InputText
            active
            style={[styles.input, styles.inputText]}
            textChangedStyle={styles.inputText}
            textStyle={styles.inputText}
            focusStyle={styles.inputText}
            keyboardType='numeric'
            onSubmitEditing={() => animatedLoading()}
          />
        </View>
      </View>
      {
        error
          ? <H7 style={styles.error}>{i18n.t('ID_ERROR')}</H7>
          : null
      }
    </ScreenProcedureStructure>
  )
}

export default ConsultIDFine
