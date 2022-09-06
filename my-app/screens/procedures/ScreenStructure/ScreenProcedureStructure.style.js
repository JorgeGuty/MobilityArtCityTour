import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const StyleScreenProcedure = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.background2
  },
  lateralMenuContainer: {
    flex: 1,
    paddingLeft: 8,
    paddingVertical: 16
  },
  contentContainer: {
    flex: 3,
    marginLeft: 22,
    paddingRight: 16,
    paddingVertical: 32
  },
  frogIcon: {
    height: 50,
    width: 154,
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 7
  },
  imageCarrouselCont: {
    height: 250,
    width: '100%'
  },
  children: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  titleAndBackArrow: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleText: {
    textAlign: 'left',
    color: Colors.text1,
    marginLeft: 16,
    fontSize: 24
  }
})
