import { Dimensions, View } from "react-native"
import { Colors } from "../../constants/colors"
import HomeHeader from "../../screens/home/header/HomeHeader"


const HomeHeaderExample = ({}) => {

    return (
        <View style={{
            width: Dimensions.get('screen').width,
            height: Dimensions.get('screen').height,
            backgroundColor:Colors.actOrange1
        }}>
            <HomeHeader></HomeHeader>
        </View>
    )

}

export default HomeHeaderExample