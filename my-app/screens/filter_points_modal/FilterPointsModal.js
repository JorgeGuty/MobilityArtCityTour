

import { styles } from "./FilterPointsModal.style";
import MyModal from "../../styleguide/modal/MyModal";
import { Dimensions, View, Switch, Pressable } from "react-native";
import { MACTText, MACTTextBold } from "../../constants/fonts";
import { useEffect, useState } from "react";
import { Colors } from "../../constants/colors";

const FilterPointsModal = ({setShowModal, showModal, startYTranslation, filterItems}) => {

    const [filterSelected, setFilterSelected] = useState(false)
    const [filterIsOpen, setFilterIsOpen] = useState(false)

    const availableFilters = [
        {
          filterName:  "Abiertos ahora",
          value: "isOpen",
          seeks: true,
          variable: filterIsOpen,
          setter: setFilterIsOpen
        }
    ]

    useEffect(() => {
        let selectedFilters = []
        availableFilters.forEach((filter) => {
            !! filter.variable ? selectedFilters.push({value: filter.value, seeks: filter.seeks}) : null
        })
        selectedFilters.length > 0 ? setFilterSelected(true) : setFilterSelected(false)
        filterItems(selectedFilters)
    }, [availableFilters])

    const clearFilters = () => {
        availableFilters.forEach((filter) => {
            filter.setter(false)
        })    
    }

    const renderHeader = () => {
        return (
            <View
                style={styles.header}
            >
                <MACTTextBold style={styles.title}>Filtros</MACTTextBold>
            </View>
        )
    }

    const renderBody = () => {
        return (
            <View
                style={styles.body}
            >
                <View
                    style={styles.filters}
                >
                {
                    availableFilters.map((filter, index) => {
                        return (
                            <View 
                                style={styles.filterItem}
                                key={index}
                            >
                                <MACTText
                                    style={styles.filterName}
                                >{filter.filterName}</MACTText>
                                <Switch       
                                    trackColor={{ false: Colors.actGray4, true: Colors.actOrange2 }}
                                    ios_backgroundColor = {Colors.actGray4}
                                    onValueChange={filter.setter}
                                    value={filter.variable}
                                ></Switch>
                            </View>
                        )
                    })
                }
                </View>
                <View
                    style={styles.submitButtons}
                >
                    <Pressable
                        style={styles.button}
                        onPress={clearFilters}
                    >
                        <MACTText
                            style={styles.buttonText}
                        >
                            Limpiar
                        </MACTText>
                    </Pressable>
                    <Pressable
                        style={[styles.button, !! filterSelected ? styles.showResultsButton : null ]}
                        onPress={() => setShowModal(false)}
                    >
                        {
                            filterSelected 
                            ?   <MACTTextBold
                                    style={styles.showResultsText}
                                >
                                    Mostrar resultados
                                </MACTTextBold> 
                            :   <MACTText
                                    style={styles.buttonText}
                                >
                                    Mostrar resultados
                                </MACTText>
                        }
                    </Pressable>
                </View>
            </View>
        )
    }

    return (
        <MyModal
            setShowModal={setShowModal}
            showModal={showModal}
            yTranslationAmount={0}
            modalHeight={Dimensions.get('screen').height - Dimensions.get('screen').height / 5}
            header={renderHeader()}
            body={renderBody()}
            startYTranslation={startYTranslation}
            includeX
        /> 
    )

}

export default FilterPointsModal