import { Pressable, View } from "react-native"
import NavigationMap from "../../screens/home/NavigationMap/NavigationMap"
import { Dimensions } from "react-native"
import { useState } from "react"
const NavigationMapExample = () => {

  const [showStops, setShowStops] = useState(true)
  
  const initialRegion = {
    latitude: 9.93320,
    longitude: -84.07443,
    latitudeDelta: 0.0032,
    longitudeDelta: 0.0031
  }

  const stops = [
    {
      name: "Museo del Jade", 
      latitude: 9.933102329459889,
      longitude: -84.07883146031479
    },
    {
      name: "Galería Nacional",
      latitude: 9.934839216718778,
      longitude: -84.07742079459402
    },
    {
      name: "Museos del Banco Central",
      latitude: 9.933536716560706,
      longitude: -84.07402211199698
    },
    {
      name: "Centro de Patrimonio",
      latitude: 9.931424861881835,
      longitude: -84.07506236200061
    },
    {
      name: "Alianza Francesa",
      latitude: 9.931482589304355,
      longitude: -84.08015128453218
    }

  ]
  
  return (
      <View style={{ width: Dimensions.get('screen').width, height: Dimensions.get('screen').height }}>
        <NavigationMap initialRegion={initialRegion} stops={stops} showStops={showStops}></NavigationMap>
      </View>
    )
  }
  
  export default NavigationMapExample