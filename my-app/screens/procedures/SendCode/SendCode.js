import { StyleSendCode } from './SendCode.style'
import { H5, H7 } from '../../../constants/fonts'
import i18n from '../../../configs/i18n.config'
import ScreenProcedureStructure from '../ScreenStructure/ScreenProcedureStructure'
import OptionBox from '../../../styleguide/userInputs/OptionBox/optionBox'
import { useState } from 'react'
import NButton from '../../../styleguide/buttons/NButton/NButton'
import { Constants } from '../../../constants/constants'
/*
  Use example:
  <SendCode />
*/
const SendCode = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(0)

  return (
    <ScreenProcedureStructure titleText={i18n.t('INITIALCONSULT_TITLE1')} navigation={navigation} onPressBackButton={() => navigation.goBack()}>
      <H7 style={StyleSendCode.inputTitle}>{i18n.t('SENDCODE_TEXT')}</H7>
      {Constants.sendCodeOptionsTest
        ? Constants.sendCodeOptionsTest.map((option, index) => {
          return (
            <OptionBox
              active
              key={index}
              index={index}
              setSelectedOption={setSelectedOption}
              selected={selectedOption}
              placeholder={option.value}
              textSelectedStyle={StyleSendCode.text}
              textStyle={StyleSendCode.text}
              style={StyleSendCode.options}
            />
          )
        })
        : null}
      <NButton setEditable style={StyleSendCode.button} onPress={() => navigation.navigate('VerifyCode')}>
        <H5 style={StyleSendCode.buttonText}>{i18n.t('BUTTON_SEND')}</H5>
      </NButton>
    </ScreenProcedureStructure>
  )
}

export default SendCode
