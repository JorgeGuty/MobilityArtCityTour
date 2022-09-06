import { Pressable } from 'react-native'
import { Button1 } from '../../../constants/fonts'
import { useState } from 'react'
import { styles } from './IconButtonAlt.style'

const IconButtonAlt = (props) => {
  const [onClicked, setClicked] = useState(false)
  return (
    <Pressable
      {...props}
      style={[
        styles.container,
        props.text ? styles.textIn : null,
        props.style,
        props.setEditable
          ? onClicked
            ? styles.clicked
            : null
          : styles.disable
      ]}
      onPressIn={() => setClicked(true)}
      onPressOut={() => setClicked(false)}
    >
      <Button1 allowFontScaling={false} style={[styles.icon, props.styleIcon]}>
        {props.children}
      </Button1>
      {props.text
        ? (
          <Button1 allowFontScaling={false} style={[styles.text]}>
            {props.text}
          </Button1>
          )
        : null}
    </Pressable>
  )
}
export default IconButtonAlt
