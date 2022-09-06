import { Pressable, View } from 'react-native'
import { useState } from 'react'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { styles } from './NumericSlider.styles'
import { H5, H7 } from '../../../constants/fonts'
import { Colors } from '../../../constants/colors'
import { Currency } from '../../../constants/currency'

const NumericSlider = ({
  title,
  min,
  max,
  step,
  typeCurrency,
  style = { color: Colors.people },
  disable
}) => {
  const [sliderOneChanging, setSliderOneChanging] = useState(true)
  const [sliderOneValue, setSliderOneValue] = useState([min])
  const sliderOneValuesChangeStart = () => setSliderOneChanging(true)
  const sliderOneValuesChange = (values) => setSliderOneValue(values)
  const sliderOneValuesChangeFinish = () => setSliderOneChanging(false)

  const [pressButtonPlus, setPressButtonPlus] = useState(false)
  const [pressButtonMinus, setPressButtonMinus] = useState(false)

  function setValueSlider (newValue) {
    if (newValue >= min && newValue <= max) {
      setSliderOneValue([newValue])
    }
  }

  function getCurrency (value, type) {
    let currency = ''
    value = value.split('').reverse().join('')
    if (type === Currency.colones.name) {
      for (let i = 0; i < value.length; i++) {
        if (i % 3 === 0) {
          currency += ' ' + value[i]
        } else {
          currency += value[i]
        }
      }
      currency += Currency.colones.sign
    }
    return currency.split('').reverse().join('')
  }

  return (
    <View style={styles.container}>
      <View style={disable ? styles.disableColor : styles.enable}>
        <H7 style={styles.title}>{title}</H7>
        <H5 style={[sliderOneChanging, styles.price, style]}>
          {getCurrency(sliderOneValue[0].toString(), typeCurrency)}
        </H5>
      </View>

      <View style={[styles.containerSlider]}>
        <Pressable
          style={[
            styles.button,
            styles.shadowProp,
            disable
              ? styles.disableComponent
              : pressButtonMinus
                ? styles.pressButton
                : styles.enable
          ]}
          onPressIn={() => setPressButtonMinus(true)}
          onPressOut={() => setPressButtonMinus(false)}
          onPress={() => {
            if (!disable) {
              setValueSlider(sliderOneValue[0] - step)
            }
          }}
        >
          <H7
            style={[
              styles.colorIcon,
              disable ? styles.disableColor : styles.enable
            ]}
          >-
          </H7>
        </Pressable>
        <View
          style={[
            styles.slider,
            styles.shadowProp,
            disable ? styles.disableComponent : styles.enable
          ]}
        >
          <MultiSlider
            values={sliderOneValue}
            sliderLength={styles.sliderLen.height}
            onValuesChangeStart={sliderOneValuesChangeStart}
            onValuesChange={sliderOneValuesChange}
            onValuesChangeFinish={sliderOneValuesChangeFinish}
            min={min}
            max={max}
            step={step}
            selectedStyle={styles.barSlider}
            unselectedStyle={styles.barSlider}
            enabledOne={!disable}
            customMarker={() => (
              <View
                style={[
                  styles.circle,
                  styles.colorMarker,
                  disable ? styles.disableColor : styles.enable,
                  { backgroundColor: style.color }
                ]}
              >
                <Pressable />
              </View>
            )}
          />
        </View>
        <Pressable
          style={[
            styles.button,
            styles.shadowProp,
            disable
              ? styles.disableComponent
              : pressButtonPlus
                ? styles.pressButton
                : styles.enable
          ]}
          onPressIn={() => setPressButtonPlus(true)}
          onPressOut={() => setPressButtonPlus(false)}
          onPress={() => {
            if (!disable) {
              setValueSlider(sliderOneValue[0] + step)
            }
          }}
        >
          <H7
            style={[
              styles.colorIcon,
              disable ? styles.disableColor : styles.enable
            ]}
          >
            +
          </H7>
        </Pressable>
      </View>
    </View>
  )
}

export default NumericSlider
