import { useEffect, useState, useRef } from 'react'
import { Dimensions, Text, View } from 'react-native'
import SelectedRouteModal from '../selected_route_modal/SelectedRouteModal'
import NavigationMap from './NavigationMap/NavigationMap'

const Home = ({ navigation }) => {

  const serverRoutesData = [{
    name: "Ruta Davivienda",
    stops: [
        {
          id: 1,
          name: "Museo del Jade", 
          latitude: 9.933102329459889,
          longitude: -84.07883146031479,
          description: 'Museo',
          visited: false
        },
        {
          id: 2,
          name: "Galería Nacional",
          latitude: 9.934839216718778,
          longitude: -84.07742079459402,
          description: 'Museo',
          visited: false
        },
        {
          id: 3,
          name: "Museos del Banco Central",
          latitude: 9.933536716560706,
          longitude: -84.07402211199698,
          description: 'Museo',
          visited: false
        },
        {
          id: 4,
          name: "Centro de Patrimonio",
          latitude: 9.931424861881835,
          longitude: -84.07506236200061,
          description: 'Museo',
          visited: false
        },
        {
          id: 5,
          name: "Alianza Francesa",
          latitude: 9.931482589304355,
          longitude: -84.08015128453218,
          description: 'Museo',
          visited: false
        }
    
      ]
  }, {
    name: "Ruta Mirador",
    stops: [
        {
          id: 1,
          name: "Museo del Ojo", 
          latitude: 9.933102329459889,
          longitude: -84.07883146031479,
          description: 'Museo',
          visited: false
        },
        {
          id: 2,
          name: "Galería Nacional de Optica",
          latitude: 9.934839216718778,
          longitude: -84.07742079459402,
          description: 'Museo',
          visited: false
        },
        {
          id: 3,
          name: "Museos de Optica Visión",
          latitude: 9.933536716560706,
          longitude: -84.07402211199698,
          description: 'Museo',
          visited: false
        },
        {
          id: 4,
          name: "Centro de Patrimonio",
          latitude: 9.931424861881835,
          longitude: -84.07506236200061,
          description: 'Museo',
          visited: false
        },
        {
          id: 5,
          name: "Alianza Francesa",
          latitude: 9.931482589304355,
          longitude: -84.08015128453218,
          description: 'Museo',
          visited: false
        }
    
      ]
  }]

  const initialRegion = {
    latitude: serverRoutesData[0].stops[0].latitude,
    longitude: serverRoutesData[0].stops[0].longitude,
    latitudeDelta: 0.0061,
    longitudeDelta: 0.0061
  }

  const [selectedRoute, setSelectedRoute] = useState({})
  const [showStops, setShowStops] = useState(true)

  useEffect(()=>{
    setSelectedRoute(serverRoutesData[0])
  }, [])

  useEffect(()=>{
    console.log("Changed selected route")
  }, [selectedRoute])

  const onPressBusInfo = (index) => {
    console.log("Pressed")
  }

  const onPressStopInfo = (index) => {
    console.log("onPress")
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
              initialRegion={initialRegion} 
              stops={selectedRoute.stops} 
              showStops={showStops}
            />
            <SelectedRouteModal 
              route={selectedRoute} 
              setRoute={setSelectedRoute}
              onPressBusInfo={onPressBusInfo} 
              onPressStopInfo={onPressStopInfo}
            />
          </>
        : null
      }
    
    </View>
  )
}

export default Home
