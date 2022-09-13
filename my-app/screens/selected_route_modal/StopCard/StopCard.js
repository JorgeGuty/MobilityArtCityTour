import { useEffect, useState, useRef } from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from './StopCard.style'
import { Subtitle1, H7, H1, H2, H3, H4, H5, MACTText, MACTTextBold } from '../../../constants/fonts'
import { Colors } from '../../../constants/colors'
import VisitedLabel from './VisitedLabel/VisitedLabel'
import IconBus from '../../../assets/icons/boton_buseta.svg'
import IconTouch from '../../../assets/icons/touch_app.svg'
import BussesInfoButton from './BusesInfoButton/BussesInfoButton'

const StopCard = ({ stopId, stopName, stopDescripion, index, visited }) => {
  
  const [isVisited, setVisited] = useState(visited)

  const onPressStopCard = () => {
    setVisited(!isVisited)
  }

  return (
    <Pressable style={[styles.mainContainer, !!isVisited ? styles.visitedArrangement : [styles.notVisitedArrangement, styles.shadow]]} onPress={onPressStopCard}>
        <View style={{flex : 3, flexWrap: 'wrap', flexShrink: 1}}>
            <View style={{flex : 3}}>
                <MACTTextBold style={{ fontSize: 20, color: Colors.actBlue2, flexShrink: 1}}>{stopName}</MACTTextBold>
                <MACTText>{stopDescripion}</MACTText>
            </View>
            <VisitedLabel style={{flex : 1}} isVisited={isVisited}></VisitedLabel>
        </View>
        <View style={{flex : 1, flexDirection: 'column', alignItems: 'center'}}>
            <View style={{flex: 2}}>
              <View style={[styles.indexLabel]}>
                <MACTTextBold style={{ fontSize: 20, color: Colors.actBlue2}}>{index}</MACTTextBold>
              </View>
            </View>
            <BussesInfoButton stopId={stopId}></BussesInfoButton>
        </View>
    </Pressable>
  )
}

export default StopCard
