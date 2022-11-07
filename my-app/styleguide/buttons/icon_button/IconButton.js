import { Pressable } from "react-native"
import { styles } from "./IconButton.style"
import { Constants } from "../../../constants/constants"
import { MACTTextBold } from "../../../constants/fonts"

const IconButton = ({icon, label, onPress, accessibilitySettings}) => {
    return (
      <Pressable 
        style = {[Constants.shadow, styles.button]}
        onPress = {onPress}
        >
        {
          icon
        }         
        <MACTTextBold style={[styles.buttonLabel, { fontSize: accessibilitySettings.fontAmplifier +  16 , }]}>            
          {
            label
          }   
        </MACTTextBold>
      </Pressable>    
    )
} 


export default IconButton