import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
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
  const [data, setData] = useState([
    {
      id: 1,
      title: 'Weekday Wake Up',
      startTime: '6:30am',
      endTime: '7:30am',
      repeat: 'Repeat Weekly',
      activeDays: ['Mon', 'Thu', 'Sat', 'Sun'],
      activeRooms: ['Main Bedroom', 'Living Room'],
      tint: 1,
      duration: 60,
      isActive: true,
    },
    {
      id: 2,
      title: 'Weekday Sleep',
      startTime: '6:30am',
      endTime: '7:30am',
      repeat: 'Repeat Weekly',
      activeDays: ['Thu', 'Fri', 'Sat'],
      activeRooms: ['Main Bedroom', 'Living Room'],
      tint: 2,
      duration: 60,
      isActive: false,
    },
    {
      id: 3,
      title: 'Weekend Meditation',
      startTime: '6:30am',
      endTime: '7:30am',
      repeat: 'Repeat Weekly',
      activeDays: ['Thu', 'Fri', 'Sat'],
      activeRooms: ['Main Bedroom', 'Living Room'],
      tint: 2,
      duration: 60,
      isActive: true,
    },
  ]);
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
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id + '_index_' + index}
        style={{
          width: '100%',
          height: '70%',
          paddingTop: (StatusBar.currentHeight || 0) + 10,
        }}
        contentContainerStyle={{
          width: '100%',
          paddingBottom: (StatusBar.currentHeight || 0) + 20,
        }}
        renderItem={({item, index}) => (
          <SchedulesCard
            scheduleData={item}
            key={index}
            saveData={savingData => {
              const clonedData = [...data];
              clonedData[index] = savingData;
              setData(clonedData);
            }}
          />
        )}
      />
      <View style={styles.newScheduleMainWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate('CreateEditSchedule')}
          style={styles.newScheduleWrapper}>
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
