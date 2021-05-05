import * as React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

interface LabelProps {
  size: number;
  count: number;
  selected: number;
  isHorizontal: boolean;
  allColors: string[];
  texts?: string[];
}
export default ({
  size,
  count,
  isHorizontal,
  allColors,
  selected,
  texts = ['Dark', 'Medium', 'Light', 'Clear'],
}: LabelProps) => {
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
            <Text
              style={[
                {
                  textAlign: 'right',
                  fontSize: 14,
                  position: 'absolute',
                  ...Platform.select({
                    ios: {
                      fontFamily:
                        selected === i ? 'IBMPlexSans-Bold' : 'IBMPlexSans',
                    },
                    android: {
                      fontFamily:
                        selected === i
                          ? 'IBMPlexSans-Bold'
                          : 'IBMPlexSans-Regular',
                    },
                  }),
                  color: 'white',
                },
                isHorizontal ? {top: wp('20%')} : {right: wp('28%')},
              ]}>
              {texts[i]}
            </Text>
            <Animated.View
              style={isHorizontal ? style.horizontalLine1 : style.verticalLine1}
            />
            <Animated.View
              style={{
                height: size / 20,
                width: size / 20,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                borderRadius: 10,
              }}>
              <Animated.View
                style={{
                  height: size / 40,
                  width: size / 40,
                  backgroundColor: allColors[i],
                  borderRadius: 5,
                }}
              />
            </Animated.View>
            <Animated.View
              style={isHorizontal ? style.horizontalLine2 : style.verticalLine2}
            />
            {i < count - 1 && (
              <Animated.View
                style={[
                  {
                    position: 'absolute',
                    width: 1,
                    height: size / 5.55,
                    backgroundColor: '#fff',
                  },
                  isHorizontal
                    ? {
                        height: 1,
                        width: size / 5.55,
                        left: '65%',
                      }
                    : {
                        top: '65%',
                      },
                ]}
              />
            )}
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
