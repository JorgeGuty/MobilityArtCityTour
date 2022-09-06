import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NButton from '../../../styleguide/buttons/NButton/NButton'

const NButtonExample = () => {
  return (
    <View>
      <NButton style={{ width: 200 }} setEditable>NButton text string</NButton>
    </View>
  )
}

export default NButtonExample

const styles = StyleSheet.create({})
