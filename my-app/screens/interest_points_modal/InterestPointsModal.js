import { useEffect, useRef, useState } from "react"
import { Animated, Dimensions, Pressable, ScrollView, View } from "react-native"
import { styles } from "./InterestPointsModal.style"
import ListIcon from '../../assets/icons/lista_icono.svg'
import MapIcon from '../../assets/icons/mapa_icono.svg'
import { Constants } from "../../constants/constants"
import { MACTTextBold } from "../../constants/fonts"
import MyModal from "../../styleguide/modal/MyModal"
import PlaceCard from "../../styleguide/cards/place_card/PlaceCard"


const InterestPointsModal = ({show, points}) => {

    const [showFull, setShowFull] = useState(false)

    const buttonVerticalTranslation = useRef(new Animated.Value(Dimensions.get('screen').height)).current

    const hideButton = () => {
      Animated.sequence([
        Animated.timing(
          buttonVerticalTranslation,
          {
            toValue: Dimensions.get('screen').height,
            duration: 1000,
            useNativeDriver: true
          }
        )
      ]).start()
    }
  
    const moveButtonVertically = (translation) => {
      Animated.sequence([
        Animated.timing(
          buttonVerticalTranslation,
          {
            toValue: translation,
            duration: 1000,
            useNativeDriver: true
          }
        )
      ]).start()
    }

    useEffect(() => {
      if (!!show){
        setShowFull(false)
        moveButtonVertically(0)
      }
      else{
        hideButton()
      }
    }, [show])

    useEffect(() => {
      if (show) {
        !!showFull ? moveButtonVertically(Constants.interestPointsModalRelativeHeight - Constants.interestPointsModalButtonOffset) : moveButtonVertically(0)
      }
    }, [showFull])

    const renderPlaceList = () => {
      return (
          <ScrollView
            style={styles.bodyContainer}
            contentInset={{ top: 0, left: 0, bottom: 450, right: 0 }}
          >
            {
              points.map((point, index) => {
                return (
                  <PlaceCard
                    key={index}
                    sizeToggler={!showFull}
                    place={point}
                  />
                )
              })
            }
          </ScrollView>
      )
    }

    return (
      <>
        <MyModal
          showModal={show}
          modalHeight={Dimensions.get('screen').height * 80 / 100}
          yTranslationAmount={showFull ? 0 : Dimensions.get('screen').height * 80 / 100 - Constants.interestPointsModalRelativeHeight}  
          startYTranslation={Dimensions.get('screen').height * 80 / 100}
          body={renderPlaceList()}
        >
        </MyModal>
        <Animated.View style={[{ transform: [{ translateY: buttonVerticalTranslation }] }]}>
          <Pressable 
            style = {[Constants.shadow, styles.button]}
            onPress = {() => setShowFull(!showFull)}
          >
            {
              showFull 
              ? <MapIcon></MapIcon>
              : <ListIcon></ListIcon>
            }         
            <MACTTextBold style={styles.buttonLabel}>            
              {
                showFull 
                ? Constants.verMapa
                : Constants.verLista
              }   
            </MACTTextBold>
          </Pressable>    
        </Animated.View>
      </>
    )
}

export default InterestPointsModal