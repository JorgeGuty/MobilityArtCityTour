import { View, Modal, Pressable } from 'react-native'
import { StyleModalStructure } from './ModalStructure.style'
import IconClose from '../../../../assets/icons/close.svg'

const ModalStructure = ({ children, navigation, titleComponent, styleContainer }) => {
  return (
    <Modal visible transparent animationType='slide'>
      <View style={StyleModalStructure.modal}>
        <Pressable style={StyleModalStructure.touchScreen} onPress={() => navigation.goBack()} />
        <View style={[StyleModalStructure.container, styleContainer]}>
          <View style={StyleModalStructure.titleContainer}>
            {titleComponent}
            <Pressable onPress={() => navigation.goBack()}>
              <IconClose />
            </Pressable>
          </View>
          {children}
        </View>
      </View>
    </Modal>
  )
}

export default ModalStructure
