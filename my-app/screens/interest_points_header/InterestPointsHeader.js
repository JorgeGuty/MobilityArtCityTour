import { useEffect, useRef } from "react"
import { Animated, Dimensions, Pressable, ScrollView, View } from "react-native"
import { Constants } from "../../constants/constants"
import { styles } from "./InterestPointsHeader.style"
import Filters from "../../assets/icons/boton_filtros.svg"
import CategoryTab from "./category_tab/CategoryTab"

const InterestPointsHeader = ({show, selectedCategory, setSelectedCategory, categories, filterPoints}) => {

    const headerVerticalTranslation = useRef(new Animated.Value(0)).current

    const hideHeader = () => {
        Animated.sequence([
          Animated.timing(
            headerVerticalTranslation,
            {
              toValue: 0,
              duration: 1000,
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
              duration: 1000,
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
        <Pressable
          style={styles.filters}
          onPress={() => console.log('FILTERS')}	
        >
          <Filters height={35} width={35}/>
        </Pressable>
        <ScrollView 
          style={styles.categories}
          horizontal
        >
          {
            categories.map((category, index) =>               
                <CategoryTab
                  key={index}
                  categoryName={category}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />              
            )
        }
        </ScrollView>
        
      </Animated.View>
    )

}

export default InterestPointsHeader