import { StyleSheet } from 'react-native'
import { Colors } from '../../../../constants/colors'

export const stylesSwitchButton = StyleSheet.create({
  titleContainer: {
    maxWidth: 271,
    minHeight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  infoButton: {
    paddingLeft: 15,
    alignItems: 'flex-end'
  },
  title: {
    color: Colors.text1,
    flex: 2,
    textAlign: 'left'
  },
  buttonContainer: {
    maxWidth: 271,
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8
  },
  buttonContainerShadow: {
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    elevation: 4
  },
  buttonContainerShadowHold: {
    shadowColor: Colors.shadowHeld,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 1,
    elevation: 4
  },
  buttonText: {
    flex: 2,
    textAlign: 'left',
    paddingLeft: 20,
    paddingVertical: 15
  },
  switchButton: {
    marginHorizontal: 14
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  containerDisable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    opacity: 0.45
  },
  buttonActivated: {
    backgroundColor: Colors.business
  },
  buttonNotActivated: {
    backgroundColor: Colors.background1
  },
  titleActivated: {
    color: Colors.textAlt1
  },
  titleNotActivated: {
    color: Colors.text2
  },
  switchCustomContainer: {
    width: 22,
    height: 12,
    borderWidth: 2,
    borderColor: Colors.text2,
    borderRadius: 5,
    justifyContent: 'center'
  },
  switchCustomBall: {
    width: 6,
    height: 6,
    borderRadius: 50,
    marginHorizontal: 2
  }
})
