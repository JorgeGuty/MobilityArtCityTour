import { Pressable, View } from 'react-native'
import { Button1, Subtitle2 } from '../../../constants/fonts'
import { styles } from './TabBoxOption.styles'

const TabBoxOption = ({
  index,
  currentOption,
  setCurrentOption,
  value,
  onPress,
  style
}) => {
  return (
    <View>
      {index === currentOption
        ? (
          <Pressable
            style={[styles.tab, styles.selectedTab, style]}
            onPress={() => {
              setCurrentOption(index)
            }}
          >
            <Button1 style={[styles.selectedText, style]}>{value}</Button1>
          </Pressable>
          )
        : (
          <Pressable
            style={[styles.tab, styles.notSelectTab]}
            onPress={() => {
              setCurrentOption(index)
              if (onPress) {
                onPress()
              }
            }}
          >
            <Subtitle2 style={styles.notSelectText}>{value}</Subtitle2>
          </Pressable>
          )}
    </View>
  )
}

export default TabBoxOption
