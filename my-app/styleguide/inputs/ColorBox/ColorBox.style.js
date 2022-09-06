import { StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'

export const stylesColorBox = StyleSheet.create({
  text: {
    color: Colors.text2
  },
  button: {
    width: 32,
    height: 32,
    borderRadius: 50,
    marginBottom: 11,
    marginTop: 3,
    borderWidth: 2,
    borderColor: Colors.textAlt1
  },
  container: {
    width: 'auto',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  containerButton: {
    width: 'auto',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: 10
  },
  containerButtonDisabled: {
    width: 'auto',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
    opacity: 0.45
  },
  borderButtonSelected: {
    width: 38,
    height: 38,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: Colors.business,
    zIndex: -1,
    position: 'absolute'
  }
})
