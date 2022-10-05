import { useEffect, useState, useRef } from 'react'
import { Text, View, ScrollView, Dimensions, Animated } from 'react-native'
import { Colors } from '../../constants/colors'
import { MACTTextBold } from '../../constants/fonts'
import StopCard from './StopCard/StopCard'
import { styles } from './SelectedRouteModal.style'

const SelectedRouteModal = ({ route, onPressBusInfo, onPressStopInfo, show }) => { 
  
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
    <Animated.View style={[styles.mainContainer, { transform: [{ translateY: modalVerticalTranslation }] }]}>
      <MACTTextBold style={styles.title}>{route.name}</MACTTextBold>
      <ScrollView
        horizontal={true}
        directionalLockEnabled
        contentInset={{ top: 0, left: 20, bottom: 0, right: 20 }}
        style={styles.stopsScroll}
      >
        {route.stops.map((stop, index) => 
          <StopCard
            key={stop.id}
            onPressBusInfo={onPressBusInfo}
            onPressStopInfo={onPressStopInfo}
            stop={stop}
            stopType={stop.type}
            visited={stop.visited}
            index={index} 
          />
        )}
      </ScrollView>
    </Animated.View>
  )
}

export default SelectedRouteModal
