import { View } from 'react-native'
import React from 'react'
import SquareCard from '../../../styleguide/cards/SquareCard/SquareCard'
import i18n from '../../../configs/i18n.config'
import IconReceipt from '../../../assets/icons/receiptHome.svg'

const SquareCardExample = () => {
  return (
    <View style={{ width: 500, height: 500 }}>
      <SquareCard
        icon={<IconReceipt />}
        nameSection={i18n.t('HOMESERVICE_RECEIPT_TITLE')}
        sectionDescription={i18n.t('HOMESERVICE_RECEIPT_DESCRIPTION')}
        fx={() => console.log('Square card on Press Example')}
        animated
      />
    </View>
  )
}

export default SquareCardExample
