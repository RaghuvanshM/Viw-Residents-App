import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {Props} from "./types/auth";

const SettingsScreen: React.FC<Props> = ({navigation}) => {
    return (
        <View style={styles.base}>
            <Text>Settings screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    base: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
export default SettingsScreen;
