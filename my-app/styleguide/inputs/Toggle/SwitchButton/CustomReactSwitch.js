import { useEffect, useRef } from 'react'
import { Pressable, Animated } from 'react-native'
import { stylesSwitchButton } from './SwitchButton.style'

const CustomReactSwitch = ({ style, disabled, switchColor, onValueChange, value }) => {
  const activatedState = useRef(value)
  const ballPositionX = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(
      ballPositionX,
      {
        toValue: activatedState.current ? 8 : 0,
        duration: 200,
        useNativeDriver: true
      }
    ).start()
  }, [activatedState.current])

  return (
    <Pressable
      style={[stylesSwitchButton.switchCustomContainer, style, { borderColor: switchColor }]}
      onPress={() => {
        activatedState.current = !activatedState.current
        onValueChange()
      }}
      disabled={disabled}
    >
      <Animated.View
        style={[{ transform: [{ translateX: ballPositionX }], backgroundColor: switchColor },
          stylesSwitchButton.switchCustomBall
        ]}
      />
    </Pressable>
  )
}
export default CustomReactSwitch
