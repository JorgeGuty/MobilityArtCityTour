import { StyleSheet, StatusBar } from 'react-native'
import { Colors } from '../../../constants/colors'

export const StyleLockedScreen = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: Colors.background1,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 24,
    shadowOpacity: 0.25
  },
  ImageContainer: {
    flex: 4,
    zIndex: -1
  },
  ButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  text: {
    flex: 1,
    color: Colors.business
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10
  },
  icon: {
    color: Colors.business
  },
  exitButtonContainer: {
    textAlign: 'right',
    right: 0,
    position: 'absolute',
    paddingHorizontal: 12,
    paddingVertical: 12
  },
  exitButton: {
    color: Colors.textAlt2,
    fontFamily: 'material-icon',
    fontSize: 24,
    zIndex: 10
  }
})
