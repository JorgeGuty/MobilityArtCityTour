import { styles } from './UpgradeSpeed.style'
import { H7 } from '../../../styleguide/fonts'
import i18n from '../../../configs/i18n.config'
import ScreenProcedureStructure from '../ScreenStructure/ScreenProcedureStructure'
import InputText from '../../../styleguide/userInputs/InputText/inputText'

const UpgradeSpeed = ({ sendError, errorText, errorStyle }) => {
  return (
    <ScreenProcedureStructure titleText={i18n.t('INITIALCONSULT_TITLE2')} onPressBackButton={() => {}}>
      <H7 style={styles.inputTitle}>{i18n.t('INITIALCONSULT_TEXT')}</H7>
      <InputText
        active
        style={[styles.input, styles.inputText]}
        textChangedStyle={styles.inputText}
        textStyle={styles.inputText}
        focusStyle={styles.inputText}
      />
      {sendError ? <H7 style={[styles.error, errorStyle]}>{errorText}</H7> : null}
    </ScreenProcedureStructure>
  )
}

export default UpgradeSpeed
