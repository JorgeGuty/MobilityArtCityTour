import { View, SafeAreaView, Pressable, Dimensions } from 'react-native'
import { StyleFineDetail, DeviceDetailStyle } from './DeviceDetail.style'
import { H5, H3, Subtitle2 } from '../../../constants/fonts'
import i18n from '../../../configs/i18n.config'
import IconReceipt from '../../../assets/icons/receipt.svg'
import { StyleScreenProcedure } from '../ScreenStructure/ScreenProcedureStructure.style'
import { useEffect, useState } from 'react'
import LateralMenu from '../ScreenStructure/LateralMenu/LateralMenu'
import KolbiFrog from '../ScreenStructure/KolbiFrog/KolbiFrog'
import ArrowIcon from '../../../assets/icons/arrow_back.svg'
import ImageSlider from '../../../styleguide/sliders/ImageSlider/ImageSlider'
import RatedCard from '../../../styleguide/cards/DeviceModelCard/RatedCard'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import ScreenProcedureStructure from '../ScreenStructure/ScreenProcedureStructure'

const DeviceDetail = ({
  deviceInformation
  /*
    /\/\/\/\/\
    ||||||||||
    IMPORTANTE:
    Se asume que viene todo en un mismo json del siguiente formato:
    {
      model: string,
      brand: string,
      rating: int,
      images: [{url: string}]
    }
    cuando el servicio que llegue sea el definitivo, cambiar los props para acomodarlo al nuevo formato que venga
    pero la información debería ser la misma.
  */
}) => {
  return (
    <View style={[{ width: Dimensions.get('screen').width - 242, height: Dimensions.get('screen').width - 98 }, DeviceDetailStyle.borders]}>
      <View style={{
        width: '100%',
        height: 'auto',
        flexDirection: 'row'
      }}
      >
        <Pressable
          onPress={() => {}}
          style={[DeviceDetailStyle.borders]}
        >
          <ArrowIcon />
        </Pressable>
        <RatedCard
          title={deviceInformation.model}
          subtitle={deviceInformation.brand}
          rating={deviceInformation.rating}
          style={[DeviceDetailStyle.borders, {
            marginLeft: 15
          }]}
        />
      </View>
      <View style={{
        width: '100%',
        height: 'auto',
        flexDirection: 'row'
      }}
      >
        <ImageSlider images={deviceInformation.images} style={[DeviceDetailStyle.borders]} />
        <View style={[DeviceDetailStyle.borders, { flex: 1, height: 828 }]} />
      </View>
    </View>
  )
}

export default DeviceDetail
