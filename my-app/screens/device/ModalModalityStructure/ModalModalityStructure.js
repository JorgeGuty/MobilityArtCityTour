import { View, ScrollView, Text } from 'react-native'
import ModalStructure from '../../procedures/ScreenStructure/ModalStructure/ModalStructure'
import CardButtonBox from '../../../styleguide/buttons/CardButtonBox/CardButtonBox'
import { StyleModalModality } from './ModalModalityStructure.style'
import i18n from '../../../configs/i18n.config'
import { Caption1, H5 } from '../../../constants/fonts'
import { Constants } from '../../../constants/constants'

const ModalModalityStructure = ({ children, style, buttonText, scrollVerticalStyle, navigation }) => {
  return (
    <ModalStructure
      titleComponent={<H5 style={StyleModalModality.modaltitle}>{i18n.t('PURCHASE_MODALITY')}</H5>}
      navigation={navigation}
    >
      <View style={StyleModalModality.cardBox}>
        <CardButtonBox buttons={Constants.buttons} />
      </View>
      <ScrollView
        style={[StyleModalModality, scrollVerticalStyle]}
        showsVerticalScrollIndicator={false}
      >
        {children}
        <View style={StyleModalModality.conditionsContainer}>
          <Caption1 style={StyleModalModality.conditionsText}>
            {i18n.t('PLANS_CONDITIONS')}
            <Text style={StyleModalModality.textHighlighted}>
              {i18n.t('PLANS_CONDITIONS_COLOR')}
            </Text>
          </Caption1>
        </View>
      </ScrollView>
    </ModalStructure>
  )
}

export default ModalModalityStructure
