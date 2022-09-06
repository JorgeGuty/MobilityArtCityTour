import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NButtonAlt from '../../../styleguide/buttons/NButtonAlt/NButtonAlt'

const NButtonAltExample = () => {
  return (
    <View>
      <NButtonAlt setEditable style={{ marginBottom: 30, width: 100 }}>Comprar ahora</NButtonAlt>
      <NButtonAlt style={{ marginBottom: 30, width: 100 }}>Comprar ahora</NButtonAlt>
    </View>
  )
}

export default NButtonAltExample
