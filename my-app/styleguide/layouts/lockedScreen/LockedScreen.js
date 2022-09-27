import { Dimensions, View } from "react-native"
import { Colors } from "../../../constants/colors"
import { MACTTextBold, MACTText } from "../../../constants/fonts"
import { styles } from "./LockedScreen.style"

const LockedScreen = ({content}) => {

    return (
        <View 
            style = {{
                height: Dimensions.get('screen').height, 
                width: Dimensions.get('screen').width,
                backgroundColor: Colors.actBlue2,
                justifyContent:'center',
                alignItems:'center'
            }}
        >
            <View
                style = {{
                    height: Dimensions.get('screen').height - Dimensions.get('screen').height / 5, 
                    width: Dimensions.get('screen').width - Dimensions.get('screen').width / 8,
                    marginHorizontal: 50,
                    marginVertical: 100,
                    backgroundColor: Colors.actGray6,
                    borderRadius: 30
                }}
            >
                <MACTTextBold
                    style={[styles.title, styles.center]}
                >
                    {'   Movilidad \nArt City Tour'}
                </MACTTextBold>
                {content}
            </View>
        </View>
    )
}

export default LockedScreen