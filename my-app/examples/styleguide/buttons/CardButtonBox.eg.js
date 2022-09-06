import { View } from 'react-native'
import React from 'react'
import CardButtonBox from '../../../styleguide/buttons/CardButtonBox/CardButtonBox'

const buttonsArray = [
  { ext: ['Kit prepago', 'chip prepago Kolbi + teléfono'], disabled: false },
  { ext: ['Kit prepago', 'chip prepago Kolbi + teléfono'], disabled: false },
  { ext: ['Kit prepago', 'chip prepago Kolbi + teléfono'], disabled: false },
  { ext: ['Kit prepago', 'chip prepago Kolbi + teléfono'], disabled: false }
]

const CardButtonBoxExample = () => {
  return (
    <View>
      <CardButtonBox buttons={buttonsArray} />
    </View>
  )
}

export default CardButtonBoxExample
