import { View } from 'react-native'
import React, { useState, useEffect } from 'react'
import RatedCard from '../../../styleguide/cards/DeviceModelCard/RatedCard'
import getDeviceModelInformation from '../../../simulations/DeviceModelInformation.sim'

const DeviceModelCardExample = () => {
  const [hookedData, setHookedData] = useState([])
  const getDataFromServer = async () => {
    const data = await getDeviceModelInformation()
    console.log('Timer response received => ', data.imageDefaultSize)
    setHookedData(data)
  }

  useEffect(() => {
    getDataFromServer()
  }, [])

  return (
    <View style={{ width: 500, height: 500 }}>
      <RatedCard
        title={hookedData.model}
        subtitle={hookedData.brand}
        rating={hookedData.rating}
      />
    </View>
  )
}

export default DeviceModelCardExample
