import { View } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import ImageSlider from '../../../styleguide/sliders/ImageSlider/ImageSlider'
import { Colors } from '../../../constants/colors'
import getDeviceImages from '../../../simulations/DeviceImages.sim'

const ImageSliderExample = () => {
  const [hookedData, setHookedData] = useState([])
  const getDataFromServer = async () => {
    const data = await getDeviceImages()
    console.log('Timer response received => ', data.imageDefaultSize)
    setHookedData(data)
  }

  useEffect(() => {
    getDataFromServer()
  }, [])

  return (
    <View>
      <ImageSlider images={hookedData} />
    </View>
  )
}

export default ImageSliderExample
