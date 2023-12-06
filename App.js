import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/Header';
import { ConsultScreen } from './screens/ConsultScreen';
import { RegisterScreen } from './screens/RegisterScreen';


export default function App() {

  const Stack = createNativeStackNavigator();
  
  return (

    <NavigationContainer>
        {/* <Header /> */}
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Menu' component={MenuScreen} />
        <Stack.Screen name='ConsultScreen' component={ConsultScreen} />
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <HomeScreen />
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
