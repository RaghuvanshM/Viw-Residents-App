import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Props} from './types/no.auth';

const CarouselScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.base}>
      <Text>Carousel screen</Text>
      <Button title="Go to Initial" onPress={() => navigation.goBack()} />
    </View>
  );
};
const styles = StyleSheet.create({
  base: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
export default CarouselScreen;
