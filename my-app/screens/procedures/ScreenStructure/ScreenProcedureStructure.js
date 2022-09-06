import { useEffect, useState } from 'react'
import { View, SafeAreaView, Pressable } from 'react-native'
import { StyleScreenProcedure } from './ScreenProcedureStructure.style'
import LateralMenu from './LateralMenu/LateralMenu'
import ImageCarousel from './ImageCarousel/ImageCarousel'
import KolbiFrog from './KolbiFrog/KolbiFrog'
import ArrowIcon from '../../../assets/icons/arrow_back.svg'
import { H5 } from '../../../constants/fonts'

// Simulation Files
import getServerData from '../../../simulations/ScreenProcedureStructure.sim'

const ScreenProcedureStructure = ({ children, titleText, onPressBackButton, navigation }) => {
  const [hookedData, setHookedData] = useState([])
  const getDataFromServer = async () => {
    const data = await getServerData()
    setHookedData(data)
  }
  useEffect(() => {
    getDataFromServer()
  }, [])
  return (
    <SafeAreaView style={StyleScreenProcedure.container}>
      <View style={StyleScreenProcedure.lateralMenuContainer}>
        <LateralMenu navigation={navigation} />
      </View>
      <View style={StyleScreenProcedure.contentContainer}>
        <View style={StyleScreenProcedure.imageCarrouselCont}>
          <ImageCarousel images={hookedData} />
        </View>
        <View style={StyleScreenProcedure.frogIcon}>
          <KolbiFrog />
        </View>
        <View style={StyleScreenProcedure.children}>
          <View style={StyleScreenProcedure.titleAndBackArrow}>
            {titleText
              ? (
                <Pressable
                  onPress={onPressBackButton}
                >
                  <ArrowIcon />
                </Pressable>
                )
              : null}
            <H5 style={StyleScreenProcedure.titleText}>{titleText}</H5>
          </View>
          {children}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ScreenProcedureStructure
