import { useState } from 'react'
import { View } from 'react-native'
import { StyleSpeedDetail } from './SpeedDetail.style'
import i18n from '../../../configs/i18n.config'
import { Constants } from '../../../constants/constants'
import { H5, Subtitle1, H3 } from '../../../constants/fonts'
import ScreenProcedureStructure from '../ScreenStructure/ScreenProcedureStructure'
import NButton from '../../../styleguide/buttons/NButton/NButton'

const SpeedDetail = ({ navigation }) => {
  const [newSpeedData, setNewSpeedData] = useState()
  const textAmount = `${newSpeedData ? newSpeedData.amount : Constants.speedDetailDefaultAmount} IVAI`

  const renderButtonContinue = () => {
    return (
      <View style={StyleSpeedDetail.buttonContinueContainer}>
        <NButton setEditable onPress={() => navigation.navigate('ConfirmChangeModal')}>
          <H5 style={StyleSpeedDetail.buttonText}>{i18n.t('SPEEDDETAIL_BUTTONCONTINUE')}</H5>
        </NButton>
      </View>
    )
  }

  return (
    <ScreenProcedureStructure titleText={i18n.t('SPEEDDETAIL_TITLE')} navigation={navigation} onPressBackButton={() => navigation.goBack()}>
      <View style={StyleSpeedDetail.container}>
        <View style={StyleSpeedDetail.userServiceContainer}>
          <View style={StyleSpeedDetail.userServiceDataContainer}>
            <Subtitle1 style={StyleSpeedDetail.userDataTitle}>{i18n.t('SPEEDDETAIL_SERVICENUMBER')}</Subtitle1>
            <H5 style={StyleSpeedDetail.userData}>{Constants.speedDetailUserTest.number}</H5>
          </View>
          <View style={StyleSpeedDetail.userServiceDataContainer}>
            <Subtitle1 style={StyleSpeedDetail.userDataTitle}>{i18n.t('SPEEDDETAIL_ACTUALSPEED')}</Subtitle1>
            <H5 style={StyleSpeedDetail.userData}>{Constants.speedDetailUserTest.speed}</H5>
          </View>
        </View>
        <View style={StyleSpeedDetail.newSpeedContainer}>
          <View style={StyleSpeedDetail.newSpeedDataContainer}>
            <Subtitle1 style={StyleSpeedDetail.userDataTitle}>{i18n.t('SPEEDDETAIL_NEWSPEED')}</Subtitle1>
            <H5 style={StyleSpeedDetail.userData}>{newSpeedData ? newSpeedData.speed : null}</H5>
          </View>
          <NButton setEditable onPress={() => navigation.navigate('SpeedSelectorModal', { setNewSpeedData, selected: newSpeedData ? newSpeedData.speed : null })}>
            <H5 style={StyleSpeedDetail.buttonText}>{i18n.t('SPEEDDETAIL_BUTTON')}</H5>
          </NButton>
        </View>
        <View style={StyleSpeedDetail.newSpeedAmountContainer}>
          <Subtitle1 style={StyleSpeedDetail.userDataTitle}>{i18n.t('SPEEDDETAIL_AMOUNT')}</Subtitle1>
          <H3 style={StyleSpeedDetail.newSpeedAmountData}>{textAmount}</H3>
        </View>
        {newSpeedData ? renderButtonContinue() : null}
      </View>
    </ScreenProcedureStructure>
  )
}

export default SpeedDetail
