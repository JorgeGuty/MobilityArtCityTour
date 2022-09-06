import { StyleSheet, View } from 'react-native'
import React from 'react'
import IconButtonAlt from '../../../styleguide/buttons/IconButtonAlt/IconButtonAlt'
import { Icon } from '../../../constants/icons'

const IconButtonAltExample = () => {
  return (
    <View>
      <IconButtonAlt style={{ width: 100 }} setEditable text='Atras'>{Icon.check}</IconButtonAlt>
      <IconButtonAlt style={{ width: 100 }} setEditable={false} text='Atras'>{Icon.check}</IconButtonAlt>
    </View>
  )
}

export default IconButtonAltExample

const styles = StyleSheet.create({})
