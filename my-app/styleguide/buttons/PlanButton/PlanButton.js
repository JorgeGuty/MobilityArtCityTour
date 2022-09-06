import { Pressable, View } from 'react-native'
import { H5, Button1 } from '../../../constants/fonts'
import { useState } from 'react'
import { styles } from './PlanButton.style'
import { LinearGradient } from 'expo-linear-gradient'

const PlanButton = ({ style, children, onPress, icon }) => {
  const [onClicked, setClicked] = useState(false)
  return (
    <View style={[styles.container, styles.shadowProp, styles.color]}>
      <LinearGradient
        colors={onClicked ? style.colorsClicked : style.colors}
        style={styles.container}
      >
        <Pressable
          style={[styles.container, style]}
          onPress={onPress}
          onPressIn={() => setClicked(true)}
          onPressOut={() => setClicked(false)}
        >
          <H5 style={styles.buttonText}>{children}</H5>
          <View style={styles.iconContainer}>
            <Button1 style={styles.icon}>{icon}</Button1>
          </View>
        </Pressable>
      </LinearGradient>
    </View>
  )
}
export default PlanButton
