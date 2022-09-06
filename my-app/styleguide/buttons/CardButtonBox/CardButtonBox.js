import { View } from 'react-native'
import CardButton from '../CardButton/CardButton'
import { styles } from './CardButtonBox.style'
import { useState } from 'react'
const CardButtonBox = ({ buttons }) => {
  const [currentOption, setCurrentOption] = useState(-1)
  return (
    <View style={styles.container}>
      {buttons.map((button, i) => {
        return (
          <CardButton
            flex={button.flex}
            disable={button.disabled}
            key={i}
            index={i}
            currentOption={currentOption}
            setCurrentOption={setCurrentOption}
            style={button.style}
          >
            {button.ext}
          </CardButton>
        )
      })}
    </View>
  )
}
export default CardButtonBox
