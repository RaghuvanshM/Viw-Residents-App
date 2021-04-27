import React, {useCallback, useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
// @ts-ignore
import {MultiArcCircle} from 'react-native-circles';
export const window = Dimensions.get('window');
const ratio = window.height / window.width;
interface AnimatedCircleProps {
  speed?: number;
  airQuality: number;
  minNumber: number;
  radius: number;
  maxNumber: number;
}
const AnimatedCircle: React.FC<AnimatedCircleProps> = ({
  airQuality = 24,
  speed = 1000,
  radius = wp('40%'),
  minNumber = 0,
  maxNumber = 500,
}) => {
  const spinValue = useRef(new Animated.Value(0));
  const circleValues = useRef([
    {start: 271, end: 299, color: 'rgba(104,225,67,1)'},
    {start: 301, end: 329, color: 'rgba(255,255,186,1)'},
    {start: 331, end: 359, color: 'rgba(249,217,183,1)'},
    {start: 361, end: 29, color: 'rgba(244,181,180,1)'},
    {start: 31, end: 59, color: 'rgba(217,198,222,1)'},
    {start: 61, end: 89, color: 'rgba(210,179,189,1)'},
  ]);

  const spin = useCallback(
    (value: number) => {
      spinValue.current.setValue(0);
      Animated.timing(spinValue.current, {
        toValue: value,
        duration: ((speed * airQuality) / maxNumber) * 1000,
        useNativeDriver: true,
        easing: Easing.linear,
      }).start();
    },
    [spinValue, speed, airQuality, maxNumber],
  );

  useEffect(() => spin((airQuality * 180) / maxNumber), [
    airQuality,
    speed,
    maxNumber,
    spin,
  ]);

  const spinInterpolate = () =>
    spinValue.current.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg'],
    });
  const translateInterpolate = () =>
    spinValue.current.interpolate({
      inputRange: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360],
      outputRange: [0, 0, 0, 2, 2, 0, 0, 0, 2, 0, 0, 0, 0],
      // outputRange: [0, 1, 3, 4, 3, 1, 0, 1, 3, 4, 3, 1, 0],
    });
  /*const translateInterpolate = () =>
    spinValue.current.interpolate({
      inputRange: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360],
      outputRange: [0, 2, 5, 6, 5, 2, 0, 2, 3, 4, 3, 2, 0],
    });*/
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      {circleValues.current.map((x, i) => {
        return (
          <MultiArcCircle
            key={i}
            radius={radius}
            intervals={[{start: x.start, end: x.end}]}
            color={x.color}
            backgroundColor="transparent"
            width={wp('3%')}
          />
        );
      })}
      <View
        style={{
          justifyContent: 'center',
          marginTop: ratio >= 2 ? hp('12%') : hp('14%'), //ratio >= 2 ? hp('11.5%') : hp('13.5%'),
        }}>
        <Text style={styles.airQualityNumber}>{airQuality}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '80%', //'89%',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.minMaxDigits}>{minNumber}</Text>
        <Text style={styles.minMaxDigits}>{maxNumber}</Text>
      </View>

      <View style={styles.dotWrapper}>
        <Animated.View
          style={[
            styles.dotAnimationWrapper,
            {
              transform: [
                {rotateZ: spinInterpolate()},
                {translateX: translateInterpolate()},
              ],
            },
          ]}>
          <View style={styles.dotStyle} />
        </Animated.View>
      </View>
    </View>
  );
};

export default AnimatedCircle;
const styles = StyleSheet.create({
  dotWrapper: {
    position: 'absolute',
    top: hp(ratio >= 2 ? '15.5%' : '20%'), // hp(ratio >= 2 ? '17.5%' : '22%'),
    left: wp('9.5%'), //wp('4.5%'),
  },
  dotAnimationWrapper: {
    width: wp('71.0%'), //wp('81.0%'),
  },
  dotStyle: {
    width: wp('4%'),
    height: wp('4%'),
    borderRadius: wp('2%'),
    borderColor: 'rgb(52,101,127)',
    backgroundColor: '#FFFFFF',
    borderWidth: wp('1%'),
  },
  airQualityNumber: {
    textAlign: 'center',
    fontSize: 50, //70,
    color: 'rgb(22,1,68)',
    fontFamily: 'GothamMedium',
  },
  minMaxDigits: {
    fontSize: 20,
    color: 'rgb(23,23,23)',
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
  },
});
