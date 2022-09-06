import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const ImageSliderStyles = StyleSheet.create({
  componentContainer: {
    width: 375,
    height: 344
  },
  imagesContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  imageStyle: {
    width: 319
  },
  scrollContainer: {
    backgroundColor: Colors.background1,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.1
  },
  caption: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    letterSpacing: 0.1,
    color: Colors.text2
  },
  scrollButtons: {
    width: 25,
    height: 25,
    marginTop: 165
  },
  customStyles: {
    imagePercentageWidth: 80,
    chevronWidthPercentage: 10,
    chevronHeightPercentage: 10,
    chevronMarginTopPercentage: 50
  }
})
