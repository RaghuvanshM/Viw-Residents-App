import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DetailsScreen = () => {
  return (
    <View style={styles.base}>
      <Text>Details!</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  base: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default DetailsScreen;
