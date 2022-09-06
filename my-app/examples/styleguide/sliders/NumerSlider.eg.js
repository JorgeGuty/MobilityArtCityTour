import { View } from 'react-native'
import React from 'react'
import NumericSlider from '../../../styleguide/sliders/NumericSlider/NumericSlider'
import { Colors } from '../../../constants/colors'

const NumerSliderExample = () => {
  return (
    <View>
      <NumericSlider
        title='Pago inicial del teléfono' min={100000} max={450000} step={10000} typeCurrency='colones'
        style={{ color: Colors.kolbi }} disable
      />
      <NumericSlider
        title='Pago inicial del teléfono' min={10000000000} max={450000000000} step={100000000} typeCurrency='colones'
        disable={false}
      />
      <NumericSlider
        title='Pago inicial del teléfono' min={100000} max={450000} step={10000} typeCurrency='colones'
        style={{ color: Colors.home }} disable={false}
      />
      <NumericSlider
        title='Pago inicial del teléfono' min={100000} max={450000} step={10000} typeCurrency='colones'
        style={{ color: Colors.business }} disable={false}
      />
    </View>
  )
}

export default NumerSliderExample
