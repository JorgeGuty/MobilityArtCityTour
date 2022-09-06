import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
  buttonText: {
    color: Colors.textAlt1,
    paddingLeft: 48
  },
  color: {
    backgroundColor: 'white'
  },
  container: {
    width: 948,
    height: 60,
    borderRadius: 18,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    alignItems: 'center',
    marginHorizontal: 38,
    marginVertical: 12
  },
  shadowProp: {
    shadowColor: Colors.text1,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5
  },
  icon: {
    color: Colors.background1,
    fontFamily: 'material-icon',
    fontSize: 24
  },
  iconContainer: {
    width: 38,
    height: 36,
    backgroundColor: Colors.business,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 36
  }
})
