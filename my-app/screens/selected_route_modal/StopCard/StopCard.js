import { useEffect, useState, useRef } from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from './StopCard.style'
import { Subtitle1, H7, H1, H2, H3, H4, H5, MACTText, MACTTextBold } from '../../../constants/fonts'
import { Colors } from '../../../constants/colors'
import VisitedLabel from './VisitedLabel/VisitedLabel'
import BussesInfoButton from './BusesInfoButton/BussesInfoButton'
import IndexedMarker from '../../../styleguide/markers/IndexedMarker/IndexedMarker'

const StopCard = ({ stopId, stopName, stopDescription, index, visited, onPressBusInfo, onPressStopInfo }) => {
  

  return (
    <Pressable 
      style={[styles.mainContainer, !!visited ? styles.visitedArrangement : [styles.notVisitedArrangement, styles.shadow]]} 
      onPress={() => {
        onPressStopInfo(index)
      }}
    >
        <View style={{flex : 3, flexWrap: 'wrap', flexShrink: 1}}>
            <View style={{flex : 3}}>
                <MACTTextBold style={{ fontSize: 20, color: Colors.actBlue2, flexShrink: 1}}>{stopName}</MACTTextBold>
                <MACTText>{stopDescription}</MACTText>
            </View>
            <VisitedLabel style={{flex : 1}} isVisited={visited}></VisitedLabel>
        </View>
        <View style={{flex : 1, flexDirection: 'column', alignItems: 'center', justifyContent:'center', alignItems:'center'}}>
            <View style={{flex: 2}}>
              <IndexedMarker index={index+1}></IndexedMarker>
            </View>
            <BussesInfoButton stopId={stopId} onPress={() => onPressBusInfo(index)}></BussesInfoButton>
        </View>
    </Pressable>
  )
}

export default StopCard
