
import { View, Dimensions } from 'react-native'
import Banner from '../../../../assets/icons/banner.svg'
import { StylesImgLocked } from './ImgLocked.style'

const ImgLocked = () => {
  const screenWidth = Dimensions.get('screen').width
  const screenHeight = Dimensions.get('screen').height

  return (
    <View style={StylesImgLocked.container}>
      <Banner width={screenWidth} height={screenHeight} />
    </View>
  )
}
export default ImgLocked
