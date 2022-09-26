import { useState } from "react"
import { View, Pressable, Dimensions } from "react-native"
import BusInfoModal from "../../screens/bus_info_modal/BusInfoModal"

const BusInfoModalExample = () => {

    const stop = {
        id: 1,
        name: "Museo del Jade", 
        latitude: 9.933102329459889,
        longitude: -84.07883146031479,
        description: 'Museo',
        visited: false
    }

    const stop1 = {
        id: 2,
        name: "Museo del Oro", 
        latitude: 9.933102329459889,
        longitude: -84.07883146031479,
        description: 'Museo',
        visited: false
    }

    const [showModal, setShowModal] = useState(false)
    const [clickedStop, setClickedStop] = useState({})

    const selectModalToShow = (index) => {
        setShowModal(true)
    }

    return (
        <View style={{height: '100%', width: '100%'}}>
            <Pressable 
                style={{width: 100, height: 100, backgroundColor:'red'}} 
                onPress={
                    () => {
                        setClickedStop(stop)
                        setShowModal(!showModal)
                    }
                }
            />
                        <Pressable 
                style={{width: 100, height: 100, backgroundColor:'blue'}} 
                onPress={
                    () => {
                        setClickedStop(stop1)
                        setShowModal(!showModal)
                    }
                }
            />
            <BusInfoModal 
                stopName={clickedStop.name} 
                stopId={clickedStop.id} 
                showModal={showModal} 
                setShowModal={setShowModal}
                startYTranslation={Dimensions.get('window').height}
            />
        </View>
    )

}
export default BusInfoModalExample
