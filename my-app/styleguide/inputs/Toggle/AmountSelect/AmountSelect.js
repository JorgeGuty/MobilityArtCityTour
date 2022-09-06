import { useState } from 'react'
import { View, Pressable } from 'react-native'
import { Body2, H7 } from '../../../../constants/fonts'
import { stylesAmountSelect } from './AmountSelect.style'
import RightIcon from '../../../../assets/icons/chevron_right.svg'
import LeftIcon from '../../../../assets/icons/chevron_left.svg'
import { Colors } from '../../../../constants/colors'
import i18n from '../../../../configs/i18n.config'
/*
    Use example: <AmountSelect isDisable={false}></AmountSelect>
*/
const AmountSelect = ({ isDisable, style, amountValues }) => {
  const amountList = amountValues || [500, 1000, 1500, 2000, 2500, 5000, 10000]
  const [amount, setAmount] = useState(amountList[0])
  const [holdPress, setHoldPress] = useState(false)

  return (
    <View style={isDisable ? [stylesAmountSelect.containerDisable, style] : [stylesAmountSelect.container, style]}>
      <View style={stylesAmountSelect.titleContainer}>
        <H7 style={stylesAmountSelect.title}>
          {i18n.t('AMOUNTSELECT_TITLE')}
        </H7>
      </View>
      <Pressable
        disabled={isDisable}
        style={[
          holdPress && stylesAmountSelect.buttonContainerShadow,
          stylesAmountSelect.buttonContainer
        ]}
        onPressIn={() => { setHoldPress(true) }}
        onPressOut={() => { setHoldPress(false) }}
      >
        <Pressable
          disabled={isDisable || amountList.indexOf(amount) === 0}
          onPress={() => setAmount(amountList[amountList.indexOf(amount) - 1])}
          style={[stylesAmountSelect.leftButtonContainer, isDisable || (amountList.indexOf(amount) === 0 && { opacity: 0.45 })]}
        >
          <LeftIcon fill={Colors.text2} />
        </Pressable>
        <Body2 style={stylesAmountSelect.buttonText}>
          {amount}
        </Body2>
        <Pressable
          disabled={isDisable || amountList.indexOf(amount) === (amountList.length - 1)}
          onPress={() => setAmount(amountList[amountList.indexOf(amount) + 1])}
          style={[stylesAmountSelect.rigthButtonContainer, isDisable || (amountList.indexOf(amount) === (amountList.length - 1) && { opacity: 0.45 })]}
        >
          <RightIcon fill={Colors.text2} />
        </Pressable>
      </Pressable>
    </View>
  )
}
export default AmountSelect
