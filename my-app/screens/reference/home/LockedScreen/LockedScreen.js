import { View, Pressable, Dimensions, Animated, Text } from 'react-native'
import { useEffect, useRef } from 'react'
import { StyleLockedScreen } from './LockedScreen.style'
import ImgLocked from './ImgLocked/ImgLocked'
import IconTouch from '../../../assets/icons/touch_app.svg'
import { H3, H5 } from '../../../constants/fonts'
import i18n from '../../../configs/i18n.config'
import { Icon } from '../../../constants/icons'

const LockedScreen = ({ navigation }) => {
  const screenWidth = Dimensions.get('screen').width
  const iconOpacity = useRef(new Animated.Value(1)).current

  const incrementingTranslation = useRef(new Animated.Value(0)).current
  const decrementingTranslation = useRef(new Animated.Value(0)).current

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(
        iconOpacity,
        {
          toValue: 0.1,
          duration: 500,
          useNativeDriver: true
        }
      ),
      Animated.delay(1000),
      Animated.timing(
        iconOpacity,
        {
          toValue: 1,
          duration: 500,
          useNativeDriver: true
        }
      ),
      Animated.delay(1000)
    ]).start(() => startAnimation())
  }

  useEffect(() => {
    startAnimation()
  }, [iconOpacity])

  const slideOutVertically = (pDirection, pValue, pAnimatedValue, pDuration) => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.sequence([
      Animated.timing(
        pAnimatedValue,
        {
          toValue: pValue * pDirection,
          duration: pDuration,
          useNativeDriver: true
        }
      ),
      Animated.timing(
        pAnimatedValue,
        {
          toValue: 0,
          duration: 10,
          useNativeDriver: true
        }
      )
    ]).start()
  }

  const onPressScreen = () => {
    navigation.navigate('Home')

    const slideUpDuration = 1000
    const slideDownDuration = 1000

    slideOutVertically(-1, Dimensions.get('window').height, incrementingTranslation, slideUpDuration)
    slideOutVertically(1, Dimensions.get('window').height, decrementingTranslation, slideDownDuration)
  }

  return (
    <View style={StyleLockedScreen.container}>
      <Pressable style={StyleLockedScreen.exitButtonContainer} onPress={() => navigation.navigate('LogInModal')}>
        <Text style={StyleLockedScreen.exitButton}>{Icon.exit_to_app}</Text>
      </Pressable>

      <Animated.View style={[StyleLockedScreen.ImageContainer, { transform: [{ translateY: incrementingTranslation }] }]}>
        <Pressable style={StyleLockedScreen.ImageContainer} onPress={onPressScreen}>
          <ImgLocked />
        </Pressable>
      </Animated.View>

      <Animated.View style={[StyleLockedScreen.ButtonContainer, { transform: [{ translateY: decrementingTranslation }] }]}>
        <Pressable style={StyleLockedScreen.ButtonContainer} onPress={onPressScreen}>
          <Animated.View style={[StyleLockedScreen.iconContainer, { opacity: iconOpacity }]}>
            {screenWidth > 600
              ? <IconTouch style={StyleLockedScreen.icon} />
              : <IconTouch width={32} height={32} style={StyleLockedScreen.icon} />}
          </Animated.View>
          {screenWidth > 600
            ? <H3 style={StyleLockedScreen.text}> {i18n.t('LOCKEDSCREEN_TEXT')} </H3>
            : <H5 style={StyleLockedScreen.text}> {i18n.t('LOCKEDSCREEN_TEXT')} </H5>}
        </Pressable>
      </Animated.View>
    </View>
  )
}

export default LockedScreen
