import { Pressable, View } from "react-native"
import NavigationMap from "../../screens/home/NavigationMap/NavigationMap"
import { Dimensions } from "react-native"
import { useState } from "react"
import StopCard from "../../screens/selected_route_modal/StopCard/StopCard"
import VisitedLabel from "../../screens/selected_route_modal/StopCard/VisitedLabel/VisitedLabel"
const StopCardExample = () => {

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
  
  const [visited, setVisited] = useState(true)

  const onPress = () => {
    setVisited(!visited)
  }

  return (
      <View style={{ width: Dimensions.get('screen').width, height: 200 }}>
        <StopCard stopName={stops[0].name} stopDescripion="Museo" visited={visited} onPressStopCard={onPress} index={99}></StopCard>
      </View>
    )
  }
  
  export default StopCardExample