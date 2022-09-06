import { View } from 'react-native'
import React from 'react'
import SwitchButton from '../../../styleguide/inputs/Toggle/SwitchButton/SwitchButton'

const SwitchButtonExample = () => {
  return (
    <View>
      <SwitchButton
        titlesState={{ enabled: 'kölbi test enabled', disabled: 'kölbi test disabled' }}
      />
      <SwitchButton
        initialState
        titlesState={{ enabled: 'kölbi test enabled', disabled: 'kölbi test disabled' }}
      />
    </View>
  )
}

export default SwitchButtonExample
