import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {Props} from '../types/auth';
import {getUser} from '../../module/selectors';
import {useSelector} from 'react-redux';
import Plusicon from 'react-native-vector-icons/AntDesign';
import ScheduleCardComponet from '../../components/Schedule/ScheduleCard';
const ScheduleScreen: React.FC<Props> = ({navigation}) => {
  const usersData = useSelector(getUser);
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={usersData}
        style={{marginBottom: '5%'}}
        keyExtractor={(item: any, index: any) =>
          item.ScheduleName + '_index_' + index
        }
        contentContainerStyle={{alignItems: 'center'}}
        renderItem={({item, index}) => (
          <>
            <ScheduleCardComponet userData={item} key={index} />
          </>
        )}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('NewSchedule')}
        style={styles.fab}>
        <Plusicon name="plus" color="white" size={30} />
        <Text style={styles.fabIcon}> New schedule</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ScheduleScreen;
const styles = StyleSheet.create({
  newScheduletext: {
    height: 100,
    width: 50,
    backgroundColor: 'red',
  },
  fab: {
    position: 'absolute',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: 'rgb(88, 166, 232)',
    borderRadius: 30,
    elevation: 8,
    marginRight: '25%',
    flexDirection: 'row',
  },
  fabIcon: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'IBMPlexSans-Bold',
  },
});
