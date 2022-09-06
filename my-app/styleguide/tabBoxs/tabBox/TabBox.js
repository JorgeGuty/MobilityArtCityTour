import { View } from 'react-native'
import TabBoxOption from './TabBoxOption'
import { useState } from 'react'
import { styles } from './TabBox.styles'

const TabBox = ({ options, children, onPress, style, shadowStyle }) => {
  const [currentOption, setCurrentOption] = useState(0)
  const tabBoxScreens = children[currentOption]

  const validateChildrens = () => {
    if (children.constructor !== Array) { throw new Error('Children must be an Array') } else if (children.length > options.length) {
      throw new Error(
        'The length of tabBoxChilds is greater than the length of tabBoxOptions.'
      )
    } else if (children.length < options.length) {
      console.warn(
        'The length of tabBoxOptions is greater than the length of tabBoxChilds.'
      )
    } else return true
  }

  return (
    <View style={styles.tabBoxScreen}>
      <View style={styles.tabBoxContainer}>
        <View style={[styles.card, styles.shadowProp, shadowStyle]}>
          {validateChildrens()
            ? options.map((option, i) => {
              return (
                <TabBoxOption
                  key={i}
                  index={i}
                  currentOption={currentOption}
                  setCurrentOption={setCurrentOption}
                  value={option}
                  onPress={onPress}
                  style={style}
                />
              )
            })
            : null}
        </View>
      </View>
      {tabBoxScreens}
    </View>
  )
}

export default TabBox
