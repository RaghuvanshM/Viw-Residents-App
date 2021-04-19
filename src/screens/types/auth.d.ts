import {StackNavigationProp} from "@react-navigation/stack";

export type AuthRootStackParamList = {
    Home: undefined;
    Details: undefined;
    Settings: undefined;
};
type ScreenRouteProp = RouteProp<AuthRootStackParamList, 'Home'>;

type ScreenNavigationProp = StackNavigationProp<
    AuthRootStackParamList,
    'Home'
    >;

export type Props = {
    route: ScreenRouteProp;
    navigation: ScreenNavigationProp;
};
