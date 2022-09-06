import { View } from 'react-native'
import React from 'react'
import InputText from '../../../styleguide/userInputs/InputText/inputText'

const InputTextExample = () => {
  return (
    <View>
      <InputText style={{ width: 200 }} active={false} placeholder='ingrese su cedula' />
    </View>
  )
}

export default InputTextExample
