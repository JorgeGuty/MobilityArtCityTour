import { useState } from 'react'
import { View, Pressable } from 'react-native'
import { H7 } from '../../../../constants/fonts'
import { Colors } from '../../../../constants/colors'
import { stylesSwitchButton } from './SwitchButton.style'
import CustomReactSwitch from './CustomReactSwitch'
import Logo from '../../../../assets/icons/info.svg'
import i18n from '../../../../configs/i18n.config'
/*
  Use example:
    <SwitchButton
        isDisable={false}
        initialState={false}
        titlesState={{enabled:'kölbi asistencia Veterinaria', disabled:'kölbi medica'}}
    />
*/
const SwitchButton = ({ isDisable, initialState, style, titlesState }) => {
  const [activated, setActivated] = useState(initialState)
  const [holdPress, setHoldPress] = useState(false)

  return (
    <View style={isDisable ? [stylesSwitchButton.containerDisable, style] : [stylesSwitchButton.container, style]}>
      <View style={stylesSwitchButton.titleContainer}>
        <H7 style={stylesSwitchButton.title}>
          {titlesState
            ? (activated
                ? titlesState.enabled || ''
                : titlesState.disabled || '')
            : ''}
        </H7>
        <Pressable
          disabled={isDisable}
          onPress={() => {}}
          style={stylesSwitchButton.infoButton}
        >
          <Logo fill={Colors.text2} />
        </Pressable>
      </View>
      <Pressable
        disabled={isDisable}
        style={[
          activated
            ? stylesSwitchButton.buttonActivated
            : stylesSwitchButton.buttonNotActivated,
          holdPress
            ? stylesSwitchButton.buttonContainerShadowHold
            : stylesSwitchButton.buttonContainerShadow,
          stylesSwitchButton.buttonContainer
        ]}
        onPressIn={() => { setHoldPress(true) }}
        onPressOut={() => { setHoldPress(false) }}
      >
        <H7 style={[
          activated ? stylesSwitchButton.titleActivated : stylesSwitchButton.titleNotActivated,
          stylesSwitchButton.buttonText
        ]}
        >
          {activated ? i18n.t('SWITCH_ACTIVATED') : i18n.t('SWITCH_DISABLE')}
        </H7>
        <CustomReactSwitch
          disabled={isDisable}
          switchColor={activated ? Colors.textAlt1 : Colors.text2}
          style={[
            activated ? stylesSwitchButton.buttonActivated : stylesSwitchButton.buttonNotActivated,
            stylesSwitchButton.switchButton
          ]}
          onValueChange={() => setActivated(!activated)}
          value={activated}
        />
      </Pressable>
    </View>
  )
}
export default SwitchButton
