import { useEffect, useState, useRef } from 'react'
import { Text, View } from 'react-native'
import { Pressable } from 'react-native'
import { Colors } from '../../../../constants/colors'
import BusIcon from '../../../../assets/icons/boton_buseta.svg'
import { styles } from './BussesInfoButton.style'

const BussesInfoButton = ({ stopId }) => {
  
  const [pressed, setPressed] = useState(false)

  const onPressIn = () => {
    setPressed(true)
  }

  const onPressOut = () => {
    setPressed(false)
  }

  return (
    <Pressable onPressIn={onPressIn} onPressOut={onPressOut} style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
      <BusIcon height={40} width={40} style={!!pressed ? null : styles.shadow}></BusIcon>
    </Pressable>
  )
}

export default BussesInfoButton
