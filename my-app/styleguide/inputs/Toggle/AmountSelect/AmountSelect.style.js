import { StyleSheet } from 'react-native'
import { Colors } from '../../../../constants/colors'

export const stylesAmountSelect = StyleSheet.create({
  titleContainer: {
    maxWidth: 251,
    minHeight: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  title: {
    textAlign: 'left',
    color: Colors.text1,
    flex: 1
  },
  buttonContainer: {
    maxWidth: 271,
    minHeight: 44,
    backgroundColor: Colors.background1,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.text2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainerShadow: {
    shadowColor: Colors.shadowHeld,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 2
  },
  buttonText: {
    color: Colors.text2,
    flex: 3,
    textAlign: 'center',
    paddingVertical: 10
  },
  leftButtonContainer: {
    maxHeight: 24,
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    tintColor: Colors.text2
  },
  rigthButtonContainer: {
    maxHeight: 24,
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    tintColor: Colors.text2
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
  }
})
