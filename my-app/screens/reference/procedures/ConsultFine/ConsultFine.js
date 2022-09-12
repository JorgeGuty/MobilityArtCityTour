import { View, Image } from 'react-native'
import { styles } from './ConsultFine.style'
import { H7 } from '../../../constants/fonts'
import i18n from '../../../configs/i18n.config'
import ScreenProcedureStructure from '../ScreenStructure/ScreenProcedureStructure'
import InputText from '../../../styleguide/userInputs/InputText/inputText'
import { useState } from 'react'

const ConsultFine = ({ navigation, ranaStyle }) => {
  const [loading, setLoading] = useState(false)
  const [animatedSend, setAnimatedSend] = useState(false)
  const [error, setError] = useState(false)

  const animatedLoading = () => {
    if (animatedSend) {
      navigation.navigate('ConsultIDFine')
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
    <ScreenProcedureStructure titleText={i18n.t('CONSULT_FINE')} navigation={navigation} onPressBackButton={() => navigation.goBack()}>
      <View style={styles.container}>
        <H7 style={styles.inputTitle}>{i18n.t('INITIALCONSULT_TEXT')}</H7>
        <InputText
          active
          style={[styles.input, styles.inputText]}
          textChangedStyle={styles.inputText}
          textStyle={styles.inputText}
          focusStyle={styles.inputText}
          keyboardType='numeric'
          onSubmitEditing={() => { animatedLoading() }}
        />
        {
          error
            ? <H7 style={styles.error}>{i18n.t('FINE_ERRORTEXT')}</H7>
            : null
        }
      </View>
      {
        loading
          ? <Image style={[styles.rana, ranaStyle]} source={require('../../../assets/images/kolbi-loading.gif')} />
          : null
      }
    </ScreenProcedureStructure>
  )
}

export default ConsultFine
