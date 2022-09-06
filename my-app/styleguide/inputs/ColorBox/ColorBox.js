import { useState } from 'react'
import { View } from 'react-native'
import { stylesColorBox } from './ColorBox.style'
import ColorButton from './ColorButton'

const ColorBox = ({ style, listObjectColors }) => {
  const [buttonSelected, setButtonSelected] = useState()
  const colors = listObjectColors || [
    { name: 'Negro', value: '#333333', isDisabled: false },
    { name: 'Rojo', value: '#D7615C', isDisabled: false },
    { name: 'Azul', value: '#4880E6', isDisabled: false },
    { name: 'Gris', value: '#C4C4C4', isDisabled: false }
  ]

  return (
    <View style={[stylesColorBox.container, style]}>
      {colors.map(colorObject => (
        <ColorButton
          key={colorObject.name}
          colorCode={colorObject.value}
          colorName={colorObject.name}
          isSelected={buttonSelected === colorObject.name}
          isDisabled={colorObject.isDisabled}
          setButtonSelected={setButtonSelected}
        />
      ))}
    </View>
  )
}

export default ColorBox
