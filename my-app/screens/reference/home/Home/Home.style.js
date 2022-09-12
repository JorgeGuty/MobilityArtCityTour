import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const StyleHome = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.background2,
    paddingHorizontal: 32,
    paddingTop: 32,
    paddingBottom: 42
  },
  frogIcon: {
    height: '4%',
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 7
  },
  frogSpaceFill: {
    width: '80%'
  },
  imageCarrouselCont: {
    height: '25%'
  },
  titleTextServices: {
    textAlign: 'left',
    color: Colors.text1,
    fontSize: 24,
    width: '100%',
    marginBottom: 16
  },
  titleTextPlansContainer: {
    flex: 3,
    justifyContent: 'flex-end'
  },
  titleTextPlans: {
    textAlign: 'left',
    color: Colors.text1,
    fontSize: 24,
    marginBottom: 8
  },
  exitButtonContainer: {
    textAlign: 'right',
    right: 12,
    position: 'absolute',
    paddingTop: 12
  },
  exitButton: {
    color: Colors.textAlt2,
    fontFamily: 'material-icon',
    fontSize: 24
  },
  servicesContainer: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  serviceSectionStyle: {
    textAlign: 'center'
  },
  plansContainer: {
    flex: 10,
    justifyContent: 'space-between'
  },
  planRow: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 8
  },
  spaceBetween: {
    flex: 0.05
  },
  wifiColor: {
    color: Colors.business
  }
})
