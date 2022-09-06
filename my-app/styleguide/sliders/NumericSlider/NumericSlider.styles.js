import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
  barSlider: {
    backgroundColor: Colors.background3
  },
  button: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background1,
    borderRadius: 4
  },
  circle: {
    width: 14,
    height: 14,
    borderRadius: 14
  },
  colorIcon: {
    color: Colors.text2
  },
  colorMarker: {
    backgroundColor: Colors.people
  },
  container: {
    width: 342,
    marginHorizontal: 5,
    marginVertical: 5
  },
  containerSlider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  disableComponent: {
    opacity: 0.85
  },
  disableColor: {
    opacity: 0.5
  },
  enable: {
    opacity: 1
  },
  pressButton: {
    shadowColor: Colors.shadowHeld,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 2
  },
  price: {
    color: Colors.people
  },
  shadowProp: {
    shadowColor: Colors.text1,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6
  },
  slider: {
    height: 40,
    width: 241,
    radius: 4,
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: Colors.background1,
    borderRadius: 4
  },
  sliderLen: {
    height: 219
  },
  title: {
    color: Colors.text1
  }
})
