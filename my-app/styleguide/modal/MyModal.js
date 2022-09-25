import { useEffect, useState, useRef } from 'react'
import { View, Animated, Modal, Text, Pressable, Image, TouchableOpacity, Dimensions } from 'react-native'
import { styles } from './MyModal.style'
import { H5, MACTTextBold, Subtitle1 } from '../../constants/fonts'
import { Colors } from '../../constants/colors'
import CancelX from '../../assets/icons/cancel_x_azul.svg'

const MyModal = ({ showModal, setShowModal, modalHeight, header, body }) => {

  const yTranslation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    !!showModal ? bringModal(modalHeight) : hideModal()
  }, [showModal])

  useEffect(() => {
    bringModal(modalHeight)
  },[modalHeight])
  
  const hideModal = () => {
    Animated.sequence([
      Animated.timing(
        yTranslation,
        {
          toValue: Dimensions.get('screen').height,
          duration: 1000,
          useNativeDriver: true
        }
      )
    ]).start()
  }

  const bringModal = (modalHeight) => {
    Animated.sequence([
      Animated.timing(
        yTranslation,
        {
          toValue: modalHeight,
          duration: 1000,
          useNativeDriver: true
        }
      )
    ]).start()
  }

  return (
    <Animated.View style={[styles.mainContainer, { transform: [{ translateY: yTranslation }]}]}>
        <View style={{flexDirection:'column', flex:1}}>
            {/* Header*/}
            <View style={{flexDirection:'row'}}>
              {/* Header content container */}
              <View style={{ flex:1 }}>
                {/** Header content */}
                {header}
              </View>
              <Pressable 
                style={styles.cancelX}
                onPress={ () => setShowModal(false) }
              >
                <CancelX/>
              </Pressable>
            </View>
            {/* Body container */}
            <View style={{flex:1}}>
              {/** Body */}
              {body}
            </View>
          </View>
    </Animated.View>
  )
}

export default MyModal
