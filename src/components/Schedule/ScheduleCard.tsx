import React from 'react';
import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../assets/images';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import WeekdayCard from './Weekdays';
import RoomTypeList from './Roomtype';
import {tint1} from '../../constants/Images';
interface UserScheduleCardProps {
  userData: ItemProps;
}
const ScheduleCard: React.FC<UserScheduleCardProps> = ({userData}) => {
  console.log(userData);
  return (
    <View style={styles.cardWarapper}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: '5%',
        }}>
        <Text style={styles.schedulenametext}>{userData.ScheduleName}</Text>
        <Text style={styles.schedulenametext}>{userData.ScheduleName}</Text>
      </View>
      <View style={{flexDirection: 'row', marginLeft: '5%'}}>
        <Text style={styles.timetext}>{userData.time}</Text>
        <View style={styles.verticleLine}></View>
        <Text style={styles.timetext}>{userData.Repeat}</Text>
      </View>
      <View style={{marginLeft: '3%'}}>
        <FlatList
          data={userData.days}
          horizontal={true}
          renderItem={({item, index}) => (
            <>
              <WeekdayCard
                weekday={item}
                key={index}
                keyExtractor={(item: any, index: any) =>
                  item.value + '_index_' + index
                }
                contentContainerStyle={{alignItems: 'center'}}
              />
            </>
          )}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '3%',
        }}>
        <View>
          {userData.checkedList
            .filter(x => x.value)
            .map((x, index) => (
              <RoomTypeList text={x.label} key={index} />
            ))}
        </View>
        <View>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.tinttext}>Clear Tint</Text>
            <Image
              source={tint1}
              style={{
                width: 45,
                height: 45,
                marginLeft: 5,
              }}
            />
          </View>
          <View>
            <Text style={styles.durationtext}>Duration 1h</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ScheduleCard;
const styles = StyleSheet.create({
  cardWarapper: {
    marginTop: 15,
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    paddingTop: 10,
    paddingVertical: 20,
    backgroundColor: 'white',
    width: '95%',
    alignSelf: 'center',
  },
  verticleLine: {
    height: '70%',
    width: 2,
    backgroundColor: 'rgb(196,196,196)',
    justifyContent: 'center',
    marginTop: '1%',
    marginHorizontal: '5%',
  },
  scheduleday: {
    flexDirection: 'row',
  },

  switchbutton: {},
  cardContactWrapper: {flexDirection: 'row', width: '100%'},
  cardContactImageWrapper: {flex: 1, alignItems: 'center'},
  cardContactImage: {marginTop: hp('1')},

  mainUser: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 14,
    color: 'rgb(52,101,127)',
    marginVertical: 2,
  },
  timetext: {
    fontSize: 14,
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
    color: 'rgb(52,101,127)',
    marginVertical: 10,
  },
  user: {alignItems: 'center', color: 'rgb(52,101,127)'},
  schedulenametext: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 20,
    color: 'rgb(52, 101, 127)',
  },
  userEmail: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 14,
  },
  tinttext: {
    fontSize: 18,
    fontFamily: 'IBMPlexSans-Bold',
    color: 'rgb(88, 166 ,232)',
  },
  durationtext:{
    fontSize:18,
    fontFamily:'Roboto-Regular',
    color:'rgb(52, 101, 127)'
  }
});
