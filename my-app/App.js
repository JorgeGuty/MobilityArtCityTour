import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/home/Home';
import { SafeAreaView, ScrollView } from 'react-native';
import NavigationMapExample from './examples/screens/NavigationMap.eg';
import StopCardExample from './examples/screens/StopCard.eg';
import SelectedRouteModalExample from './examples/screens/SelectedRouteModal.eg';
import BusInfoModal from './screens/bus_info_modal/BusInfoModal';
import BusInfoModalExample from './examples/screens/BusInfoModal.eg';
import LockedScreen from './styleguide/layouts/lockedScreen/LockedScreen';
import Login from './screens/login/Login';
import ChangePassword from './screens/change_password/ChangePassword';
import SendCode from './screens/reset_password/send_code/SendCode';
import EnterCode from './screens/reset_password/enter_code/EnterCode';
import ResetPassword from './screens/reset_password/reset_password/ResetPassword';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      	<Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
          <Stack.Screen name='Home' component={Home} options={{ animation: 'fade' }} />
          <Stack.Screen name='Login' component={Login} options={{ animation: 'fade' }} />
          <Stack.Screen name='ChangePassword' component={ChangePassword} options={{ animation: 'fade' }} />
          <Stack.Screen name='SendCode' component={SendCode} options={{ animation: 'fade' }} />
          <Stack.Screen name='EnterCode' component={EnterCode} options={{ animation: 'fade' }} />
          <Stack.Screen name='ResetPassword' component={ResetPassword} options={{ animation: 'fade' }} />
        </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaView style={{ flex: 1 }}>
    //   <BusInfoModalExample></BusInfoModalExample>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
