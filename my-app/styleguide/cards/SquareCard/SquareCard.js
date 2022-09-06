/* -------------------------------------------- */
/*     autor: Gabriel Arnáez                    */
/*                                              */
/*  ejemplo de usos: pantala de home            */
/* -------------------------------------------- */

import { Pressable, Animated, View } from 'react-native'
import { styles } from './SquareCard.style.js'
import TouchIcon from '../../../assets/images/TouchIcon'
import { useEffect, useRef, useState } from 'react'
import { H5, Subtitle2 } from '../../../constants/fonts'

const SquareCard = ({ icon, nameSection, sectionDescription, containerStyle, iconStyle, sectionStyle, descriptionStyle, focusStyle, fx, animated }) => {
  const [focus, setFocus] = useState(false)
  const iconOpacity = useRef(new Animated.Value(1)).current

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(
        iconOpacity,
        {
          toValue: 0.1,
          duration: 500,
          useNativeDriver: true
        }
      ),
      Animated.delay(1000),
      Animated.timing(
        iconOpacity,
        {
          toValue: 1,
          duration: 500,
          useNativeDriver: true
        }
      ),
      Animated.delay(1000)
    ]).start(() => startAnimation())
  }

  useEffect(() => {
    startAnimation()
  }, [iconOpacity])

  return (
    <Pressable
      style={[styles.container, containerStyle, focus ? [styles.focus, focusStyle] : null]}
      onPress={fx}
      onPressIn={() => setFocus(true)}
      onPressOut={() => setFocus(false)}
    >
      <View style={iconStyle}>{icon}</View>
      <H5 style={[styles.section, sectionStyle]}>{nameSection}</H5>
      <Subtitle2 style={[styles.description, descriptionStyle]}>{sectionDescription}</Subtitle2>
      {
        animated
          ? <Animated.View style={[styles.touchIcon, { opacity: iconOpacity }]}>
            <TouchIcon />
            </Animated.View>
          : null
      }

    </Pressable>
  )
}

export default SquareCard
