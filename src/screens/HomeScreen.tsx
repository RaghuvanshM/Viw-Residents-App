import React from "react";
import {useDispatch} from "react-redux";
import {Button, StyleSheet, Text, View} from "react-native";
import {signOutUser} from "../module/actions";
import {Props} from "./types/auth";

const HomeScreen: React.FC<Props> = ({navigation}) => {
    const dispatch = useDispatch();
    return (
        <View style={styles.base}>
            <Text>Home screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
            <Button
                title="Go to Logout"
                onPress={() => {
                    dispatch(signOutUser());
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    base: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
export default HomeScreen;
