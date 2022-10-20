import { useEffect, useState, useRef } from 'react'
import { Dimensions, Pressable, Text, View } from 'react-native'
import SelectedRouteModal from '../selected_route_modal/SelectedRouteModal'
import NavigationMap from './NavigationMap/NavigationMap'
import BusInfoModal from '../bus_info_modal/BusInfoModal'
import StopInfoModal from '../stop_info_modal/StopInfoModal'
import InterestPointsHeader from '../interest_points_header/InterestPointsHeader'
import HomeHeader from './header/HomeHeader'
import InterestPointsModal from '../interest_points_modal/InterestPointsModal'
import { Constants } from '../../constants/constants'
import FilterPointsModal from '../filter_points_modal/FilterPointsModal'

// Simulation Files
import getActiveRoutes from '../../simulations/GetRoutes.sim'
import { getCategories, getPointsOfInterest, textSearch } from '../../servercalls/PointsOfInterest.calls.js'
import SearchPointsHeader from '../search_points_header/SearchPointsHeader'


const Home = ({ navigation }) => {

  let referenceRouteCoord
  let referencePointsCoord

  const [selectedRoute, setSelectedRoute] = useState({})
  const [showStops, setShowStops] = useState(true)
  const [showBusInfoModal, setShowBusInfoModal] = useState(false)
  const [showStopInfoModal, setShowStopInfoModal] = useState(false)
  const [showFiltersModal, setShowFiltersModal] = useState(false)
  const [showSearchHeader, setShowSearchHeader] = useState(false)
  const [clickedStop, setClickedStop] = useState({})
  const [modeToggler, setModeToggler] = useState(true)

  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")

  const [points, setPoints] = useState([])
  const [filteredPoints, setFilteredPoints] = useState([])

  const getActiveRoutesFromServer = async () => {
    const data = await getActiveRoutes()
    setSelectedRoute(data[0])
  }

  const getCategoriesFromServer = async () => {
    const serverCategories = await getCategories()
    setCategories(serverCategories)
    setSelectedCategory(serverCategories[0])
  }

  const getPointsFromServer = async (category) => {
    //TODO: Poner coordenadas pormedio de la ruta
    category+="";
    const serverPoints = await getPointsOfInterest(9.933102329459889.toString(), -84.07883146031479.toString(), (1500).toString(), category)
    setPoints([...serverPoints.results])
    setFilteredPoints([...serverPoints.results])
  }

  const filterPoints = (filters) => {
    let filtersResult = points
    filters.forEach(filter => {
      filtersResult = filtersResult.filter(point => point[filter.value] === filter.seeks)
    })
    setFilteredPoints(filtersResult)
  }

  const searchPoints = (search) => {
    let searchResult = points.filter(point => point.placeName.includes(search, 0) || point.category[0].includes(search, 0))
    setFilteredPoints(searchResult)
  }

  const resetPoints = () => {
    setFilteredPoints([...points])
  }

  useEffect(()=>{
    getActiveRoutesFromServer()
    getCategoriesFromServer()
    getPointsFromServer()
  }, [])

  useEffect(()=>{
    console.log("Changed selected route")
  }, [selectedRoute])

  useEffect(()=>{
    getPointsFromServer(selectedCategory)
  }, [selectedCategory])

  const onPressBusInfo = (stop) => {
    setClickedStop(stop)
    setShowBusInfoModal(true)
  }

  const onPressStopInfo = (stop) => {
    setClickedStop(stop)
    setShowStopInfoModal(true)
  }

  const onPressPoint = (point) => {
    console.log(point.placeName)
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

  const navigateToMenu = () => {
    navigation.navigate('Menu')
  }

  return (
    <View style={{height: Dimensions.get('screen').height, width: Dimensions.get('screen').width}}>
      {
        selectedRoute.stops !== undefined && categories !== [] //&& filteredPoints.length > 0
        ?
          <>

            <NavigationMap
              stops={selectedRoute.stops}
              interestPoints={filteredPoints}
              showStops={modeToggler}
              onPressStop={onPressStopInfo}
              onPressPoint={onPressPoint}
            />

            <InterestPointsHeader
              show={!modeToggler}
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              setShowFiltersModal={setShowFiltersModal}
            />

            <HomeHeader
              toggler={modeToggler}
              setToggler={setModeToggler}
              filterPoints={filterPoints}
              setShowSearchHeader={setShowSearchHeader}
              goToMenu={navigateToMenu}
            ></HomeHeader>

            <SearchPointsHeader
              show={showSearchHeader}
              searchPoints={searchPoints}
              setShow={setShowSearchHeader}
              resetPoints={resetPoints}
            ></SearchPointsHeader>

            <InterestPointsModal
              show={!modeToggler}
              points={filteredPoints}
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

            <FilterPointsModal
              setShowModal={setShowFiltersModal}
              showModal={showFiltersModal}
              startYTranslation={Dimensions.get('window').height}
              filterItems={filterPoints}
            />

          </>
        : null
      }

    </View>
  )
}

export default Home
