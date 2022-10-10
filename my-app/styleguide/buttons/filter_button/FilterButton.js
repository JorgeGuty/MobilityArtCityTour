import Filters from "../../../assets/icons/boton_filtros.svg"
import { Animated, Dimensions, Pressable, ScrollView, View } from "react-native"
import { styles } from "./FilterButton.style"

const FilterButton = ({setShowFiltersModal}) => {
    return (
      <Pressable
        style={styles.filters}
        onPress={() => setShowFiltersModal(true)}	
      >
        <Filters height={35} width={35}/>
      </Pressable>
    )
}

export default FilterButton