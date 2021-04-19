import React from "react";
import {useDispatch} from "react-redux";
import {Button, StyleSheet, Text, View} from "react-native";
import {authUser} from "../module/actions";
import {Props} from "./types/no.auth";

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
const styles = StyleSheet.create({
    base: {flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'},
});
export default InitialScreen;
