import * as React from 'react';
import { NavigationContainer, createAppContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import Home from './pages/home';
import Forecast from './pages/forecast';

const Stack = createStackNavigator();

function App() {
  return (   
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">               
          <Stack.Screen name="Home" component={Home}  options={{ headerShown: false, ...TransitionPresets.SlideFromRightIOS, }} />         
          <Stack.Screen name="Forecast" component={Forecast}  options={{ headerShown: false, ...TransitionPresets.SlideFromRightIOS, }} />         
        </Stack.Navigator>
      </NavigationContainer>    
  );
}

export default App;