import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WellnessScreen from '../screens/WellnessScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{header: () => null}}>
      <HomeStack.Screen name="Wellness" component={WellnessScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

const SettingsStack = createStackNavigator();

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export default function AuthRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {backgroundColor: 'black'},
          labelStyle: {fontSize: 12, fontFamily: 'IBMPlexSans-Medium'},
          inactiveTintColor: 'rgba(255,255,255, 0.3)',
          activeTintColor: '#fff',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Wellness',
            tabBarIcon: ({focused, color, size}) => (
              <Image
                style={{
                  width: 55,
                  resizeMode: 'contain',
                  tintColor: focused ? 'white' : 'rgba(255,255,255, 0.3)',
                }}
                source={require('../assets/tabIcon1.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{
            tabBarLabel: 'Control',
            tabBarIcon: ({focused, color, size}) => (
              <Image
                style={{
                  width: 60,
                  height: 25,
                  resizeMode: 'contain',
                  tintColor: focused ? 'white' : 'rgba(255,255,255, 0.3)',
                }}
                source={require('../assets/tabIcon2.png')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
