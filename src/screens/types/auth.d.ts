import {StackNavigationProp} from "@react-navigation/stack";
import WellnessScreen from "../WellnessScreen";

export type AuthRootStackParamList = {
    Wellness: undefined;
    Details: undefined;
    Settings: undefined;
};
type ScreenRouteProp = RouteProp<AuthRootStackParamList, 'Wellness'>;

type ScreenNavigationProp = StackNavigationProp<
    AuthRootStackParamList,
    'Wellness'
    >;

export type Props = {
    route: ScreenRouteProp;
    navigation: ScreenNavigationProp;
};
