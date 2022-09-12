import { StyleSheet } from 'react-native'
import { Colors } from '../../../../constants/colors'

export const StyleCarousel = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContent: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 16
  },
  scrollContainer: {
    backgroundColor: Colors.business,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.1
  },
  scrollButtonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: '10%',
    alignSelf: 'center'
  },
  scrollButton: {
    width: 13,
    height: 13,
    marginHorizontal: 10,
    borderRadius: 50,
    backgroundColor: Colors.textAlt1
  },
  scrollButtonActivated: {
    backgroundColor: Colors.text1
  },
  imageStyle: {
    height: '100%'
  }
})
