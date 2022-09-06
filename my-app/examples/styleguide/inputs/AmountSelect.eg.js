import { View } from 'react-native'
import React from 'react'
import AmountSelect from '../../../styleguide/inputs/Toggle/AmountSelect/AmountSelect'

const amountValues = [10, 20, 30]

const AmountSelectExample = () => {
  return (
    <View>
      <AmountSelect />
      <AmountSelect amountValues={amountValues} />
    </View>
  )
}

export default AmountSelectExample
