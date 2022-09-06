import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'
import { gradients } from '../../../constants/gradients'

export const StyleSpeedDetail = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 73
  },
  userServiceContainer: {
    flex: 1,
    maxHeight: 106,
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.background1,
    borderRadius: 8,
    marginBottom: 16
  },
  userServiceDataContainer: {
    flex: 1,
    maxWidth: 350,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginHorizontal: 4,
    justifyContent: 'center'
  },
  userDataTitle: {
    width: '100%',
    color: Colors.text2,
    marginBottom: 8,
    textAlign: 'left'
  },
  userData: {
    width: '100%',
    backgroundColor: gradients.gradient3,
    textAlign: 'left'
  },
  newSpeedContainer: {
    flex: 1,
    maxHeight: 106,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 16,
    backgroundColor: Colors.background1,
    borderRadius: 8
  },
  newSpeedDataContainer: {
    flex: 1,
    maxWidth: 459,
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center'
  },
  buttonText: {
    flex: 1,
    color: Colors.textAlt2
  },
  newSpeedAmountContainer: {
    flex: 1,
    maxHeight: 135,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: Colors.background1,
    borderRadius: 8
  },
  newSpeedAmountData: {
    width: '100%',
    backgroundColor: gradients.gradient3,
    textAlign: 'right'
  },
  buttonContinueContainer: {
    flex: 1,
    maxHeight: 116,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 72,
    backgroundColor: Colors.background1,
    borderRadius: 8
  }
})
