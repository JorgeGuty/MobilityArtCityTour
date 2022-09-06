import { StyleSheet } from 'react-native'
import { Colors } from '../../../../constants/colors'

export const StyleSpeedSelector = StyleSheet.create({
  modalContainer: {
    overflow: 'visible'
  },
  modaltitle: {
    color: Colors.text2,
    textAlign: 'left',
    flex: 1
  },
  tabBoxTitles: {
    color: Colors.home,
    borderBottomColor: Colors.home
  },
  conditionsText: {
    textAlign: 'center',
    color: Colors.text2
  },
  cardButtonText: {
    color: Colors.textAlt2
  },
  cardHeaderContainer: {
    width: 240
  },
  cardHeaderTitle: {
    marginBottom: 18,
    color: Colors.home,
    textAlign: 'center'
  },
  cardHeaderAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  cardHeaderAmount: {
    textAlign: 'right',
    color: Colors.home,
    fontSize: 28
  },
  cardHeaderAmountIVAI: {
    textAlign: 'right',
    color: Colors.home,
    paddingBottom: 4
  },
  cardHeaderFrecuency: {
    color: Colors.text2,
    textAlign: 'right'
  },
  colorTextCardSelected: {
    color: Colors.textAlt2
  },
  speedContainer: {
    flexDirection: 'row',
    marginBottom: 10
  },
  expandButton: {
    color: Colors.text1,
    marginRight: 4,
    maxWidth: 18,
    maxHeight: 18
  },
  speedTextContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  speedTextColor: {
    color: Colors.text1
  },
  speedTextDetailColor: {
    color: Colors.text2
  },
  itemSeparator: {
    width: 9
  },
  textHighlighted: {
    color: Colors.business
  },
  conditionsContainer: {
    marginTop: 24
  },
  scrollContainer: {
    overflow: 'visible',
    paddingBottom: 24
  },
  scrollContentContainer: {
    justifyContent: 'space-between'
  },
  tabBoxShadow: {
    elevation: 0,
    shadowOpacity: 0
  },
  planCardMargin: {
    marginHorizontal: 3,
    marginVertical: 3
  },
  planCardShadow: {
    elevation: 3
  },
  planCardButton: {
    height: 36,
    minWidth: 117
  }
})
