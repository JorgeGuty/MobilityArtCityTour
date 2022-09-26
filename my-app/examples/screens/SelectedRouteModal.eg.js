import { Pressable, View } from "react-native"
import NavigationMap from "../../screens/home/NavigationMap/NavigationMap"
import { Dimensions } from "react-native"
import { useState } from "react"
import StopCard from "../../screens/selected_route_modal/StopCard/StopCard"
import VisitedLabel from "../../screens/selected_route_modal/StopCard/VisitedLabel/VisitedLabel"
import SelectedRouteModal from "../../screens/selected_route_modal/SelectedRouteModal"

const SelectedRouteModalExample = () => {

  const route = {
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
  }



  return (

        <SelectedRouteModal route={route}></SelectedRouteModal>

    )
  }
  
  export default SelectedRouteModalExample