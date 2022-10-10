import { Animated, Dimensions, Pressable, TextInput, Keyboard, KeyboardAvoidingView } from "react-native"
import { useRef, useEffect, useState } from "react"
import { styles } from "./SearchPointsHeader.style"
import GoBack from '../../assets/icons/flecha_atras_azul.svg'
import { Constants } from "../../constants/constants"

const SearchPointsHeader = ({searchPoints, resetPoints, show, setShow}) => {

    const headerVerticalTranslation = useRef(new Animated.Value(-Dimensions.get('screen').height)).current
    const [search, setSearch] = useState('')

    const hideHeader = () => {
        Animated.sequence([
          Animated.timing(
            headerVerticalTranslation,
            {
              toValue: -Dimensions.get('screen').height,
              duration: Constants.animationsDuration,
              useNativeDriver: true
            }
          )
        ]).start()
      }
    
      const showHeader = () => {
        Animated.sequence([
          Animated.timing(
            headerVerticalTranslation,
            {
              toValue: 0,
              duration: Constants.animationsDuration,
              useNativeDriver: true
            }
          )
        ]).start()
      }
    
      const goBack = () => {
        resetPoints()
        setShow(false)
        Keyboard.dismiss()
      }
    
      useEffect(() => {
        !!show ? showHeader() : hideHeader()
      },[show])

      useEffect(() => {
        searchPoints(search)
      },[search])

    return (
        <Animated.View style={[styles.mainContainer, { transform: [{ translateY: headerVerticalTranslation }] }]}>
            <Pressable
                onPress={goBack}
                style={styles.headerElement}
            >
                <GoBack></GoBack>
            </Pressable>
            <TextInput
                style={[styles.textEntry, styles.headerElement]}
                onChangeText={setSearch}
                value={search}
                placeholder="Busca algún punto"
            ></TextInput>
        </Animated.View>
    )
}

export default SearchPointsHeader