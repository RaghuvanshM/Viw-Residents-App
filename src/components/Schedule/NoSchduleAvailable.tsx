import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import images from '../../assets/images';

const NoScheduleAvailable: React.FC = () => {
  return (
    <View style={styles.base}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="white"
      />
      <View style={styles.imagePart}>
        <Image source={images.calendar} style={styles.calendarImage} />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.welcomeScheduleWrapper}>
          <Text style={styles.welcomeScheduleText}>Welcome to Schedules</Text>
        </View>
        <View style={styles.scheduleText1Wrapper}>
          <Text style={styles.scheduleText1}>
            Schedules allow you to create recurring overrides to best fit your
            personal needs.{' '}
          </Text>
        </View>
        <View style={styles.scheduleText2Wrapper}>
          <Text style={styles.scheduleText2}>
            For example, if you want the glass to help you wake up during the
            week at 6:30am, you can create a schedule that changes your bedroom
            tint to Clear at 6:30am on weekdays.
          </Text>
        </View>
      </View>
      <View style={styles.buttonMainWrapper}>
        <TouchableOpacity style={styles.buttonInnerWrapper}>
          <Text style={styles.buttonText}>Create your first schedule</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginTop: StatusBar.currentHeight,
  },
  imagePart: {
    flex: 1.2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  calendarImage: {height: 110, width: 110, marginVertical: 10},
  textContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeScheduleWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  welcomeScheduleText: {
    color: 'rgb(52,101,127)',
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 24,
  },
  scheduleText1Wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '78%',
  },
  scheduleText1: {
    color: 'rgb(52,101,127)',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'IBMPlexSans-Medium',
  },
  scheduleText2Wrapper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '78%',
  },
  scheduleText2: {
    color: 'rgb(52,101,127)',
    textAlign: 'center',
    fontSize: 14,
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
  },
  buttonMainWrapper: {
    flex: 0.8,
    marginVertical: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonInnerWrapper: {
    backgroundColor: 'rgb(88,166,232)',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 40,
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 15,
  },
});

export default NoScheduleAvailable;
