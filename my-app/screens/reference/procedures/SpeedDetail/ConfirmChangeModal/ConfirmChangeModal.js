import { View } from 'react-native'
import { StyleConfirmChange } from './ConfirmChangeModal.style'
import NButton from '../../../../styleguide/buttons/NButton/NButton'
import NButtonAlt from '../../../../styleguide/buttons/NButtonAlt/NButtonAlt'
import ModalStructure from '../../ScreenStructure/ModalStructure/ModalStructure'
import { H5, H7 } from '../../../../constants/fonts'
import i18n from '../../../../configs/i18n.config'

const ConfirmChangeModal = ({ navigation }) => {
  return (
    <ModalStructure
      navigation={navigation}
      titleComponent={<H5 style={StyleConfirmChange.titleText}>{i18n.t('CONFIRMCHANGE_TITLE')}</H5>}
    >
      <View style={StyleConfirmChange.container}>
        <H7 style={StyleConfirmChange.textConfirm}>{i18n.t('CONFIRMCHANGE_TEXT')}</H7>
        <View style={StyleConfirmChange.buttonsContainer}>
          <NButtonAlt setEditable onPress={() => navigation.goBack()} style={StyleConfirmChange.buttonsSize}>
            <H5 style={StyleConfirmChange.cancelButtonText}>{i18n.t('CONFIRMCHANGE_CANCELBUTTON')}</H5>
          </NButtonAlt>
          <NButton setEditable onPress={() => navigation.navigate('SuccessRequest')} style={StyleConfirmChange.buttonsSize}>
            <H5 style={StyleConfirmChange.confirmButtonText}>{i18n.t('CONFIRMCHANGE_CONFIRMBUTTON')}</H5>
          </NButton>
        </View>
      </View>
    </ModalStructure>
  )
}

export default ConfirmChangeModal
