import { useState } from 'react'
import { View, FlatList, Text } from 'react-native'
import { Caption1, H5, Subtitle2, Button1, Body2 } from '../../../../constants/fonts'
import { StyleSpeedSelector } from './SpeedSelectorModal.style'
import i18n from '../../../../configs/i18n.config'
import ModalStructure from '../../ScreenStructure/ModalStructure/ModalStructure'
import { Constants } from '../../../../constants/constants'
import PlanCard from '../../../../styleguide/cards/PlanCard/PlanCard'
import PlanCardSelected from '../../../../styleguide/cards/PlanCardSelected/PlanCardSelected'
import { gradients } from '../../../../constants/gradients'
import IconWifi from '../../../../assets/icons/wifi.svg'
import TabBox from '../../../../styleguide/tabBoxs/tabBox/TabBox'

const SpeedSelectorModal = ({ navigation, route }) => {
  const [selectedOption, setSelectedOption] = useState(route.params.selected || null)

  const cardHeader = (selected, itemAmount) => {
    return (
      <View style={StyleSpeedSelector.cardHeaderContainer}>
        <H5 style={[StyleSpeedSelector.cardHeaderTitle, selected ? StyleSpeedSelector.colorTextCardSelected : null]}>{i18n.t('SPEEDDETAIL_CARDHEADERTITLE')}</H5>
        <View style={StyleSpeedSelector.cardHeaderAmountContainer}>
          <H5 style={[StyleSpeedSelector.cardHeaderAmount, selected ? StyleSpeedSelector.colorTextCardSelected : null]}>{itemAmount}</H5>
          <Subtitle2 style={[StyleSpeedSelector.cardHeaderAmountIVAI, selected ? StyleSpeedSelector.colorTextCardSelected : null]}>{i18n.t('SPEEDDETAIL_CARDHEADERIVAI')}</Subtitle2>
        </View>
        <Button1 style={StyleSpeedSelector.cardHeaderFrecuency}>{i18n.t('SPEEDDETAIL_CARDHEADER_FRECUENCY')}</Button1>
      </View>
    )
  }

  const renderPlanCard = (item) => {
    return (
      <PlanCard
        gradientColor={gradients.gradient2}
        ButtonText={
          <Button1 style={StyleSpeedSelector.cardButtonText}>
            {i18n.t('SPEEDDETAIL_CARDBUTTON')}
          </Button1>
        }
        onPress={() => {
          if (route.params.setNewSpeedData) {
            route.params.setNewSpeedData(item)
          }
          setSelectedOption(item.speed)
        }}
        headerRender={cardHeader(false, item.amount)}
        containerStyle={StyleSpeedSelector.planCardShadow}
        shadowStyle={StyleSpeedSelector.planCardMargin}
        buttonStyle={StyleSpeedSelector.planCardButton}
      >
        <View style={StyleSpeedSelector.speedContainer}>
          <IconWifi width='10%' height='100%' style={StyleSpeedSelector.expandButton} />
          <View style={StyleSpeedSelector.speedTextContainer}>
            <Button1 style={StyleSpeedSelector.speedTextColor}>{item.speed}</Button1>
            <Body2 style={StyleSpeedSelector.speedTextDetailColor}>{i18n.t('SPEEDDETAIL_CARDSPEED_DETAIL')}</Body2>
          </View>
        </View>
      </PlanCard>
    )
  }

  const renderPlanCardSelected = (item) => {
    return (
      <PlanCardSelected
        gradientColor={gradients.gradient2}
        headerRender={cardHeader(true, item.amount)}
        shadowStyle={StyleSpeedSelector.planCardMargin}
      >
        <View style={StyleSpeedSelector.speedContainer}>
          <IconWifi width='10%' height='100%' style={StyleSpeedSelector.expandButton} />
          <View style={StyleSpeedSelector.speedTextContainer}>
            <Button1 style={StyleSpeedSelector.speedTextColor}>{item.speed}</Button1>
            <Body2 style={StyleSpeedSelector.speedTextDetailColor}>{i18n.t('SPEEDDETAIL_CARDSPEED_DETAIL')}</Body2>
          </View>
        </View>
      </PlanCardSelected>
    )
  }

  const itemRender = ({ item }) => {
    return (
      <>
        {
          item.speed === selectedOption
            ? renderPlanCardSelected(item)
            : renderPlanCard(item)
        }
      </>
    )
  }

  const tabBoxChildren = Constants.speedDetailOptions.map(
    (element, index) => {
      return (
        <FlatList
          key={'key-flatlist' + index}
          data={element}
          renderItem={itemRender}
          horizontal
          keyExtractor={(_item, index) => 'key' + index}
          style={StyleSpeedSelector.scrollContainer}
          contentContainerStyle={StyleSpeedSelector.scrollContentContainer}
          persistentScrollbar
          ItemSeparatorComponent={
          () => <View style={StyleSpeedSelector.itemSeparator} />
        }
        />
      )
    })

  return (
    <ModalStructure
      navigation={navigation}
      titleComponent={<H5 style={StyleSpeedSelector.modaltitle}>{i18n.t('SPEEDDETAIL_CARDTITLE')}</H5>}
      styleContainer={StyleSpeedSelector.modalContainer}
    >
      <TabBox
        options={Constants.speedDetailOptionsTitles}
        style={StyleSpeedSelector.tabBoxTitles}
        shadowStyle={StyleSpeedSelector.tabBoxShadow}
      >
        {tabBoxChildren}
      </TabBox>
      <View style={StyleSpeedSelector.conditionsContainer}>
        <Caption1 style={StyleSpeedSelector.conditionsText}>
          {i18n.t('SPEEDDETAIL_CONDITIONS_LINE1')}
          <Text style={StyleSpeedSelector.textHighlighted}>
            {i18n.t('SPEEDDETAIL_CONDITIONS_LINE1_COLOR')}
          </Text>
        </Caption1>
        <Caption1 style={StyleSpeedSelector.conditionsText}>
          {i18n.t('SPEEDDETAIL_CONDITIONS_LINE2')}
        </Caption1>
        <Caption1 style={StyleSpeedSelector.conditionsText}>
          {i18n.t('SPEEDDETAIL_CONDITIONS_LINE3.1')}
          <Text style={StyleSpeedSelector.textHighlighted}>
            {i18n.t('SPEEDDETAIL_CONDITIONS_LINE3_COLOR')}
          </Text>
          {i18n.t('SPEEDDETAIL_CONDITIONS_LINE3.2')}
        </Caption1>
        <Caption1 style={StyleSpeedSelector.conditionsText}>
          {i18n.t('SPEEDDETAIL_CONDITIONS_LINE4')}
          <Text style={StyleSpeedSelector.textHighlighted}>
            {i18n.t('SPEEDDETAIL_CONDITIONS_LINE4_COLOR')}
          </Text>
        </Caption1>
        <Caption1 style={StyleSpeedSelector.conditionsText}>
          {i18n.t('SPEEDDETAIL_CONDITIONS_LINE5')}
          <Text style={StyleSpeedSelector.textHighlighted}>
            {i18n.t('SPEEDDETAIL_CONDITIONS_LINE5_COLOR')}
          </Text>
        </Caption1>
        <Caption1 style={StyleSpeedSelector.conditionsText}>
          {i18n.t('SPEEDDETAIL_CONDITIONS_LINE6')}
          <Text style={StyleSpeedSelector.textHighlighted}>
            {i18n.t('SPEEDDETAIL_CONDITIONS_LINE6_COLOR')}
          </Text>
        </Caption1>
      </View>

    </ModalStructure>
  )
}

export default SpeedSelectorModal
