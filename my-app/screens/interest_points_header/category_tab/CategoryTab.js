import { Pressable, View } from "react-native"
import { MACTText } from "../../../constants/fonts"
import { styles } from "./CategoryTab.style"
import TabBar from '../../../assets/icons/barra_tab.svg'


const CategoryTab = ({categoryName, selectedCategory, setSelectedCategory}) => {

    return (
        <Pressable 
            style={styles.container}
            onPress={() => setSelectedCategory(categoryName)}
        >
            <MACTText
                style={[styles.label, categoryName === selectedCategory ? styles.selectedLabel : null]}
            >{categoryName}</MACTText>
            {
                categoryName === selectedCategory &&
                <TabBar
                    style={styles.bar}
                />
            }
        </Pressable>
    )
}

export default CategoryTab