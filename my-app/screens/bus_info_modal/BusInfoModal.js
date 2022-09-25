import { useEffect, useState, useRef } from 'react'
import { View, Animated, Modal, Text, Pressable, Image, TouchableOpacity, Dimensions } from 'react-native'
import { styles } from './BusInfoModal.style'
import { H5, MACTTextBold, Subtitle1 } from '../../constants/fonts'
import { Colors } from '../../constants/colors'
import CancelX from '../../assets/icons/cancel_x_azul.svg'
import MyModal from '../../styleguide/modal/MyModal'

const BusInfoModal = ({ stop, showModal, setShowModal }) => {

  const serverScheduleData = {
    schedule: ['8:00pm', '8:10pm', '8:20pm', '8:30pm']
  }

  const [schedule, setSchedule] = useState({})

  useEffect(() => {
    setSchedule(serverScheduleData.schedule)
  }, [])

  const renderHeader = () => {

    return (
        <View style={{ flex:1 }}>
          <View style={{  alignContent:'center', flexDirection: 'row', display:'flex', alignItems:'center' }}>

            <MACTTextBold style={styles.headerTitle}>
                Próximo bus:
            </MACTTextBold>
            
            <MACTTextBold style = {styles.nextBusTime}>
              {schedule[0]}
            </MACTTextBold>
          
          </View>
        </View>
    )
  }

  const renderBody = () => {
    return (
      <View>

      </View>
    )
  }
  

  return (
    <MyModal
      setShowModal={setShowModal}
      showModal={showModal}
      modalHeight={0}
      header={renderHeader()}
      body={renderBody()}
    ></MyModal>
  )
}

export default BusInfoModal
