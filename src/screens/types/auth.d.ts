import {StackNavigationProp} from '@react-navigation/stack';

export type AuthRootStackParamList = {
  HomeControl: undefined;
  Wellness: undefined;
  Details: undefined;
  Settings: undefined;
  MyView: undefined;
};
type ScreenRouteProp = RouteProp<AuthRootStackParamList, 'HomeControl'>;

type ScreenNavigationProp = StackNavigationProp<
  AuthRootStackParamList,
  'HomeControl'
>;

export type Props = {
  route: ScreenRouteProp;
  navigation: ScreenNavigationProp;
};
