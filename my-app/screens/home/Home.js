import { useEffect, useState, useRef } from 'react'
import { Dimensions, Text, View } from 'react-native'
import SelectedRouteModal from '../selected_route_modal/SelectedRouteModal'
import NavigationMap from './NavigationMap/NavigationMap'
import BusInfoModal from '../bus_info_modal/BusInfoModal'
// Simulation Files
import getActiveRoutes from '../../simulations/GetRoutes.sim'


const Home = ({ navigation }) => {

  const [selectedRoute, setSelectedRoute] = useState({})
  const [showStops, setShowStops] = useState(true)
  const [showBusInfoModal, setShowBusInfoModal] = useState(false)
  const [clickedStop, setClickedStop] = useState({})

  const getActiveRoutesFromServer = async () => {
    const data = await getActiveRoutes()
    setSelectedRoute(data[0])
  }

  useEffect(()=>{
    getActiveRoutesFromServer()
  }, [])

  useEffect(()=>{
    console.log("Changed selected route")
  }, [selectedRoute])

  const onPressBusInfo = (stop) => {
    setClickedStop(stop)
    setShowBusInfoModal(true)
  }

  const onPressStopInfo = (index) => {
    markStopVisited(index);
  }

  const markStopVisited = (index) => {
    setSelectedRoute(() => {
      let modifiedRoute = {
        ...selectedRoute
      };
      modifiedRoute.stops[index].visited = !modifiedRoute.stops[index].visited
      return modifiedRoute
    })
  }

  return (
    <View style={{height: Dimensions.get('screen').height, width: Dimensions.get('screen').width}}>
      {
        selectedRoute.stops != undefined 
        ? 
          <>
            <NavigationMap  
              stops={selectedRoute.stops} 
              showStops={showStops}
            />
            <SelectedRouteModal 
              route={selectedRoute} 
              setRoute={setSelectedRoute}
              onPressBusInfo={onPressBusInfo} 
              onPressStopInfo={onPressStopInfo}
            />
            <BusInfoModal 
                stopName={clickedStop.name} 
                stopId={clickedStop.id} 
                showModal={showBusInfoModal} 
                setShowModal={setShowBusInfoModal}
                startYTranstalion={Dimensions.get('window').height}
            />
          </>
        : null
      }
    
    </View>
  )
}

export default Home
