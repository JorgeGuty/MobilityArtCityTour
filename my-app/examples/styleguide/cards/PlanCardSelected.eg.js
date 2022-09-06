import { StyleSheet, View } from 'react-native'
import React from 'react'
import { gradients } from '../../../constants/gradients'
import { H7 } from '../../../constants/fonts'
import i18n from '../../../configs/i18n.config'
import PlanCardSelected from '../../../styleguide/cards/PlanCardSelected/PlanCardSelected'

const PlanCardSelectedExample = () => {
  return (
    <View>
      <PlanCardSelected
        ButtonText='Seleccionar'
        gradientColor={gradients.gradient2}
        headerRender={
          <View style={styles.containerPlan}>
            <H7>{i18n.t('LOREM')}</H7>
          </View>
          }
      >
        <View style={styles.containerPlan}>
          <H7>{i18n.t('LOREM')}</H7>
        </View>
      </PlanCardSelected>
    </View>
  )
}

export default PlanCardSelectedExample

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 22,
    paddingVertical: 22,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container2: {

    backgroundColor: '#F5F5DC',
    paddingHorizontal: 22,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100
  },
  iconStyle: {
    color: '#DADADA'
  },
  widthContainer: {
    width: 297
  },
  containerPlan: {
    paddingHorizontal: 20
  }

})
