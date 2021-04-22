import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';

interface LabelProps {
  count: number;
  size: number;
  isHorizontal: boolean;
  allColors: string[];
}
export default ({count, size, isHorizontal, allColors}: LabelProps) => {
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        flexDirection: isHorizontal ? 'row' : 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {new Array(count).fill(0).map((e, i) => {
        return (
          <View
            key={i}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: isHorizontal ? 'column' : 'row',
            }}>
            <Animated.View
              style={isHorizontal ? style.horizontalLine1 : style.verticalLine1}
            />
            <Animated.View
              style={{
                height: 20,
                width: 20,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                borderRadius: 10,
              }}>
              <Animated.View
                style={{
                  height: 10,
                  width: 10,
                  backgroundColor: allColors[i],
                  borderRadius: 5,
                }}
              />
            </Animated.View>
            <Animated.View
              style={isHorizontal ? style.horizontalLine2 : style.verticalLine2}
            />
          </View>
        );
      })}
    </View>
  );
};
const style = StyleSheet.create({
  horizontalLine1: {
    width: 1,
    height: 20,
    marginBottom: 5,
    backgroundColor: '#fff',
  },
  horizontalLine2: {
    width: 1,
    height: 20,
    marginTop: 5,
    backgroundColor: '#fff',
  },
  verticalLine1: {
    width: 20,
    height: 1,
    marginRight: 5,
    backgroundColor: '#fff',
  },
  verticalLine2: {
    width: 20,
    height: 1,
    marginLeft: 5,
    backgroundColor: '#fff',
  },
});
