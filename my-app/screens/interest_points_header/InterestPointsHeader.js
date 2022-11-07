import { useEffect, useRef } from "react"
import { Animated, Dimensions, Pressable, ScrollView, View } from "react-native"
import { Constants } from "../../constants/constants"
import { styles } from "./InterestPointsHeader.style"
import Filters from "../../assets/icons/boton_filtros.svg"
import CategoryTab from "./category_tab/CategoryTab"
import FilterButton from "../../styleguide/buttons/filter_button/FilterButton"

const InterestPointsHeader = ({show, selectedCategory, setSelectedCategory, categories, setShowFiltersModal, accessibilitySettings}) => {

    const headerVerticalTranslation = useRef(new Animated.Value(0)).current

    const hideHeader = () => {
        Animated.sequence([
          Animated.timing(
            headerVerticalTranslation,
            {
              toValue: 0,
              duration: Constants.animationsDuration,
              useNativeDriver: true
            }
          )
        ]).start()
      }
    
      const showHeader = () => {
        Animated.sequence([
          Animated.timing(
            headerVerticalTranslation,
            {
              toValue: Constants.homeHeaderHeight,
              duration: Constants.animationsDuration,
              useNativeDriver: true
            }
          )
        ]).start()
      }
    
    
      useEffect(() => {
        !!show ? showHeader() : hideHeader()
      },[show])

    return (
      <Animated.View style={[styles.header, { transform: [{ translateY: headerVerticalTranslation }] }]}>
        <FilterButton setShowFiltersModal={setShowFiltersModal} accessibilitySettings={accessibilitySettings}/>
        <ScrollView 
          style={styles.categories}
          horizontal
        >
          {
            categories.map((category, index) =>               
                <CategoryTab
                  key={index}
                  category={category}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  accessibilitySettings={accessibilitySettings}
                />              
            )
        }
        </ScrollView>
        
      </Animated.View>
    )

}

export default InterestPointsHeader