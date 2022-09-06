import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
  notSelectTab: {
    borderBottomWidth: 0
  },
  notSelectText: {
    color: Colors.text1
  },
  selectedTab: {
    borderBottomWidth: 4,
    borderBottomColor: Colors.people
  },
  selectedText: {
    color: Colors.people
  },
  tab: {
    height: 40,
    radius: 4,
    marginHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.001,
    lineHeight: 17,
    margin: 10
  }
})
