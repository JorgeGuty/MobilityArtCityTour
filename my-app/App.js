import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/home/Home';
import { SafeAreaView, ScrollView } from 'react-native';
import NavigationMapExample from './examples/screens/NavigationMap.eg';
import StopCardExample from './examples/screens/StopCard.eg';
import IconButtonExample from './examples/styleguide/buttons/IconButton.eg';
import SelectedRouteModalExample from './examples/screens/SelectedRouteModal.eg';

const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      	<Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
          <Stack.Screen name='Home' component={Home} options={{ animation: 'fade' }} />
        </Stack.Navigator>
    </NavigationContainer>
    /*<SafeAreaView style={{ flex: 1 }}>
        <NavigationMapExample></NavigationMapExample>
        <SelectedRouteModalExample></SelectedRouteModalExample>
    </SafeAreaView>*/
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