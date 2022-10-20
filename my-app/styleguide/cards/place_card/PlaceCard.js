import { useEffect, useRef, useState } from "react"
import { Animated, Image, View } from "react-native"
import { Colors } from "../../../constants/colors"
import { MACTTextBold, MACTText } from "../../../constants/fonts"
import { styles } from "./PlaceCard.style"
import { Constants } from "../../../constants/constants"
const PlaceCard = ({ startMaximized, sizeToggler, place }) => {

    const minHeight = 75
    const maxHeight = 250

    const [isMaximized, setIsMaximized] = useState(startMaximized ? true : false)

    const height = useRef(new Animated.Value(startMaximized ? 200 : 75)).current

    const minimize = () => {
        Animated.timing(
            height, {
            toValue: minHeight,
            duration: Constants.animationsDuration,
            useNativeDriver: false,
        }).start();        
        setIsMaximized(false)        
    }

    const maximize = () => {
        Animated.timing(
            height, {
            toValue: maxHeight,
            duration: Constants.animationsDuration,
            useNativeDriver: false,
        }).start();        
        setIsMaximized(true)
    }

    useEffect(() => {
        isMaximized ? minimize() : maximize()
    }, [sizeToggler])

    useEffect(() => {
        !!startMaximized ? maximize() : minimize()
    }, [])

    const formatCategory = (category) => {
        category = category.replace(/^\w/, c => c.toUpperCase())
        category = category.replace("_", " ")

        return category.replace(/^\w/, c => c.toUpperCase())
    }

    const formatEconomicCategory = (economicCategory) => {
        let string = ''
        for (let point = 0; point < economicCategory; point++){
            string += '$'
        }
        return string
    }

    return (
        <Animated.View
            style = {[
                styles.mainContainer, 
                {
                    height: height,
                    padding: height.interpolate({
                        inputRange: [minHeight, maxHeight],
                        outputRange:[0, 15]
                    }),
                }
            ]}
        >

            <Image                 
                style={styles.image}
                source = {{
                    uri: place.imageUrl
                }}
            />

            <Animated.View
                style = {[
                    styles.infoBox,
                    {
                        flex: height.interpolate({
                            inputRange: [minHeight, maxHeight],
                            outputRange:[4, 1]
                        })
                    }
                ]}
            >                
                <View
                    style={styles.title}
                >
                    <MACTTextBold style={{ fontSize: 20, color: Colors.actBlue2, flexShrink: 1}}>{place.placeName}</MACTTextBold>
                    <MACTText>{formatCategory(place.category[0])}</MACTText>
                </View>
                <Animated.View
                    style={[
                        styles.relevantInfo,
                        {
                            opacity: height.interpolate({
                                inputRange: [minHeight, maxHeight],
                                outputRange:[0, 1]                            
                            })
                        }
                    ]}                
                >
                    <MACTText style={styles.openState}>{place.isOpen ? 'Abierto' : 'Cerrado'}</MACTText>
                    <MACTText>{formatEconomicCategory(place.economicCategory)}</MACTText>
                </Animated.View>
            </Animated.View>
        </Animated.View>
    )
}

export default PlaceCard