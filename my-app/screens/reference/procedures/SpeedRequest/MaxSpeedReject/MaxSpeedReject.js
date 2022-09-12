import { View } from 'react-native'
import { styles } from './MaxSpeedReject.style'
import { H7, H4, H5 } from '../../../../constants/fonts'
import i18n from '../../../../configs/i18n.config'
import ScreenProcedureStructure from '../../ScreenStructure/ScreenProcedureStructure'
import NButton from '../../../../styleguide/buttons/NButton/NButton'

const MaxSpeedReject = ({ navigation }) => {
  return (
    <ScreenProcedureStructure navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.card}>
          <H4 style={styles.title}>{i18n.t('REJECT_INCREASE_REQUEST')}</H4>
          <H7 style={styles.text}>{i18n.t('MAX_SPEED_REJECT_TEXT')}</H7>
          <NButton setEditable style={styles.button} onPress={() => navigation.navigate('Home')}>
            <H5 style={styles.buttonText}>{i18n.t('BACK_TO_HOME')}</H5>
          </NButton>
        </View>
      </View>
    </ScreenProcedureStructure>
  )
}

export default MaxSpeedReject
