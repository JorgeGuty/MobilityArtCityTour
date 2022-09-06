import { useState } from 'react'
import { Pressable, View } from 'react-native'
import { H7, Caption2, Subtitle2 } from '../../../constants/fonts'
import { styles } from './CardButton.style'

// TODO: Correct the card button so it can be implemented by its own
// The Card Button is dependent on the Card Button Box
// So the component by its own does not work

const CardButton = ({
  children, holdShadow = true, flex = true, disable = false, currentOption, setCurrentOption, index, style
}) => {
  const [isDisabled] = useState(disable)
  const [isHolded, setHolded] = useState(false)

  return (
    <>
      {children.length === 1
        ? (
          <Pressable
            disabled={disable}
            style={[
              styles.default,
              styles.defaultSingleLine,
              flex ? styles.optionalFlex : null,
              index === currentOption ? null : (isHolded ? (holdShadow ? styles.holdedButton : null) : null),
              isDisabled
                ? styles.disabledButton
                : index !== currentOption ? styles.default : styles.selectedButton,
              style
            ]}
            onPressIn={() => setHolded(true)}
            onPressOut={() => setHolded(false)}
            onPress={() => {
              setCurrentOption(index)
            }}
          >
            <H7
              style={[
                styles.textAlign,
                isHolded ? styles.defaultButtonText : null,
                isDisabled
                  ? styles.disabledButtonText
                  : index !== currentOption ? styles.defaultButtonText : styles.selectedButtonText
              ]}
            >
              {children[0]}
            </H7>
          </Pressable>
          )
        : (
          <Pressable
            disabled={disable}
            style={[
              styles.default,
              styles.defaultDoubleLine,
              flex ? null : styles.optionalWidth,
              flex ? styles.optionalFlex : null,
              index === currentOption ? null : (isHolded ? (holdShadow ? styles.holdedButton : null) : null),
              isDisabled
                ? styles.disabledButton
                : index !== currentOption ? styles.default : styles.selectedButton,
              style
            ]}
            onPressIn={() => setHolded(true)}
            onPressOut={() => setHolded(false)}
            onPress={() => {
              setCurrentOption(index)
            }}
          >
            <View>
              <Subtitle2
                style={[
                  styles.textAlign,
                  styles.textTopLine,
                  isHolded ? styles.defaultButtonText : null,
                  isDisabled
                    ? styles.disabledButtonText
                    : index !== currentOption ? styles.defaultButtonText : styles.selectedButtonText
                ]}
              >
                {children[0]}
              </Subtitle2>
              <Caption2
                style={[
                  styles.textAlign,
                  styles.textDoubleLine,
                  isHolded ? styles.defaultButtonText : null,
                  isDisabled
                    ? styles.disabledButtonText
                    : index !== currentOption ? styles.defaultButtonText : styles.selectedButtonText
                ]}
              >
                {children[1]}
              </Caption2>
            </View>
          </Pressable>
          )}
    </>
  )
}

export default CardButton
