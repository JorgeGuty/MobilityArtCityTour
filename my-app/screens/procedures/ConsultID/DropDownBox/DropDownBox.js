import { useState, useRef } from 'react'
import { View, FlatList, Pressable, Text, Modal, StatusBar, Platform } from 'react-native'
import { StyleDropDown } from './DropDownBox.style'
import RadioButtonChecked from '../../../../assets/icons/radioButtonChecked.svg'
import RadioButtonUnchecked from '../../../../assets/icons/radioButtonUnchecked.svg'
import { Icon } from '../../../../constants/icons'
import { H4, H7 } from '../../../../constants/fonts'

const DropDownBox = ({ options, style }) => {
  const [showOptions, setShowOptions] = useState(false)
  const selectedItem = useRef(options[0].text)
  const buttonLayout = useRef()
  const optionsTopMeasure = useRef()
  const optionsLeftMeasure = useRef()
  const optionsWidth = useRef()

  const itemRender = ({ item }) => {
    return (
      <Pressable
        style={StyleDropDown.item}
        onPress={() => {
          selectedItem.current = item.text
          setShowOptions(false)
        }}
      >
        {selectedItem.current === item.text
          ? <RadioButtonChecked style={StyleDropDown.itemRadioButton} />
          : <RadioButtonUnchecked style={StyleDropDown.itemRadioButton} />}
        <H7
          style={[
            StyleDropDown.itemText,
            selectedItem.current === item.text
              ? StyleDropDown.itemCheck
              : StyleDropDown.itemUncheck
          ]}
        >
          {item.text}
        </H7>
      </Pressable>
    )
  }

  const optionsRender = () => {
    return (
      <Modal visible transparent animationType='none'>
        <Pressable
          style={StyleDropDown.modal}
          onPress={() => setShowOptions(false)}
        >
          <View
            style={
              [StyleDropDown.options,
                {
                  top: optionsTopMeasure.current,
                  width: optionsWidth.current,
                  left: optionsLeftMeasure.current
                }]
            }
          >
            <FlatList
              data={options}
              renderItem={itemRender}
              keyExtractor={(_item, index) => 'key' + index}
            />
          </View>
        </Pressable>
      </Modal>
    )
  }

  const setDimensions = () => {
    buttonLayout.current.measure((_fx, _fy, w, h, px, py) => {
      optionsTopMeasure.current = py + h + (Platform.OS === 'ios' ? 20 : -StatusBar.currentHeight) // 20 is the standard ios status bar size
      optionsWidth.current = w - 5 // Size ajust, options is smaller than main box
      optionsLeftMeasure.current = px + 2.5 // Position ajust because the width size change in 10
    })
  }

  return (
    <View
      style={[StyleDropDown.container, style]}
      ref={buttonLayout}
      onLayout={setDimensions}
      onPress
    >
      <H4 style={StyleDropDown.mainText}>{selectedItem.current}</H4>
      <Pressable
        onPress={(e) => {
          setShowOptions(!showOptions)
        }}
      >
        <Text style={StyleDropDown.button}>
          {showOptions ? Icon.expandLess : Icon.expandMore}
        </Text>
      </Pressable>
      {showOptions ? optionsRender() : null}
    </View>
  )
}

export default DropDownBox
