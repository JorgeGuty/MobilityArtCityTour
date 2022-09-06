import { View } from 'react-native'
import { Icon } from '../../../constants/icons'
import React from 'react'
import PlanButton from '../../../styleguide/buttons/PlanButton/PlanButton'
import { gradients } from '../../../constants/gradients'

const planButtonOnPressAction = () => {
  console.log('Testing Plan Button')
}

const PlanButtonExample = () => {
  return (
    <View>
      <PlanButton
        style={{
          colors: gradients.gradient1,
          colorsClicked: gradients.gradient5
        }}
        onPress={planButtonOnPressAction}
        icon={Icon.check}
      >
        Adquirí tu plan en una ventanilla kölbi
      </PlanButton>
      <PlanButton
        style={{
          colors: gradients.gradient2,
          colorsClicked: gradients.gradient6
        }}
        onPress={planButtonOnPressAction}
        icon={Icon.check}
      >
        Adquirí tu plan en una ventanilla kölbi
      </PlanButton>
      <PlanButton
        style={{
          colors: gradients.gradient3,
          colorsClicked: gradients.gradient7
        }}
        onPress={planButtonOnPressAction}
        icon={Icon.check}
      >
        Adquirí tu plan en una ventanilla kölbi
      </PlanButton>
      <PlanButton
        style={{
          colors: gradients.gradient4,
          colorsClicked: gradients.gradient8
        }}
        onPress={planButtonOnPressAction}
        icon={Icon.check}
      >
        Adquirí tu plan en una ventanilla kölbi
      </PlanButton>
    </View>
  )
}

export default PlanButtonExample
