import React, {useRef} from 'react';
import {StyleSheet, Text, View, Image, Switch, Platform} from 'react-native';
import images from '../../assets/images';

const SchedulesCard: React.FC = () => {
  const days = useRef(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  return (
    <View style={styles.mainCard}>
      <View style={styles.titleRow}>
        <View style={{flex: 4}}>
          <Text style={styles.titleText}>Weekday Wake Up</Text>
        </View>
        <View style={{flex: 1}}>
          <Switch />
        </View>
      </View>
      <View style={styles.scheduleTimeRow}>
        <View style={{flex: 0.5}}>
          <Text style={styles.timeText}>6:30am - 7:30am</Text>
        </View>
        <View style={{flex: 0.5}}>
          <Text style={styles.repeatText}>Repeat Weekly</Text>
        </View>
        <View style={{flex: 0.5}} />
      </View>
      <View style={styles.daysRow}>
        {days.current.map((x, index) => (
          <View
            key={index}
            style={[
              styles.daysViewWrapper,
              index % 2 === 0 && styles.daysViewActiveWrapper,
            ]}>
            <Text
              style={[styles.dayText, index % 2 === 0 && styles.dayActiveText]}>
              {x}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.summaryRow}>
        <View style={styles.summaryLeftSideWrapper}>
          <View>
            <Text style={styles.summaryText}>Main Bedroom </Text>
          </View>
          <View>
            <Text style={styles.summaryText}>Living Room</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.summaryRightSideWrapper}>
            <Text style={styles.tintText}>Clear Tint</Text>
            <Image
              source={images.blueLightBtn}
              style={{width: 45, height: 45}}
            />
          </View>
          <View style={styles.summaryRightSide}>
            <Text style={styles.summaryText}>Duratiom 1h </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainCard: {
    marginTop: 10,
    flex: 1,
    maxHeight: 210,
    marginHorizontal: '3%',
    paddingHorizontal: '2.5%',
    borderRadius: 8,
    backgroundColor: '#FFF',
    elevation: 4,
  },
  titleRow: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: 'rgb(52, 101, 127)',
    fontSize: 22,
    fontFamily: 'IBMPlexSans-Bold',
  },
  scheduleTimeRow: {
    flex: 0.5,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    color: 'rgb(52,101,127)',
    fontSize: 14,
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
  },
  repeatText: {
    color: 'rgb(52,101,127)',
    fontSize: 14,
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
  },
  daysRow: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  daysViewWrapper: {
    flex: 1,
    borderColor: 'rgb(52,101,127)',
    borderWidth: 1,
    marginHorizontal: '1%',
    paddingVertical: '1%',
    borderRadius: 20,
  },
  daysViewActiveWrapper: {
    backgroundColor: 'rgb(52,101,127)',
  },
  dayText: {
    color: 'rgba(52,101,127, 1)',
    textAlign: 'center',
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 12,
  },
  dayActiveText: {color: 'rgb(255,255,255)'},
  summaryRow: {
    flex: 1.4,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryLeftSideWrapper: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  summaryRightSideWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  summaryText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: 'rgba(52,101,127, 0.6)',
  },
  tintText: {
    color: 'rgb(88,166,232)',
    fontSize: 16,
    fontFamily: 'IBMPlexSans-Bold',
  },
  summaryRightSide: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default SchedulesCard;
