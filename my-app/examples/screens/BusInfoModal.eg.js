import { useState } from "react"
import { View, Pressable } from "react-native"
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

    const [showModal, setShowModal] = useState(false)

    return (
        <View style={{height: '100%', width: '100%'}}>
            <Pressable style={{width: 100, height: 100, backgroundColor:'red'}} onPress={() => setShowModal(!showModal)}></Pressable>
            <BusInfoModal stop={stop} showModal={showModal} setShowModal={setShowModal}></BusInfoModal>
        </View>
    )

}
export default BusInfoModalExample
