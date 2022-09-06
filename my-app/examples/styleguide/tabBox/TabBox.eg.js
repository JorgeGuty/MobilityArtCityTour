import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/colors'
import TabBox from '../../../styleguide/tabBoxs/tabBox/TabBox'

const tabBoxChilds = [
  <View key={1}><Text>1</Text></View>,
  <View key={2}><Text>2</Text></View>,
  <View key={3}><Text>3</Text></View>
]

const tabBoxOnPressAction = () => {
  console.log('Testing Tab Box')
}

const tabBoxOptions = ['4G k', 'Dominio k', 'Conversón k']

const TabBoxExample = () => {
  return (
    <View>
      <TabBox options={tabBoxOptions} style={{ color: Colors.business, borderBottomColor: Colors.business }} onPress={tabBoxOnPressAction}>
        {tabBoxChilds}
      </TabBox>

      <TabBox options={tabBoxOptions} style={{ color: Colors.home, borderBottomColor: Colors.home }} onPress={tabBoxOnPressAction}>
        {tabBoxChilds}
      </TabBox>

      <TabBox options={tabBoxOptions} style={{ color: Colors.kolbi, borderBottomColor: Colors.kolbi }} onPress={tabBoxOnPressAction}>
        {tabBoxChilds}
      </TabBox>

      <TabBox options={tabBoxOptions} onPress={tabBoxOnPressAction}>
        {tabBoxChilds}
      </TabBox>
    </View>
  )
}

export default TabBoxExample
