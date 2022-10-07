import { useEffect, useState, useRef } from 'react'
import { SafeAreaView, ScrollView, View, Animated, Modal, Text, Pressable, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import { styles } from './BusInfoModal.style'
import { H5, MACTText, MACTTextBold, Subtitle1 } from '../../constants/fonts'
import { Colors } from '../../constants/colors'
import CancelX from '../../assets/icons/cancel_x_azul.svg'
import MyModal from '../../styleguide/modal/MyModal'

// Simulation files
import getSchedule from '../../simulations/GetSchedule.sim'

const BusInfoModal = ({ stopName, stopId, showModal, setShowModal, startYTranslation }) => {

  const getScheduleFromServer = async () => {
    const data = await getSchedule(stopId)
    setSchedule(data)
  }

  const [schedule, setSchedule] = useState([])

  useEffect(() => {
    getScheduleFromServer()
  }, [])

  const renderHeader = () => {

    return (
      <View style={styles.headerContainer}>
          <MACTTextBold style={styles.headerTitle}>
              {stopName}
          </MACTTextBold>
      </View>
    )
  }

  const renderBody = () => {
    return (
      <View style={styles.bodyContainer}>
        <View style={styles.nextBusInfoContainer}>
          <MACTTextBold style={styles.nextBusLabel}>
              Próximo bus:
          </MACTTextBold>
          <MACTTextBold style = {styles.nextBusTime}>
            {schedule[0]}
          </MACTTextBold>
        </View>
        <MACTText style={styles.completeScheduleLabel}>Siguientes buses:</MACTText>
        <ScrollView
          horizontal
          style={{flex:1}}
        >
          {
            schedule.map((time, index) => (
              index != 0 
              ? <View  
                  key={index}
                  style={styles.scheduleTimeCard}
                >
                  <MACTText style={styles.scheduleTimeLabel}>{time}</MACTText>
                </View>
              : null
            ))
          }
        </ScrollView>
      </View>
    )
  }
  
  return (
    <>
      {
        schedule !== [] 
        ? 
            <MyModal
              setShowModal={setShowModal}
              showModal={showModal}
              yTranslationAmount={0}
              modalHeight={Dimensions.get('screen').height / 3}
              header={renderHeader()}
              body={renderBody()}
              startYTranslation={startYTranslation}
              includeX
            ></MyModal> 
        : null
      }
    </>
  )
}

export default BusInfoModal
