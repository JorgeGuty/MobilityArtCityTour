import { View } from 'react-native'
import i18n from '../../../../configs/i18n.config'
import { StyleInvoiceItem } from './InvoiceItem.style'
import ReceiptIcon from '../../../../assets/icons/receipt.svg'
import { H5, Subtitle1, H7, H6 } from '../../../../constants/fonts'
import NButton from '../../../../styleguide/buttons/NButton/NButton'
/*
  Use example:
  <InvoiceItem
    itemPaid={false}
    invoiceTitle={'Factura telefonica'}
    period={'Enero 31, 2022'}
    invoiceNumber={'410164'}
    invoiceAmount={'₡ 44 562.00'}
  />
*/
const InvoiceItem = ({ style, itemPaid, invoiceTitle, period, invoiceNumber, invoiceAmount, navigation, detailStyle }) => {
  return (
    <View style={StyleInvoiceItem.container}>
      <View
        style={[
          StyleInvoiceItem.titleContainer,
          itemPaid ? StyleInvoiceItem.backgroundPaid : StyleInvoiceItem.backgroundPending,
          style
        ]}
      >
        <View style={StyleInvoiceItem.titleContainerLeft}>
          <ReceiptIcon style={StyleInvoiceItem.icon} />
          <H5 style={StyleInvoiceItem.invoiceTitle}>{invoiceTitle}</H5>
        </View>
        <View style={StyleInvoiceItem.titleContainerRight}>
          <View style={StyleInvoiceItem.stateContent}>
            <Subtitle1 style={StyleInvoiceItem.stateTitleText}>{i18n.t('INVOICE_STATE')}</Subtitle1>
            <H5 style={StyleInvoiceItem.stateText}>{itemPaid ? i18n.t('INVOICESTATE_PAID') : i18n.t('INVOICESTATE_PENDING')}</H5>
          </View>
          <View style={StyleInvoiceItem.lineSeparator} />
          <NButton setEditable style={StyleInvoiceItem.button} onPress={() => navigation.navigate('InvoiceModal')}>
            <H7 style={StyleInvoiceItem.buttonText}>{i18n.t('INVOICEITEM_DETAIL')}</H7>
          </NButton>
        </View>
      </View>
      <View style={[StyleInvoiceItem.contentContainer, detailStyle]}>
        <View style={StyleInvoiceItem.contentItem}>
          <Subtitle1 style={StyleInvoiceItem.contentSubtitle}>{i18n.t('INVOICE_PERIOD')}</Subtitle1>
          <H6 style={StyleInvoiceItem.contentText}>{period}</H6>
        </View>
        <View style={StyleInvoiceItem.contentItem}>
          <Subtitle1 style={StyleInvoiceItem.contentSubtitle}>{i18n.t('INVOICE_NUMBER')}</Subtitle1>
          <H6 style={StyleInvoiceItem.contentText}>{invoiceNumber}</H6>
        </View>
        <View style={StyleInvoiceItem.contentItem}>
          <Subtitle1 style={StyleInvoiceItem.contentSubtitle}>{i18n.t('INVOICE_AMOUNT')}</Subtitle1>
          <H6 style={StyleInvoiceItem.contentText}>{invoiceAmount}</H6>
        </View>
      </View>
    </View>
  )
}

export default InvoiceItem
