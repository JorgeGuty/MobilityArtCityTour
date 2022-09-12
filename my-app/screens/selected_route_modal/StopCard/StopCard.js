import { useEffect, useState, useRef } from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from './StopCard.style'
import { Subtitle1, H7, H1, H2, H3, H4, H5, MACTText, MACTTextBold } from '../../../constants/fonts'
import { Colors } from '../../../constants/colors'
import VisitedLabel from './VisitedLabel/VisitedLabel'
import IconBus from '../../../assets/icons/Botón buseta.svg'
import IconTouch from '../../../assets/icons/touch_app.svg'

const StopCard = ({ stopName, stopDescripion, index, visited, onPressStopCard }) => {
  

  return (
    <Pressable style={[styles.mainContainer, styles.shadow]} onPress={onPressStopCard}>
        <View style={{flex : 3}}>
            <View style={{flex : 3}}>
                <MACTTextBold style={{ fontSize: 20, color: Colors.actBlue2}}>{stopName}</MACTTextBold>
                <MACTText>{stopDescripion}</MACTText>
            </View>
            <VisitedLabel style={{flex : 1}} isVisited={visited}></VisitedLabel>
        </View>
        <View style={{flex : 1, flexDirection: 'column', alignItems: 'center'}}>
            <View style={styles.indexLabel}>
              <MACTTextBold style={{ fontSize: 20, color: Colors.actBlue2}}>{index}</MACTTextBold>
            </View>
        </View>
    </Pressable>
  )
}

export default StopCard
