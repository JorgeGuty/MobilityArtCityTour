import { Pressable } from 'react-native'
import { StyleListItem } from './ListItem.style'
import { Subtitle1 } from '../../../../constants/fonts'

const ListItem = ({ children, text, onPress }) => {
  return (
    <Pressable style={StyleListItem.container} onPress={onPress}>
      {children}
      <Subtitle1 style={StyleListItem.text}>
        {text}
      </Subtitle1>
    </Pressable>
  )
}

export default ListItem
