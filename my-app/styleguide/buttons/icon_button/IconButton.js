import { Pressable } from "react-native"
import { styles } from "./IconButton.style"
import { Constants } from "../../../constants/constants"
import { MACTTextBold } from "../../../constants/fonts"

const IconButton = ({icon, label, onPress}) => {
    return (
        <Pressable 
        style = {[Constants.shadow, styles.button]}
        onPress = {onPress}
        >
        {
          icon
        }         
        <MACTTextBold style={styles.buttonLabel}>            
          {
            label
          }   
        </MACTTextBold>
      </Pressable>    
    )
} 


export default IconButton