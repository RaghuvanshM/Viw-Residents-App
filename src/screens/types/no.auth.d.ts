import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type NoAuthRootStackParamList = {
  Initial: undefined;
  Introduction: undefined;
};
type ScreenRouteProp = RouteProp<NoAuthRootStackParamList, 'Initial'>;

type ScreenNavigationProp = StackNavigationProp<
  NoAuthRootStackParamList,
  'Initial'
>;

export type Props = {
  route: ScreenRouteProp;
  navigation: ScreenNavigationProp;
};
