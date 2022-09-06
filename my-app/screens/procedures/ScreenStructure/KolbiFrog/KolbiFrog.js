import { View } from 'react-native'
import { StyleFrog } from './KolbiFrog.style'
import FrogIcon from '../../../../assets/icons/frog_eyes.svg'

const KolbiFrog = () => {
  return (
    <View style={StyleFrog.container}>
      <FrogIcon />
    </View>
  )
}

export default KolbiFrog
