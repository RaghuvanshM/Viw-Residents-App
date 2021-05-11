import React, {useRef} from 'react';
import {StyleSheet, Text, View, Image, Switch, Platform} from 'react-native';
import images from '../../assets/images';
interface SchedulesCardProps {
  saveData: (data: any) => void;
  scheduleData: {
    title: string;
    startTime: string;
    endTime: string;
    repeat: string;
    activeDays: string[];
    activeRooms: string[];
    tint: number;
    duration: number;
    isActive: boolean;
  };
}

const SchedulesCard: React.FC<SchedulesCardProps> = ({
  saveData,
  scheduleData: {
    title,
    startTime,
    endTime,
    repeat,
    activeDays,
    activeRooms,
    tint,
    duration,
    isActive,
  },
}) => {
  const days = useRef(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  const tints = useRef(['Clear', 'Light', 'Medium', 'Dark']);
  const tintImaages = useRef([
    images.blueClearBtn,
    images.blueLightBtn,
    images.blueMediumBtn,
    images.blueDarkBtn,
  ]);
  return (
    <View style={styles.mainCard}>
      <View style={styles.titleRow}>
        <View style={{flex: 4}}>
          <Text style={[styles.titleText, !isActive && styles.inActiveColor]}>
            {title}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Switch
            value={isActive}
            onValueChange={isActiveFlag =>
              saveData({
                title,
                startTime,
                endTime,
                repeat,
                activeDays,
                activeRooms,
                tint,
                duration,
                isActive: isActiveFlag,
              })
            }
            trackColor={{
              false: 'rgba(120, 120, 128, 0.16)',
              true: 'rgb(126,211,33)',
            }}
            thumbColor={'#ffffff'}
          />
        </View>
      </View>
      <View style={styles.scheduleTimeRow}>
        <View
          style={{
            flex: 0.6,
            borderRightWidth: 0.5,
            justifyContent: 'center',
            alignItems: 'flex-start',
            borderRightColor: 'rgb(196,196,196)',
          }}>
          <Text style={[styles.timeText, !isActive && styles.inActiveColor]}>
            {startTime} - {endTime}
          </Text>
        </View>
        <View
          style={{
            flex: 0.6,
            borderLeftWidth: 0.5,
            justifyContent: 'center',
            borderRightColor: 'rgb(196,196,196)',
            alignItems: 'center',
          }}>
          <Text style={[styles.repeatText, !isActive && styles.inActiveColor]}>
            {repeat}
          </Text>
        </View>
        <View style={{flex: 0.5}} />
      </View>
      <View style={styles.daysRow}>
        {days.current.map((x, index) => (
          <View
            key={index}
            style={[
              styles.daysViewWrapper,
              activeDays.indexOf(x) !== -1 &&
                (isActive
                  ? styles.daysViewActiveWrapper
                  : styles.inActiveBackgroundColor),
              !isActive && styles.inActiveBorderColorColor,
            ]}>
            <Text
              style={[
                styles.dayText,
                activeDays.indexOf(x) !== -1
                  ? styles.dayActiveText
                  : !isActive && styles.inActiveColor,
              ]}>
              {x}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.summaryRow}>
        <View style={styles.summaryLeftSideWrapper}>
          {activeRooms.map((room, index) => (
            <View key={index}>
              <Text
                style={[styles.summaryText, !isActive && styles.inActiveColor]}>
                {room}
              </Text>
            </View>
          ))}
        </View>
        <View style={{flex: 1}}>
          <View style={styles.summaryRightSideWrapper}>
            <Text style={[styles.tintText, !isActive && styles.inActiveColor]}>
              {tints.current[tint]} Tint
            </Text>
            <Image
              source={tintImaages.current[tint]}
              style={{
                width: 45,
                height: 45,
              }}
            />
          </View>
          <View style={styles.summaryRightSide}>
            <Text
              style={[styles.summaryText, !isActive && styles.inActiveColor]}>
              Duration {Math.round(duration / 60)}h{' '}
            </Text>
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
    minHeight: 210,
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
    paddingBottom: 2,
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
  inActiveColor: {
    color: 'rgb(188,188,188)',
  },
  inActiveBackgroundColor: {
    backgroundColor: 'rgb(188,188,188)',
  },
  inActiveBorderColorColor: {
    borderColor: 'rgb(188,188,188)',
  },
});

export default SchedulesCard;
