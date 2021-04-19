import {StackNavigationProp} from "@react-navigation/stack";

export type NoAuthRootStackParamList = {
    Initial: undefined;
    Carousel: undefined;
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
