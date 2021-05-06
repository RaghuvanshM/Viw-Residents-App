import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type AuthRootStackParamList = {
  HomeControl: undefined;
  Wellness: undefined;
  Details: undefined;
  Settings: undefined;
  MyView: undefined;
  ManageUsers: undefined;
  LightControl: undefined;
  NewSchedule: undefined;
  NewSchedule: undefined;
  Intelligence: undefined;
};
type ScreenRouteProp = RouteProp<AuthRootStackParamList, 'HomeControl'>;
export type ScreenNavigationProp = StackNavigationProp<
  AuthRootStackParamList,
  'HomeControl'
>;
export type Props = {
  route: ScreenRouteProp;
  navigation: ScreenNavigationProp;
};
