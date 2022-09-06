import { View } from 'react-native'
import React from 'react'
import ColorBox from '../../../styleguide/inputs/ColorBox/ColorBox'

const colors = [
  { name: 'Negro', value: '#333333', isDisabled: false },
  { name: 'Rojo', value: '#D7615C', isDisabled: false },
  { name: 'Azul', value: '#4880E6', isDisabled: false },
  { name: 'Gris', value: '#C4C4C4', isDisabled: false },
  { name: 'Gris 2', value: '#C4C4C4', isDisabled: false },
  { name: 'Gris 3', value: '#C4C4C4', isDisabled: false }
]

const ColorBoxExample = () => {
  return (
    <View>
      <ColorBox style={{ width: 400 }} />
      <ColorBox style={{ width: 500 }} listObjectColors={colors} />
    </View>
  )
}

export default ColorBoxExample
