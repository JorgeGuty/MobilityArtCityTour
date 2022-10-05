import { useEffect, useState, useRef } from 'react'
import { Dimensions, Text, View } from 'react-native'
import SelectedRouteModal from '../selected_route_modal/SelectedRouteModal'
import NavigationMap from './NavigationMap/NavigationMap'
import BusInfoModal from '../bus_info_modal/BusInfoModal'
import StopInfoModal from '../stop_info_modal/StopInfoModal'
import InterestPointsHeader from '../interest_points_header/InterestPointsHeader'
import HomeHeader from './header/HomeHeader'
import InterestPointsModal from '../interest_points_modal/InterestPointsModal'
import { Constants } from '../../constants/constants'


// Simulation Files
import getActiveRoutes from '../../simulations/GetRoutes.sim'
import { getCategories } from '../../simulations/PointsOfInterest.sim'

const Home = ({ navigation }) => {

  const [selectedRoute, setSelectedRoute] = useState({})
  const [showStops, setShowStops] = useState(true)
  const [showBusInfoModal, setShowBusInfoModal] = useState(false)
  const [showStopInfoModal, setShowStopInfoModal] = useState(false)
  const [clickedStop, setClickedStop] = useState({})
  const [modeToggler, setModeToggler] = useState(true)
  
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")

  const getActiveRoutesFromServer = async () => {
    const data = await getActiveRoutes()
    setSelectedRoute(data[0])
  }

  const getCategoriesFromServer = async () => {
    const serverCategories = await getCategories()
    setCategories(serverCategories)
    setSelectedCategory(serverCategories[0])
  }

  useEffect(()=>{
    getActiveRoutesFromServer()
    getCategoriesFromServer()
  }, [])

  useEffect(()=>{
    console.log("Changed selected route")
  }, [selectedRoute])

  const onPressBusInfo = (stop) => {
    setClickedStop(stop)
    setShowBusInfoModal(true)
  }

  const onPressStopInfo = (stop) => {
    setClickedStop(stop)
    setShowStopInfoModal(true)
  }

  const toggleStopVisited = (stop) => {
    var index = getStopIndex(stop)

    setSelectedRoute(() => {
      let modifiedRoute = {
        ...selectedRoute
      };
      modifiedRoute.stops[index].visited = !modifiedRoute.stops[index].visited
      return modifiedRoute
    })
  }

  const getStopIndex = (stop) => {
    var index = 0
    while (index < selectedRoute.stops.length) {
      if (selectedRoute.stops[index].id === stop.id) {
        break
      }
      index++
    }
    return index
  }

  return (
    <View style={{height: Dimensions.get('screen').height, width: Dimensions.get('screen').width}}>
      {
        selectedRoute.stops != undefined && categories != []
        ? 
          <>
            <NavigationMap  
              stops={selectedRoute.stops} 
              showStops={modeToggler}
              onPressStop={onPressStopInfo}
            />

            <InterestPointsHeader
              show={!modeToggler}
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            

            <HomeHeader
              toggler={modeToggler}
              setToggler={setModeToggler}
            ></HomeHeader>
          
            <InterestPointsModal
              show={!modeToggler}            
            ></InterestPointsModal>
          
            <SelectedRouteModal 
              route={selectedRoute} 
              setRoute={setSelectedRoute}
              onPressBusInfo={onPressBusInfo} 
              onPressStopInfo={onPressStopInfo}
              show={modeToggler}
            />


            <BusInfoModal 
                stopName={clickedStop.name} 
                stopId={clickedStop.id} 
                showModal={showBusInfoModal} 
                setShowModal={setShowBusInfoModal}
                startYTranslation={Dimensions.get('window').height}
            />

              <StopInfoModal 
                  stop={clickedStop}
                  showModal={showStopInfoModal} 
                  setShowModal={setShowStopInfoModal}
                  startYTranslation={Dimensions.get('window').height}
                  toggleStopVisited={toggleStopVisited}
              />

          </>
        : null
      }
    
    </View>
  )
}

export default Home
