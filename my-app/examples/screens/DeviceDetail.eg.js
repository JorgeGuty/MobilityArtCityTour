import { Dimensions, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import LateralMenu from '../../screens/procedures/ScreenStructure/LateralMenu/LateralMenu'
import DeviceDetail from '../../screens/procedures/DeviceDetail/DeviceDetail'
import getDeviceImages from '../../simulations/DeviceImages.sim'
import getDeviceModelInformation from '../../simulations/DeviceModelInformation.sim'

const DeviceDetailExample = () => {
  const [deviceImages, setDeviceImages] = useState([])
  const [deviceModelInformation, setDeviceModelInformation] = useState([])

  const getDataFromServer = async (pVariableSetter, pDataRetriever) => {
    const data = await pDataRetriever()
    console.log('Timer response received => ', data.imageDefaultSize)
    pVariableSetter(data)
  }

  useEffect(() => {
    const operation = new Promise((resolve, reject) => {
      getDataFromServer(setDeviceImages, getDeviceImages)
      getDataFromServer(setDeviceModelInformation, getDeviceModelInformation)
      resolve()
    })
  })

  return (
    <View style={{ width: Dimensions.get('screen').width, height: Dimensions.get('screen').height }}>
      <DeviceDetail deviceInformation={{ model: deviceModelInformation.model, brand: deviceModelInformation.brand, rating: deviceModelInformation.rating, images: deviceImages }} />
    </View>
  )
}

export default DeviceDetailExample
