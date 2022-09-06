import { StyleSheet, View } from 'react-native'
import React from 'react'
import SelectBox from '../../../styleguide/userInputs/SelectBox/selectBox'
import { Colors } from '../../../constants/colors'

const info = [{

  active: true,

  imageURL: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2020/04/hbo-max-logo-1922879.jpg?itok=OAzp33uz',

  checked: true,

  placeholder: 'Hbo Max'

}, {
  active: true,

  imageURL: 'https://graffica.info/wp-content/uploads/2018/11/disneyplus-1200x900.jpg',

  checked: true,

  placeholder: 'Disney +'
}]

const SelectBoxExample = () => {
  return (
    <View>
      <SelectBox childStyle={styles.widthContainer} textStyleColor={Colors.text2} style={styles.widthContainer} info={info} active placeholder='seleccione...' />
      <SelectBox childStyle={styles.widthContainer} textStyleColor={Colors.text2} style={styles.widthContainer} info={info} isMultibox active placeholder='seleccione...' />

    </View>
  )
}

export default SelectBoxExample

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
