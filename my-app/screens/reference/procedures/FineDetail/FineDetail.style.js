import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'
import { gradients } from '../../../constants/gradients'

export const StyleFineDetail = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    marginTop: 32
  },
  title: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: Colors.business,
    alignItems: 'center'
  },
  titleText: {
    color: Colors.textAlt1,
    textAlign: 'left'
  },
  currentServiceContainer: {
    backgroundColor: Colors.background1,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingHorizontal: 16,
    flexDirection: 'column'
  },
  currentServiceBlock1: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.textAlt2,
    justifyContent: 'space-between'
  },
  currentServiceBlock2: {
    width: '100%',
    paddingVertical: 16,
    flexDirection: 'column'
  },
  currentServiceData1: {
    paddingHorizontal: 8,
    borderRightColor: Colors.textAlt2,
    borderRightWidth: 1,
    flexDirection: 'column',
    marginRight: 8,
    width: '49%'
  },
  currentServiceData2: {
    paddingHorizontal: 8,
    borderRightColor: Colors.textAlt2,
    borderRightWidth: 1,
    flexDirection: 'column',
    marginLeft: 8,
    width: '49%'
  },
  blockData: {
    paddingHorizontal: 8,
    borderRightColor: Colors.textAlt2,
    borderRightWidth: 1,
    flexDirection: 'column'
  },
  pendingContainer: {
    borderRadius: 8,
    backgroundColor: Colors.background1,
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginVertical: 16,
    flexDirection: 'column'
  },
  amountContainer: {
    borderRadius: 8,
    backgroundColor: Colors.background1,
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: 'column'
  },
  blockTitleText: {
    textAlign: 'left',
    color: Colors.text2,
    width: '100%'
  },
  blockCurrentServicesText: {
    color: Colors.business,
    textAlign: 'right',
    width: '100%'
  },
  blockServicesStateText: {
    color: Colors.text1,
    textAlign: 'right',
    width: '100%'
  },
  amountText: {
    textAlign: 'right',
    width: '100%',
    backgroundColor: gradients.gradient3
  },
  buttonText: {
    color: Colors.textAlt2
  },
  button: {
    marginTop: 16,
    alignSelf: 'center',
    minWidth: 252
  }
})
