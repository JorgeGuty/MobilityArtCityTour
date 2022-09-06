import { StyleSheet } from 'react-native'
import { Colors } from '../../../../constants/colors'

export const StyleDropDown = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 58,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: Colors.text2,
    borderRadius: 8
  },
  mainText: {
    flex: 1,
    textAlign: 'center',
    color: Colors.text1,
    marginLeft: 8
  },
  button: {
    fontFamily: 'material-icon',
    fontSize: 42,
    color: Colors.text1,
    maxHeight: 42,
    maxWidth: 42,
    marginLeft: 10
  },
  options: {
    width: '100%',
    backgroundColor: Colors.background1,
    position: 'absolute',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 3
  },
  modal: {
    width: '100%',
    height: '100%'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  itemRadioButton: {
    marginHorizontal: 10,
    marginVertical: 10
  },
  itemCheck: {
    color: Colors.people
  },
  itemUncheck: {
    color: Colors.text1
  },
  itemText: {
    textAlign: 'left',
    marginLeft: 10
  }
})
