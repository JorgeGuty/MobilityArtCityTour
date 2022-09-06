import React from 'react'
import { Pressable, Text } from 'react-native'
import { Colors } from '../../../constants/colors'
import { styles } from './optionBox.style'
import { Icon } from '../../../constants/icons'

const OptionBox = ({ index, style, disabledStyle, textStyle, textSelectedStyle, active, selected, placeholder, setSelectedOption }) => {
  const pressed = () => {
    setSelectedOption(index)
  }

  return (
    <Pressable
      disabled={!active}
      style={[
        styles.container,
        !active ? [styles.disabled, disabledStyle] : [styles.container, style]]}
      onPress={() => pressed()}
    >
      {
          selected === index
            ? <Text selected={selected === index} style={styles.radioBtnStyle} color={Colors.text2}>{Icon.radioBtnCheck}</Text>
            : <Text selected={selected === index} style={styles.radioBtnStyle} color={Colors.text2}>{Icon.radioBtnUnchek}</Text>
      }
      <Text style={selected === index ? [styles.selected, textSelectedStyle] : [styles.text, textStyle]}>{placeholder}</Text>
    </Pressable>
  )
}

export default OptionBox
