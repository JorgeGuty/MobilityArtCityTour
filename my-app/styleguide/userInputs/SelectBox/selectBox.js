import React, { useState } from 'react'
import { Pressable, TextInput, View, Text, ScrollView } from 'react-native'
import { Colors } from '../../../constants/colors'
import { Icon } from '../../../constants/icons'
import MultiBox from '../Multibox/multiBox'
import OptionBox from '../OptionBox/optionBox'
import { styles } from './selectBox.style'

const SelectBox = ({ info, buttonStyle, disabledStyle, focusedStyle, style, textStyle, childDisabledStyle, textStyleColor, childStyle, childTextStyle, childTextCheckedStyle, arrowIconColor, active, placeholder, isMultibox }) => {
  const [focus, setFocus] = useState(false)
  const [showOption, setShowOption] = useState(false)
  const [selectedOption, setSelectedOption] = useState(-1)
  const [multiOption, setMultiOption] = useState(info)

  const showMoreOptions = () => {
    setFocus(!focus)
    setShowOption(!showOption)
  }

  return (
    <View>
      <Pressable
        style={[
          styles.container,
          style,
          buttonStyle,
          !active ? [styles.disabled, disabledStyle] : (focus ? [styles.focused, focusedStyle] : [styles.container, style])]}
        disabled={!active}
        onPressIn={() => showMoreOptions()}
      >
        <TextInput editable={false} styles={[styles.textInput, textStyle]} placeholder={placeholder} placeholderTextColor={textStyleColor || Colors.text2} />
        <Text style={[styles.arrow, arrowIconColor]}>{focus ? Icon.expandLess : Icon.expandMore}</Text>
      </Pressable>
      {
        showOption &&
          (<ScrollView style={styles.dropDownScroll}>
            {
              info.map((element, index) => {
                return (
                  <View style={styles.dropdown}>
                    {
                      isMultibox
                        ? <MultiBox
                            key={index}
                            index={index}
                            active={element.active}
                            multiOption={multiOption}
                            setMultiOption={setMultiOption}
                            placeholder={element.placeholder}
                            checked={element.checked}
                            imageURL={element.imageURL}
                            textStyle={childTextStyle}
                            style={childStyle}
                            textStyleChecked={childTextCheckedStyle}
                            disabledStyle={childDisabledStyle}
                          />
                        : <OptionBox
                            key={index}
                            index={index}
                            setSelectedOption={() => setSelectedOption(index)}
                            placeholder={element.placeholder}
                            active={element.active}
                            selected={selectedOption}
                            style={childStyle}
                            disabledStyle={childDisabledStyle}
                            textSelectedStyle={childTextCheckedStyle}
                            textStyle={childTextStyle}
                          />
                    }
                  </View>
                )
              }
              )
              }
          </ScrollView>)
        }
    </View>
  )
}

export default SelectBox
