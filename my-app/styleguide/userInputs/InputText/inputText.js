import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Colors } from '../../../constants/colors'
import { styles } from './inputText.style'

const InputText = ({ style, active, textStyle, textChangedStyle, placeholder, focusStyle, disabledStyle, secured, placeholderColor, onSubmitEditing, keyboardType }) => { // Se cambia el nombre puesto que 'TextInput' ya esta reservado para el nombre de un componente propio de React Native
  const [focus, setFocus] = useState(false)
  const [text, setText] = useState('')

  const HandleOnChangeText = (e) => {
    setText(e)
  }
  return (
    <TextInput
      style={[
        styles.container,
        style,
        active ? (focus ? (text !== '' ? [styles.text, textStyle] : [styles.focus, focusStyle]) : (text !== '' ? [styles.textChanged, textChangedStyle] : null)) : [styles.disabled, disabledStyle]]}
      placeholder={placeholder}
      onPressIn={() => setFocus(true)}
      onEndEditing={() => setFocus(false)}
      editable={active}
      placeholderTextColor={placeholderColor || Colors.text2}
      onChangeText={HandleOnChangeText}
      value={text}
      secureTextEntry={secured}
      keyboardType={keyboardType}
      onSubmitEditing={onSubmitEditing}
    />
  )
}

export default InputText
