import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';
import {authUser} from '../module/actions';

type RootStackParamList = {
  Initial: undefined;
  Carousel: undefined;
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Initial'>;

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Initial'
>;

type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

const InitialScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.base}>
      <Text>Initial screen</Text>
      <Button
        title="Go to Carousel"
        onPress={() => navigation.navigate('Carousel')}
      />
      <Text>Login screen</Text>
      <Button
        title="Go to Login"
        onPress={() => {
          dispatch(
            authUser({
              id: '123',
              firstName: 'Viral',
              lastName: 'Pattani',
              email: 'viral.pattani@piri.ai',
            }),
          );
        }}
      />
    </View>
  );
};
const CarouselScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.base}>
      <Text>Carousel screen</Text>
      <Button
        title="Go to Initial"
        onPress={() => navigation.navigate('Initial')}
      />
    </View>
  );
};

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

const styles = StyleSheet.create({
  base: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
