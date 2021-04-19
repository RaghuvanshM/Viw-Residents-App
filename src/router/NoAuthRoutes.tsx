import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import InitialScreen from '../screens/InitialScreen';
import CarouselScreen from "../screens/CarouselScreen";

const PreLoginStack = createStackNavigator();

export default function NoAuthRoutes() {
  return (
    <NavigationContainer>
      <PreLoginStack.Navigator>
        <PreLoginStack.Screen name="Initial" component={InitialScreen} />
        <PreLoginStack.Screen name="Carousel" component={CarouselScreen} />
      </PreLoginStack.Navigator>
    </NavigationContainer>
  );
}
