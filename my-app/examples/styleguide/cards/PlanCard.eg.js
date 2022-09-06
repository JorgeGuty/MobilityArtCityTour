import { View, StyleSheet } from 'react-native'
import React from 'react'
import PlanCard from '../../../styleguide/cards/PlanCard/PlanCard'
import { gradients } from '../../../constants/gradients'
import { Button1, H5, Subtitle2, Body2 } from '../../../constants/fonts'
import i18n from '../../../configs/i18n.config'

const cardHeader = () => {
  return (
    <View>
      <H5>Header text test</H5>
      <Subtitle2>Subtitle text test</Subtitle2>
    </View>
  )
}

const PlanCardExample = () => {
  return (
    <View>
      <PlanCard
        gradientColor={gradients.gradient2}
        ButtonText={
          <Button1>
            Button text test
          </Button1>
        }
        onPress={() => {
          console.log('PlanCardExample Test')
        }}
        headerRender={cardHeader()}
      >
        <View style={styles.speedTextContainer}>
          <Button1 style={styles.speedTextColor}>"Button test"</Button1>
          <Body2 style={styles.speedTextDetailColor}>{i18n.t('LOREM')}</Body2>
        </View>
      </PlanCard>
    </View>
  )
}

export default PlanCardExample

const styles = StyleSheet.create({

})
