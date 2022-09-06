import { Pressable } from 'react-native'
import { Button1 } from '../../../constants/fonts'
import { useState } from 'react'
import { styles } from './NButtonAlt.style'

const NButtonAlt = ({ setEditable, style, children, onPress }) => {
  const [onClicked, setClicked] = useState(false)
  return (
    <Pressable
      style={[
        styles.container,
        style,
        setEditable ? (onClicked ? styles.clicked : null) : styles.disable
      ]}
      onPressIn={() => setClicked(true)}
      onPressOut={() => setClicked(false)}
      onPress={onPress}
    >
      <Button1 style={styles.button}>{children}</Button1>
    </Pressable>
  )
}
export default NButtonAlt
