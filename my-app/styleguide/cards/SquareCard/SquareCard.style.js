import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background1,
    borderRadius: 8,
    shadowColor: Colors.shadowUnheld,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 9,
    paddingHorizontal: 8,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  section: {
    alignSelf: 'center',
    color: Colors.text1,
    textAlign: 'center', 
    marginTop: 8
  },
  description: {
    textAlign: 'center',
    color: Colors.text2, 
    marginTop: 8
  },
  touchIcon: {
    position: 'absolute',
    bottom: -20,
    left: 7,
    fontSize: 28,
    width: 48,
    height: 48
  },
  focus: {
    flex: 1,
    backgroundColor: Colors.background1,
    borderRadius: 8,
    shadowColor: Colors.business,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 9,
    paddingHorizontal: 8,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  }
})
