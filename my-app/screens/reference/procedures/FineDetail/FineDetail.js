import { useState, useEffect } from 'react'
import { View } from 'react-native'
import { StyleFineDetail } from './FineDetail.style'
import { H5, H3, Subtitle1 } from '../../../constants/fonts'
import i18n from '../../../configs/i18n.config'
import ScreenProcedureStructure from '../ScreenStructure/ScreenProcedureStructure'
import IconReceipt from '../../../assets/icons/receipt.svg'
import NButton from '../../../styleguide/buttons/NButton/NButton'

// Simulation Files
import getServerData from '../../../simulations/FineDetail.sim'

const FineDetail = ({ navigation }) => {
  const [fineData, setFineData] = useState()

  const getDataFromServer = async () => {
    const data = await getServerData()
    setFineData(data)
  }
  useEffect(() => {
    getDataFromServer()
  }, [])

  return (
    <ScreenProcedureStructure titleText={i18n.t('FINEDETAIL_TITLE')} navigation={navigation} onPressBackButton={() => navigation.goBack()}>
      <View style={StyleFineDetail.container}>
        <View style={StyleFineDetail.title}>
          <IconReceipt />
          <H5 style={StyleFineDetail.titleText}>{i18n.t('FINEDETAIL_SUBTITLE')}</H5>
        </View>
        <View style={StyleFineDetail.currentServiceContainer}>
          <View style={StyleFineDetail.currentServiceBlock1}>
            <View style={StyleFineDetail.currentServiceData1}>
              <Subtitle1 style={StyleFineDetail.blockTitleText}>{i18n.t('FINEDETAIL_SERVICE')}</Subtitle1>
              <H5 style={StyleFineDetail.blockCurrentServicesText}>{fineData ? fineData.service : ' '}</H5>
            </View>
            <View style={StyleFineDetail.currentServiceData2}>
              <Subtitle1 style={StyleFineDetail.blockTitleText}>{i18n.t('FINEDETAIL_CURRENTPLAN')}</Subtitle1>
              <H5 style={StyleFineDetail.blockCurrentServicesText}>{fineData ? fineData.currentPlan : ' '}</H5>
            </View>
          </View>
          <View style={StyleFineDetail.currentServiceBlock2}>
            <View style={StyleFineDetail.blockData}>
              <Subtitle1 style={StyleFineDetail.blockTitleText}>{i18n.t('FINEDETAIL_TIME')}</Subtitle1>
              <H5 style={StyleFineDetail.blockServicesStateText}>{fineData ? fineData.time : ' '}</H5>
            </View>
          </View>
        </View>
        <View style={StyleFineDetail.pendingContainer}>
          <Subtitle1 style={StyleFineDetail.blockTitleText}>{i18n.t('FINEDETAIL_PENDING')}</Subtitle1>
          <H5 style={StyleFineDetail.blockServicesStateText}>{fineData ? fineData.fees : ' '}</H5>
        </View>
        <View style={StyleFineDetail.amountContainer}>
          <Subtitle1 style={StyleFineDetail.blockTitleText}>{i18n.t('FINEDETAIL_AMOUNT')}</Subtitle1>
          <H3 style={StyleFineDetail.amountText}>{fineData ? fineData.amount : ' '}</H3>
        </View>
      </View>
      <NButton setEditable style={StyleFineDetail.button} onPress={() => navigation.navigate('Home')}>
        <H5 style={StyleFineDetail.buttonText}>Volver al Inicio</H5>
      </NButton>
    </ScreenProcedureStructure>
  )
}

export default FineDetail
