import React, { useState } from 'react'
import { Text, Image } from 'react-native'
import { Icon } from '../../../constants/icons'
import { styles } from './multiBox.style'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const MultiBox = ({ checked, multiOption, index, disabledStyle, setMultiOption, textStyle, active, textStyleChecked, style, imageURL, placeholder }) => {
  const [newChecked, setNewChecked] = useState(checked)

  const onButtonPress = () => {
    setNewChecked(!newChecked)
    multiOption[index].checked = !newChecked
    setMultiOption(multiOption)
  }

  return (
    <Pressable
      disabled={!active}
      style={[
        styles.container,
        style,
        !active ? [styles.disabled, disabledStyle] : styles.container]}
      onPress={() => onButtonPress()}
    >
      <Text style={styles.checkBoxStyle}>{newChecked ? Icon.checkBoxAct : Icon.checkBoxDes}</Text>
      <Image source={{ uri: imageURL }} style={styles.imageStyle} />
      <Text style={newChecked ? [styles.checked, textStyleChecked] : [styles.text, textStyle]}>{placeholder}</Text>
    </Pressable>
  )
}

export default MultiBox
