import { useEffect, useState, useRef } from 'react'
import { Text, View, ScrollView, Dimensions } from 'react-native'
import { Colors } from '../../constants/colors'
import { MACTTextBold } from '../../constants/fonts'
import StopCard from './StopCard/StopCard'
import { styles } from './SelectedRouteModal.style'

const SelectedRouteModal = ({ route, setRoute, onPressBusInfo, onPressStopInfo }) => (
  <View style={styles.mainContainer}>
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
          stopId={stop.id}
          stopName={stop.name}
          stopDescription={stop.description}
          visited={stop.visited}
          index={index} 
        />
      )}
    </ScrollView>
  </View>

)

export default SelectedRouteModal
