import { View, FlatList, SafeAreaView } from 'react-native'
import ListItem from './ListItem'
import { StyleLateralMenu } from './LateralMenu.style'
import i18n from '../../../../configs/i18n.config'
import KolbiLogo from '../../../../assets/icons/kolbi_logo.svg'
import IconHome from '../../../../assets/icons/icon_home.svg'
import IconDevices from '../../../../assets/icons/icon_devices.svg'
import IconSmartphone from '../../../../assets/icons/icon_smartphone.svg'
import IconStore from '../../../../assets/icons/icon_store.svg'

const LateralMenu = ({ navigation }) => {
  const itemsData = [
    {
      text: i18n.t('LATERALMENU_HOME'),
      icon: <IconHome />,
      handleOnPress: () => { navigation.navigate('Home') }
    },
    {
      text: i18n.t('LATERALMENU_DEVICES'),
      icon: <IconDevices />,
      handleOnPress: () => { navigation.navigate('Home') }
    },
    {
      text: i18n.t('LATERALMENU_PREPLAN'),
      icon: <IconSmartphone />,
      handleOnPress: () => { navigation.navigate('Home') }
    },
    {
      text: i18n.t('LATERALMENU_POSTPLAN'),
      icon: <IconSmartphone />,
      handleOnPress: () => { navigation.navigate('Home') }
    },
    {
      text: i18n.t('LATERALMENU_HOMEPLAN'),
      icon: <IconHome />,
      handleOnPress: () => { navigation.navigate('Home') }
    },
    {
      text: i18n.t('LATERALMENU_BUSINESSPLAN'),
      icon: <IconStore />,
      handleOnPress: () => { navigation.navigate('Home') }
    }
  ]

  return (
    <SafeAreaView style={StyleLateralMenu.container}>
      <View style={StyleLateralMenu.headerContainer}>
        <KolbiLogo />
      </View>
      <FlatList
        data={itemsData}
        renderItem={({ item }) => <ListItem text={item.text} onPress={item.handleOnPress}>{item.icon}</ListItem>}
        keyExtractor={item => item.text}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={StyleLateralMenu.separator} />}
      />
    </SafeAreaView>
  )
}

export default LateralMenu
