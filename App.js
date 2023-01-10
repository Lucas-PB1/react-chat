import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Auth/Login/Login';
import Register from './src/Auth/Register/Register';
const Stack = createNativeStackNavigator();


export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Home} />
          <Stack.Screen name='Registro' component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


