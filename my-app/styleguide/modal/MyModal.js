import { useEffect, useState, useRef } from 'react'
import { ScrollView,View, Animated, Modal, Text, Pressable, Image, TouchableOpacity, Dimensions } from 'react-native'
import { styles } from './MyModal.style'
import { H5, MACTTextBold, Subtitle1 } from '../../constants/fonts'
import { Colors } from '../../constants/colors'
import CancelX from '../../assets/icons/cancel_x_azul.svg'

const MyModal = ({ showModal, setShowModal, modalHeight, yTranslationAmount, header, body, startYTranstalion }) => {

  const yTranslation = useRef(new Animated.Value(startYTranstalion)).current
  const [scrollEnabled, setScrollEnabled] = useState(true)
  const [xPressed, setXPressed] = useState(false)

  useEffect(() => {
    !!showModal === true ? bringModal(yTranslationAmount) : hideModal()
  }, [showModal])

  useEffect(() => {
    if (!!showModal) bringModal(yTranslationAmount)
  },[yTranslationAmount])
  
  const hideModal = () => {
    Animated.sequence([
      Animated.timing(
        yTranslation,
        {
          toValue: Dimensions.get('screen').height,
          duration: 700,
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
          duration: 700,
          useNativeDriver: true
        }
      )
    ]).start()
  }

  

  const onPressIn = () => {
    setXPressed(true)
  }

  const onPressOut = () => {
    setXPressed(false)
  }

  return (
      <Animated.View style={[styles.mainContainer, { transform: [{ translateY: yTranslation }], height: modalHeight}]}>
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
                  onPressIn={onPressIn}
                  onPressOut={onPressOut}
                >
                  <CancelX  style={!!xPressed ? null : styles.shadow} />
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
