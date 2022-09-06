import { View, ScrollView, Dimensions } from 'react-native'
import i18n from '../../../configs/i18n.config'
import NButton from '../../../styleguide/buttons/NButton/NButton'
import { H5 } from '../../../constants/fonts'
import ScreenProcedureStructure from '../ScreenStructure/ScreenProcedureStructure'
import InvoiceItem from './InvoiceItem/InvoiceItem'
import { styles } from './InvoiceDetail.style'
import NButtonAlt from '../../../styleguide/buttons/NButtonAlt/NButtonAlt'
import { Constants } from '../../../constants/constants'

const InvoiceDetail = ({ info, navigation }) => {
  const screenWidth = Dimensions.get('screen').width
  const screenHeight = Dimensions.get('screen').height

  return (
    <ScreenProcedureStructure titleText={i18n.t('RECENT_BILLS')} navigation={navigation} onPressBackButton={() => navigation.goBack()}>
      <View style={styles.children}>
        <View style={(screenHeight < 1081) ? styles.minScreen : null}>
          <ScrollView>
            {
              Constants.invoiceDetailInfo.map((element, key) => {
                return (
                  <InvoiceItem
                    navigation={navigation} key={key}
                    invoiceAmount={element.invoiceAmount} invoiceNumber={element.invoiceNumber}
                    invoiceTitle={element.invoiceTitle}
                    itemPaid={element.itemPaid} period={element.period}
                  />
                )
              })
            }
          </ScrollView>
        </View>
        <View style={styles.buttonsRow}>
          <NButtonAlt style={(screenWidth < 811) ? styles.minAnotherServiceButton : styles.anotherServiceButton} setEditable onPress={() => navigation.navigate('ConsultInvoices')}>
            <H5>{i18n.t('CONSULT_ANOTHER_SERVICE')}</H5>
          </NButtonAlt>
          <NButton style={(screenWidth < 811) ? styles.minBackToHomeButton : styles.backToHomeButton} setEditable onPress={() => navigation.navigate('Home')}>
            <H5 style={styles.changeH5Color}>{i18n.t('BACK_TO_HOME')}</H5>
          </NButton>
        </View>
      </View>
    </ScreenProcedureStructure>
  )
}

export default InvoiceDetail
