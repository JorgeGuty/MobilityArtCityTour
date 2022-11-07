import { Pressable, View } from "react-native"
import { MACTText } from "../../../constants/fonts"
import { styles } from "./CategoryTab.style"
import TabBar from '../../../assets/icons/barra_tab.svg'


const CategoryTab = ({category, selectedCategory, setSelectedCategory, accessibilitySettings}) => {
    return (
        <Pressable 
            style={styles.container}
            onPress={() => setSelectedCategory(category)}
        >
            <MACTText
                style={[styles.label, category.value === selectedCategory.value ? styles.selectedLabel : null, { fontSize: accessibilitySettings.fontAmplifier +   14 }]}
            >{category.text}</MACTText>
            {
                category.value === selectedCategory.value &&
                <TabBar
                    style={styles.bar}
                />
            }
        </Pressable>
    )
}

export default CategoryTab