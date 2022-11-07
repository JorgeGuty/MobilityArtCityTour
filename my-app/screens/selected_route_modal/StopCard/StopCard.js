import { useEffect, useState, useRef } from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from './StopCard.style'
import { Subtitle1, H7, H1, H2, H3, H4, H5, MACTText, MACTTextBold } from '../../../constants/fonts'
import { Colors } from '../../../constants/colors'
import VisitedLabel from './VisitedLabel/VisitedLabel'
import BussesInfoButton from './BusesInfoButton/BussesInfoButton'
import IndexedMarker from '../../../styleguide/markers/IndexedMarker/IndexedMarker'

const StopCard = ({ stop, stopType, index, visited, onPressBusInfo, onPressStopInfo, accessibilitySettings }) => {
  return (
    <Pressable 
      style={[styles.mainContainer, !!visited ? styles.visitedArrangement : [styles.notVisitedArrangement, styles.shadow]]} 
      onPress={() => {
        onPressStopInfo(stop)
      }}
    >
        <View style={{flex : 3, flexWrap: 'wrap', flexShrink: 1}}>
            <View style={{flex : 3}}>
                <MACTTextBold style={{ fontSize: accessibilitySettings.fontAmplifier +  20 , color: Colors.actBlue2, flexShrink: 1}}>{stop.name}</MACTTextBold>
                <MACTText style={{ fontSize: accessibilitySettings.fontAmplifier +  16 , }}>{stopType}</MACTText>
            </View>
            <VisitedLabel style={{flex : 1}} isVisited={visited}></VisitedLabel>
        </View>
        <View style={{flex : 1, flexDirection: 'column', alignItems: 'center', justifyContent:'center', alignItems:'center'}}>
            <View style={{flex: 2}}>
              <IndexedMarker index={index+1}></IndexedMarker>
            </View>
            <BussesInfoButton stop={stop} onPress={() => onPressBusInfo(stop)}></BussesInfoButton>
        </View>
    </Pressable>
  )
}

export default StopCard
