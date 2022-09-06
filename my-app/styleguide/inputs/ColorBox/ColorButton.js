import { Pressable, View } from 'react-native'
import { stylesColorBox } from './ColorBox.style'
import { Subtitle2, Button1 } from '../../../constants/fonts'

const ColorButton = ({ colorCode, colorName, isSelected, isDisabled, setButtonSelected }) => {
  return (
    <View style={isDisabled ? stylesColorBox.containerButtonDisabled : stylesColorBox.containerButton}>
      <Pressable
        style={[
          { backgroundColor: colorCode },
          stylesColorBox.button]}
        disabled={isDisabled}
        onPress={() => setButtonSelected(colorName)}
      />
      {isSelected && <View style={stylesColorBox.borderButtonSelected} />}
      {isSelected
        ? <Button1 style={stylesColorBox.text}>{colorName}</Button1>
        : <Subtitle2 style={stylesColorBox.text}>{colorName}</Subtitle2>}
    </View>
  )
}

export default ColorButton
