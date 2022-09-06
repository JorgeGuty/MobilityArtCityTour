import { useEffect, useState, useRef } from 'react'
import { View, Dimensions, Animated, Pressable, Text, KeyboardAvoidingView, Platform } from 'react-native'
import ImageCarousel from '../../procedures/ScreenStructure/ImageCarousel/ImageCarousel'
import KolbiFrog from '../../procedures/ScreenStructure/KolbiFrog/KolbiFrog'
import { StyleHome } from './Home.style'
import IconOffice365 from '../../../assets/icons/office365.svg'
import IconAccount from '../../../assets/icons/account_balance.svg'
import IconPhone from '../../../assets/icons/phone.svg'
import IconWifi from '../../../assets/icons/wifi.svg'
import IconStore from '../../../assets/icons/store.svg'
import IconHome from '../../../assets/icons/home.svg'
import IconDevices from '../../../assets/icons/devices.svg'
import IconReceipt from '../../../assets/icons/receiptHome.svg'
import { H5 } from '../../../constants/fonts'
import i18n from '../../../configs/i18n.config'
import SquareCard from '../../../styleguide/cards/SquareCard/SquareCard'
import { Icon } from '../../../constants/icons'

// Simulation Files
import getServerData from '../../../simulations/ImageCarousel.sim'

const Home = ({ navigation }) => {
  const [hookedData, setHookedData] = useState([])
  const getDataFromServer = async () => {
    const data = await getServerData()
    console.log('Timer response received => ', data.imageDefaultSize)
    setHookedData(data)
  }

  const row1AnimationVal = useRef(new Animated.Value(0)).current
  const row2AnimationVal = useRef(new Animated.Value(0)).current
  const row3AnimationVal = useRef(new Animated.Value(0)).current
  const row4AnimationVal = useRef(new Animated.Value(0)).current

  const componentsInitAnimation = (pAnimationValue, pDuration) => {
    Animated.sequence([
      Animated.timing(
        pAnimationValue,
        {
          toValue: Dimensions.get('window').width,
          duration: 5,
          useNativeDriver: true
        }
      ),
      Animated.timing(
        pAnimationValue,
        {
          toValue: 0,
          duration: pDuration,
          useNativeDriver: true,
          overshootClamping: true
        }
      )
    ]).start()
  }

  useEffect(() => {
    const baseDuration = 600
    const increment = 200

    getDataFromServer()
    componentsInitAnimation(row1AnimationVal, baseDuration)
    componentsInitAnimation(row2AnimationVal, (baseDuration + increment))
    componentsInitAnimation(row3AnimationVal, (baseDuration + increment * 2))
    componentsInitAnimation(row4AnimationVal, (baseDuration + increment * 3))
  }, [])

  return (
    <KeyboardAvoidingView
      style={[StyleHome.container]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      enabled={Platform.OS === 'ios'}
    >
      <Pressable style={StyleHome.exitButtonContainer} onPress={() => navigation.navigate('LogOutModal')}>
        <Text style={StyleHome.exitButton}>{Icon.exit_to_app}</Text>
      </Pressable>
      <Animated.View style={[StyleHome.imageCarrouselCont, { transform: [{ translateX: row1AnimationVal }] }]}>
        <ImageCarousel images={hookedData} />
      </Animated.View>

      <Animated.View style={[StyleHome.frogIcon, { transform: [{ translateX: row2AnimationVal }] }]}>
        <KolbiFrog />
        <View style={StyleHome.frogSpaceFill} />
      </Animated.View>

      <Animated.View style={[{ transform: [{ translateX: row2AnimationVal }] }]}>
        <H5 style={StyleHome.titleTextServices}>{i18n.t('HOME_TODO')}</H5>
      </Animated.View>

      <Animated.View style={[StyleHome.servicesContainer, { transform: [{ translateX: row2AnimationVal }] }]}>
        <SquareCard
          icon={<IconReceipt />}
          nameSection={i18n.t('HOMESERVICE_RECEIPT_TITLE')}
          sectionDescription={i18n.t('HOMESERVICE_RECEIPT_DESCRIPTION')}
          fx={() => navigation.navigate('ConsultInvoices')}
          animated
        />

        <View style={StyleHome.spaceBetween} />

        <SquareCard
          icon={<IconWifi style={StyleHome.wifiColor} />}
          nameSection={i18n.t('HOMESERVICE_INTERNET_TITLE')}
          sectionDescription={i18n.t('HOMESERVICE_INTERNET_DESCRIPTION')}
          animated
          fx={() => navigation.navigate('ConsultSpeed')}
        />
        <View style={StyleHome.spaceBetween} />
        <SquareCard
          icon={<IconAccount />}
          nameSection={i18n.t('HOMESERVICE_STATE_TITLE')}
          sectionDescription={i18n.t('HOMESERVICE_STATE_DESCRIPTION')}
          fx={() => navigation.navigate('ConsultFine')}
          animated
        />
      </Animated.View>

      <Animated.View style={[StyleHome.titleTextPlansContainer, { transform: [{ translateX: row2AnimationVal }] }]}>
        <H5 style={StyleHome.titleTextPlans}>{i18n.t('HOME_INFORMATION')}</H5>
      </Animated.View>

      <View style={StyleHome.plansContainer}>
        <Animated.View style={[StyleHome.planRow, { transform: [{ translateX: row3AnimationVal }] }]}>
          <SquareCard
            icon={<IconDevices />}
            nameSection={i18n.t('HOMEPLAN_DEVICES_TITLE')}
            sectionDescription={i18n.t('HOMEPLAN_DEVICES_DESCRIPTION')}
          />
          <View style={StyleHome.spaceBetween} />
          <SquareCard
            icon={<IconPhone />}
            nameSection={i18n.t('HOMEPLAN_POSTPLAN_TITLE')}
            sectionDescription={i18n.t('HOMEPLAN_POSTPLAN_DESCRIPTION')}
          />
          <View style={StyleHome.spaceBetween} />
          <SquareCard
            icon={<IconPhone />}
            nameSection={i18n.t('HOMEPLAN_PREPLAN_TITLE')}
            sectionDescription={i18n.t('HOMEPLAN_PREPLAN_DESCRIPTION')}
          />
        </Animated.View>

        <Animated.View style={[StyleHome.planRow, { transform: [{ translateX: row4AnimationVal }] }]}>
          <SquareCard
            icon={<IconHome />}
            nameSection={i18n.t('HOMEPLAN_HOMEPLAN_TITLE')}
            sectionDescription={i18n.t('HOMEPLAN_HOMEPLAN_DESCRIPTION')}
          />
          <View style={StyleHome.spaceBetween} />
          <SquareCard
            icon={<IconStore />}
            nameSection={i18n.t('HOMEPLAN_BUSINESSPLAN_TITLE')}
            sectionDescription={i18n.t('HOMEPLAN_BUSINESSPLAN_DESCRIPTION')}
          />
          <View style={StyleHome.spaceBetween} />
          <SquareCard
            icon={<IconOffice365 />}
            nameSection={i18n.t('HOMEPLAN_OFFICE365_TITLE')}
            sectionDescription={i18n.t('HOMEPLAN_OFFICE365_DESCRIPTION')}
          />
        </Animated.View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Home
