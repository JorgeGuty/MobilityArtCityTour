import { useEffect, useRef } from "react"
import { Animated, Dimensions, View } from "react-native"
import { styles } from "./InterestPointsModal.style"


const InterestPointsModal = ({show}) => {

    const modalVerticalTranslation = useRef(new Animated.Value(0)).current

    const hideModal = () => {
        Animated.sequence([
          Animated.timing(
            modalVerticalTranslation,
            {
              toValue: Dimensions.get('screen').height,
              duration: 1000,
              useNativeDriver: true
            }
          )
        ]).start()
      }
    
      const showModal = () => {
        Animated.sequence([
          Animated.timing(
            modalVerticalTranslation,
            {
              toValue: 0,
              duration: 1000,
              useNativeDriver: true
            }
          )
        ]).start()
      }
    
    
      useEffect(() => {
        !!show ? showModal() : hideModal()
      },[show])

    return (

        <Animated.View style={[styles.modal, { transform: [{ translateY: modalVerticalTranslation }] }]}>
            
        </Animated.View>
    )

}

export default InterestPointsModal