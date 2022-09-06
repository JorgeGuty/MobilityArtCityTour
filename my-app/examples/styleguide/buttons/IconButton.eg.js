import { StyleSheet, Text, View } from 'react-native'
import { Icon } from '../../../constants/icons'
import React from 'react'
import IconButton from '../../../styleguide/buttons/IconButton/IconButton'

const IconButtonExample = () => {
  return (
    <View>
      <IconButton style={{ width: 100 }} styleIcon={styles.iconStyle} setEditable text='Eliminar'>{Icon.arrow_back}</IconButton>
      <IconButton style={{ width: 100 }} styleIcon={styles.iconStyle} setEditable={false} text='Eliminar'>{Icon.arrow_back}</IconButton>
    </View>
  )
}

export default IconButtonExample

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 22,
    paddingVertical: 22,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container2: {

    backgroundColor: '#F5F5DC',
    paddingHorizontal: 22,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100
  },
  iconStyle: {
    color: '#DADADA'
  },
  widthContainer: {
    width: 297
  },
  containerPlan: {
    paddingHorizontal: 20
  }

})
