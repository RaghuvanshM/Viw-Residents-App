import React, {useEffect, useRef} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Props} from '../types/auth';
import NoScheduleAvailable from '../../components/Schedule/NoSchduleAvailable';
import SchedulesCard from '../../components/Schedule/ScheduleCard';
const Schedules: React.FC<Props> = ({navigation}) => {
  const noSchedule = useRef(false);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  if (noSchedule.current) {
    return <NoScheduleAvailable />;
  }

  return (
    <View style={styles.base}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <SchedulesCard />
      <SchedulesCard />
      <View style={styles.newScheduleMainWrapper}>
        <TouchableOpacity style={styles.newScheduleWrapper}>
          <Text style={styles.newScheduleText}>+</Text>
          <Text style={styles.newScheduleText}>New Schedule</Text>
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
    backgroundColor: 'rgb(241,241,241)',
    marginTop: (StatusBar.currentHeight || 0) + 10,
  },
  newScheduleMainWrapper: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newScheduleWrapper: {
    backgroundColor: 'rgb(88,166,232)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    flexDirection: 'row',
  },
  newScheduleText: {
    color: 'rgb(255,255,255)',
    fontSize: 14,
    fontFamily: 'IBMPlexSans-Bold',
    marginHorizontal: 10,
  },
});

export default Schedules;
