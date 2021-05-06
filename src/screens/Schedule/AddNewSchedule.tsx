import React, {useState, useRef} from 'react';
import MyViewHeader from '../../components/MyViewHeader';
import cloneDeep from 'lodash/cloneDeep';
import {
  View,
  StyleSheet,
  StatusBar,
  Switch,
  TextInput,
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native';
import RoomChecklistSelection from '../../components/Schedule/RoomChecklist';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Props} from '../types/auth';
const AddNewScheduleScreen: React.FC<Props> = ({navigation}) => {
  const newUser = useRef({
    ScheduleName: '',
    time: '',
    checkedList: [
      {
        label: 'Main Bedroom',
        key: 'mainbedroom',
        value: false,
      },
      {
        label: 'Living Room',
        key: 'livingroom',
        value: false,
      },
      {
        label: 'Guest Bedroom',
        key: 'guestbedroom',
        value: false,
      },
    ],
    days: [
      {
        label: 'Sun',
        key: 'sun',
        value: false,
      },
      {
        label: 'Mon',
        key: 'mon',
        value: false,
      },
      {
        label: 'Tue',
        key: 'tue',
        value: false,
      },
      {
        label: 'Wed',
        key: 'wed',
        value: false,
      },
      {
        label: 'Thu',
        key: 'thu',
        value: false,
      },
      {
        label: 'Fri',
        key: 'fri',
        value: false,
      },
      {
        label: 'Sat',
        key: 'sat',
        value: false,
      },
    ],
  });
  const [name, setName] = useState('');
  const [checkList, setCheckList] = useState(
    cloneDeep(newUser.current.checkedList),
  );
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View>
      <MyViewHeader
        navigation={navigation}
        headerTitle={'Create'}
        hasAddIcon
        isIcon={false}
      />
      <View style={{justifyContent: 'space-between'}}>
        <View>
          <View style={{flexDirection: 'row', margin: '3%'}}>
            <TextInput
              onChangeText={text => setName(text)}
              style={styles.textInput}
              value={name}
              placeholderTextColor={'rgb(163, 163, 163)'}
              placeholder="Schedule Name"
              autoCompleteType={'name'}
              autoCorrect={false}
            />
            <Switch
              trackColor={{
                false: 'rgb(197, 197 ,197)',
                true: 'rgb(126, 211 ,128)',
              }}
              thumbColor={'white'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              style={{transform: [{scaleX: 2}, {scaleY: 2}]}}
              value={isEnabled}
            />
          </View>
          <View style={styles.horizontal} />
        </View>
        <View>
          <Text style={styles.roomstext}>Rooms</Text>
          {checkList &&
            checkList.map((x, i) => (
              <RoomChecklistSelection
                key={i + '_checklist'}
                text={x.label}
                isSelected={x.value}
                changeChecked={() => {
                  const checkListValue = [...checkList];
                  checkListValue[i].value = !checkListValue[i].value;
                  setCheckList(checkListValue);
                }}
              />
            ))}
          <View style={{...styles.horizontal, marginTop: 20}} />
          <View>
            {newUser.current.days &&
              newUser.current.days.map((x, i) => (
                <TouchableOpacity
                  key={i}
                  style={
                    x.value ? styles.daysitem : styles.daysitemnotselected
                  }>
                  <Text
                    style={
                      x.value ? styles.weedaytext : styles.weedaytextnotselected
                    }>
                    {x.label}
                  </Text>
                </TouchableOpacity>
              ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddNewScheduleScreen;
const styles = StyleSheet.create({
  headerText: {
    height: 85 - (StatusBar.currentHeight || 0),
    paddingHorizontal: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 5,
    width: '100%',
    alignItems: 'center',
  },
  roomstext: {
    fontSize: 18,
    fontFamily: 'IBMPlexSans-Regular',
    color: 'rgb(52, 101, 127)',
    paddingHorizontal: '4%',
    marginTop: '3%',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
  },
  backIcon: {height: 28, width: 28, resizeMode: 'contain'},
  backText: {
    fontSize: 18,
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
    color: 'rgb(52,101,127)',
  },
  textInput: {
    width: '85%',
    fontSize: 24,
    fontFamily: 'IBMPlexSans-Regular',
  },
  horizontal: {
    width: '95%',
    borderWidth: 1,
    alignSelf: 'center',
    borderColor: 'rgb(197 ,197, 197)',
  },
  daysitem: {
    padding: 10,
    borderWidth: 1,
    marginLeft: 10,
    width: wp('11%'),
    borderRadius: 30,
    backgroundColor: 'rgb(52, 101, 127)',
  },
  daysitemnotselected: {
    padding: 10,
    borderWidth: 1,
    marginLeft: 10,
    width: wp('11%'),
    borderRadius: 30,
    borderColor: 'rgb(52,101,127)',
  },
  weedaytext: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 14,
    color: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  weedaytextnotselected: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 14,
    color: 'rgb(52,101,127)',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
