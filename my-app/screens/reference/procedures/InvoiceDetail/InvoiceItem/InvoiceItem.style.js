import { StyleSheet } from 'react-native'
import { Colors } from '../../../../constants/colors'

export const StyleInvoiceItem = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    flexDirection: 'column',
    borderRadius: 8
  },
  titleContainer: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  titleContainerLeft: {
    flex: 6,
    minWidth: 200,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 8
  },
  titleContainerRight: {
    flex: 1,
    minWidth: 300,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 8,
    marginBottom: 8
  },
  contentContainer: {
    width: '100%',
    minHeight: 94,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.background1,
    flexDirection: 'row',
    paddingHorizontal: 16
  },
  backgroundPaid: {
    backgroundColor: Colors.text2
  },
  backgroundPending: {
    backgroundColor: Colors.business
  },
  icon: {
    marginHorizontal: 16,
    marginVertical: 16
  },
  invoiceTitle: {
    color: Colors.textAlt1,
    textAlign: 'left',
    flex: 1
  },
  stateContent: {
    width: 130,
    height: 54,
    flexDirection: 'column'
  },
  stateTitleText: {
    color: Colors.textAlt2,
    marginBottom: 4
  },
  stateText: {
    textAlign: 'right',
    color: Colors.textAlt1
  },
  lineSeparator: {
    width: 0,
    height: 54,
    borderWidth: 1,
    borderColor: Colors.background1,
    marginHorizontal: 4
  },
  button: {
    backgroundColor: Colors.background1,
    borderRadius: 36,
    borderWidth: 1,
    borderColor: Colors.business,
    paddingHorizontal: 0,
    maxWidth: 129,
    height: 46,
    marginRight: 12
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.business,
    fontSize: 18,
    lineHeight: 22
  },
  contentItem: {
    flex: 1,
    maxWidth: 226,
    maxHeight: 58,
    flexDirection: 'column',
    borderRightWidth: 1,
    borderColor: Colors.textAlt2,
    justifyContent: 'center',
    paddingHorizontal: 8
  },
  contentSubtitle: {
    color: Colors.text2,
    marginBottom: 8,
    textAlign: 'left'
  },
  contentText: {
    color: Colors.business,
    textAlign: 'right',
    fontSize: 20,
    lineHeight: 24
  }
})
