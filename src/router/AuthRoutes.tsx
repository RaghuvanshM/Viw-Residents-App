import React from 'react';
import {View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeControlScreen from '../screens/ControlScreens/HomeControlScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import images from '../assets/images';
import MyViewScreen from '../screens/MyViewScreens/MyView';
import ManageUsers from '../screens/MyViewScreens/ManageUsers';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{header: () => null}}>
      <HomeStack.Screen name="HomeControl" component={HomeControlScreen} />
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

const WellnessStack = createStackNavigator();

const WellnessStackScreen = () => {
  return (
    <WellnessStack.Navigator>
      <WellnessStack.Screen name="Settings" component={SettingsScreen} />
      <WellnessStack.Screen name="Details" component={DetailsScreen} />
    </WellnessStack.Navigator>
  );
};

const MyViewStack = createStackNavigator();

const MyViewStackScreen = () => {
  return (
    <MyViewStack.Navigator screenOptions={{header: () => null}}>
      <MyViewStack.Screen name="MyView" component={MyViewScreen} />
      <MyViewStack.Screen name="ManageUsers" component={ManageUsers} />
    </MyViewStack.Navigator>
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
          name="HomeControl"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Control',
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  style={[
                    {
                      width: 60,
                      height: 25,
                      resizeMode: 'contain',
                    },
                    !focused && {tintColor: 'rgba(255, 255,255,0.3)'},
                  ]}
                  source={images.tabIcon1}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Wellness"
          component={WellnessStackScreen}
          options={{
            tabBarLabel: 'Wellness',
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  style={[
                    {
                      width: 60,
                      height: 25,
                      resizeMode: 'contain',
                    },
                    !focused && {tintColor: 'rgba(255, 255,255,0.3)'},
                  ]}
                  source={images.tabIcon2}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Schedule"
          component={SettingsStackScreen}
          options={{
            tabBarLabel: 'Schedule',
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  style={[
                    {
                      width: 60,
                      height: 25,
                      resizeMode: 'contain',
                    },
                    !focused && {tintColor: 'rgba(255, 255,255,0.3)'},
                  ]}
                  source={images.tabIcon3}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="MyView"
          component={MyViewStackScreen}
          options={{
            tabBarLabel: 'My View',
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  style={[
                    {
                      width: 60,
                      height: 25,
                      resizeMode: 'contain',
                    },
                    !focused && {tintColor: 'rgba(255, 255,255,0.3)'},
                  ]}
                  source={images.tabIcon4}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
