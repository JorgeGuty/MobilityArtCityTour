import { useEffect, useState, useRef } from 'react'
import { Pressable, Text, View } from 'react-native'
import { MACTText } from '../../../../constants/fonts'
import { styles } from './VisitedLabel.style'

const VisitedLabel = ({ isVisited }) => {

  return (
    <View style={[{borderRadius: 18, width: '50%', alignItems: 'center'}, !!isVisited ? styles.visitedArrangement : styles.notVisitedArrangement]}>
      <MACTText>{!!isVisited ? "Visitado" : "Sin visitar"}</MACTText>
    </View>
  )
}

export default VisitedLabel
