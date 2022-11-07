import { useEffect, useState, useRef } from 'react'
import { SafeAreaView, ScrollView, View, Animated, Modal, Text, Pressable, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import { styles } from './StopInfoModal.style'
import { H5, MACTText, MACTTextBold, Subtitle1 } from '../../constants/fonts'
import { Colors } from '../../constants/colors'
import CancelX from '../../assets/icons/cancel_x_azul.svg'
import MyModal from '../../styleguide/modal/MyModal'

const StopInfoModal = ({ stop, showModal, setShowModal, startYTranslation, toggleStopVisited, accessibilitySettings }) => {

  const renderHeader = () => {

    return (
      <View style={styles.headerContainer}>
          <MACTTextBold style={[styles.headerTitle, { fontSize: accessibilitySettings.fontAmplifier +  30 , }]}>
              {stop.name}
          </MACTTextBold>
      </View>
    )
  }

  const renderBody = () => {
    return (
      <View style={styles.bodyContainer}>
        <ScrollView
            directionalLockEnabled
            contentInset={{ top: 0, left: 0, bottom: 200, right: 0 }}
            style={styles.descriptionContainer}
        >
            <MACTText style={[styles.descriptionText, { fontSize: accessibilitySettings.fontAmplifier +  18 , }]}>
                {stop.description}
            </MACTText>
        </ScrollView>
        
        <Pressable 
            style={[styles.markVisitedButton , !!stop.visited ? styles.visitedStyling : styles.unvisitedStyling]} 
            onPress={
                () => {
                    toggleStopVisited(stop)
                    setShowModal(false)
                }
            }
        >
            <MACTTextBold style={[styles.markVisitedButtonLabel, { fontSize: accessibilitySettings.fontAmplifier +  20 , }]} >{!!stop.visited ? 'Desmarcar visitado' : 'Marcar visitado'}</MACTTextBold>
        </Pressable>
      </View>
    )
  }
  
  return (

    <MyModal
        setShowModal={setShowModal}
        showModal={showModal}
        yTranslationAmount={0}
        modalHeight={Dimensions.get('screen').height - Dimensions.get('screen').height / 4}
        header={renderHeader()}
        body={renderBody()}
        startYTranslation={startYTranslation}
        includeX
    /> 

  )
}

export default StopInfoModal