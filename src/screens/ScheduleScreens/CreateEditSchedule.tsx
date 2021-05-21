import React, {Fragment, useRef, useState} from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Switch,
  TextInput,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import {Props} from '../types/auth';
import MyViewHeader from '../../components/MyViewHeader';
import CheckBoxSelectionList from '../../components/ManagerUsers/CheckboxSelectionList';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RadioButton from '../../components/RadioButton';
import APPCONSTANTS from '../../constants/constants';
import {useSelector} from 'react-redux';
import {getIsInternalImage, getSelectedImage} from '../../module/selectors';
import images from '../../assets/images';
import Slider from '../../components/slider/Slider';
import cloneDeep from 'lodash/cloneDeep';
const window = Dimensions.get('window');
const ratio = window.height / window.width;
const CreateEditSchedule: React.FC<Props> = ({navigation}) => {
  const days = useRef(APPCONSTANTS.days);
  const selectedImage = useSelector(getSelectedImage);
  const isInternalImage = useSelector(getIsInternalImage);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scheduleRoomName, setScheduleRoomName] = useState('');
  const [isActive, setActive] = useState(false);
  const [roomTypes, setRoomType] = useState([] as any[]);
  const [activeDays, setActiveDays] = useState([] as any[]);
  const [repeatType, setRepeatType] = useState('Weekly');

  return (
    <View style={styles.base}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="rgb(255,255,255)"
      />
      <MyViewHeader navigation={navigation} headerTitle={'Create'} isIcon />
      <ScrollView style={styles.scrollStyle}>
        <View style={{paddingHorizontal: '5%'}}>
          <View style={styles.scrollContentStyle}>
            <View style={{width: '85%', paddingVertical: hp('1%')}}>
              <TextInput
                style={styles.scheduleText}
                placeholderTextColor={'rgb(163,163,163)'}
                placeholder={'Schedule Name'}
                value={scheduleRoomName}
                onChangeText={name => setScheduleRoomName(name)}
              />
            </View>
            <View>
              <Switch
                trackColor={{
                  false: 'rgba(120, 120, 128, 0.16)',
                  true: 'rgb(126,211,33)',
                }}
                value={isActive}
                thumbColor={'#ffffff'}
                onValueChange={value => setActive(value)}
              />
            </View>
          </View>
          <View style={styles.commonBlockStyle}>
            <View style={styles.commonBlockInnerStyle}>
              <Text style={styles.commonLabelStyle}>Rooms</Text>
            </View>
            <View>
              {APPCONSTANTS.roomTypes.map((room: any, index: number) => (
                <CheckBoxSelectionList
                  key={`room_type_${index}`}
                  text={room}
                  isSelected={roomTypes.some(r => r === room)}
                  customTextStyle={
                    roomTypes.indexOf(room) !== -1
                      ? {fontFamily: 'IBMPlexSans-Bold', marginBottom: 5}
                      : {opacity: 0.5, marginBottom: 5}
                  }
                  changeChecked={() => {
                    setRoomType(prevRoomTypes => {
                      const rooms = cloneDeep(prevRoomTypes);
                      const selectedRoomIndex = rooms.findIndex(
                        r => r === room,
                      );
                      if (selectedRoomIndex !== -1) {
                        rooms.splice(selectedRoomIndex, 1);
                      } else {
                        rooms.push(room);
                      }
                      return rooms;
                    });
                  }}
                />
              ))}
            </View>
          </View>
          <View style={styles.commonBlockStyle}>
            <View style={[styles.commonBlockInnerStyle, {marginBottom: 10}]}>
              <Text style={styles.commonLabelStyle}>Days</Text>
            </View>
            <View style={styles.daysRow}>
              {days.current.map((day, index) => (
                <TouchableOpacity
                  onPress={() => {
                    setActiveDays(prevActiveDays => {
                      const adays = cloneDeep(prevActiveDays);
                      const selectedAcDayIndex = adays.findIndex(
                        r => r === day,
                      );
                      if (selectedAcDayIndex !== -1) {
                        adays.splice(selectedAcDayIndex, 1);
                      } else {
                        adays.push(day);
                      }
                      return adays;
                    });
                    // setActiveDays
                  }}
                  key={index}
                  style={[
                    styles.daysViewWrapper,
                    activeDays.indexOf(day) !== -1 &&
                      (isActive
                        ? styles.daysViewActiveWrapper
                        : styles.inActiveBackgroundColor),
                    !isActive && styles.inActiveBorderColorColor,
                  ]}>
                  <Text
                    style={[
                      styles.dayText,
                      activeDays.indexOf(day) !== -1
                        ? styles.dayActiveText
                        : !isActive && styles.inActiveColor,
                    ]}>
                    {day}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.commonBlockStyle}>
            <View style={styles.commonBlockInnerStyle}>
              <Text style={styles.commonLabelStyle}>Repeat</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <RadioButton
                selected={repeatType === 'Weekly'}
                text={'Repeat Weekly'}
                changeRadio={() => setRepeatType('Weekly')}
              />
              <RadioButton
                selected={repeatType === 'Custom'}
                text={'Custom'}
                changeRadio={() => setRepeatType('Custom')}
              />
            </View>
          </View>
          <View style={{paddingVertical: hp('2%')}}>
            <View style={styles.timeScheduleWrapper}>
              <View style={{flex: 1}}>
                <Text style={styles.timeLabel}>Start time</Text>
                <Text style={styles.timeText}>6:30 AM</Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.timeLabel}>End time</Text>
                <Text style={styles.timeText}>7:30 AM</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <ImageBackground
            style={{height: hp('25%')}}
            source={
              isInternalImage
                ? selectedImage
                  ? images[selectedImage]
                  : images.initialWelnessHeader
                : {uri: selectedImage}
            }>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: `rgba(${APPCONSTANTS.controlStatusColor},${
                  selectedIndex === 0
                    ? APPCONSTANTS.controlStatusClearRate
                    : selectedIndex === 1
                    ? APPCONSTANTS.controlStatusLightRate
                    : selectedIndex === 2
                    ? APPCONSTANTS.controlStatusMediumRate
                    : APPCONSTANTS.controlStatusDarkRate
                })`,
              }}>
              <Text
                style={{
                  position: 'absolute',
                  color: '#fff',
                  top: '8%',
                  left: '10%',
                }}>
                Tint
              </Text>
              <Slider
                allColors={[
                  '#033D65',
                  '#3173A2',
                  '#66ADE0',
                  '#BBD9EF',
                ].reverse()}
                isHorizontal={true}
                texts={['Dark', 'Medium', 'Light', 'Clear'].reverse()}
                backgroundColor={'rgba(255,255,255,0.2)'}
                changeSelectedIndex={setSelectedIndex}
                size={wp('88%')}
                defaultIndex={selectedIndex}>
                <Fragment>
                  {selectedIndex === 0 && (
                    <Image
                      source={images.blueClearBtn}
                      resizeMode={'cover'}
                      style={styles.sliderImage}
                    />
                  )}
                  {selectedIndex === 1 && (
                    <Image
                      source={images.blueLightBtn}
                      resizeMode={'cover'}
                      style={styles.sliderImage}
                    />
                  )}
                  {selectedIndex === 2 && (
                    <Image
                      source={images.blueMediumBtn}
                      resizeMode={'cover'}
                      style={styles.sliderImage}
                    />
                  )}
                  {selectedIndex === 3 && (
                    <Image
                      source={images.blueDarkBtn}
                      resizeMode={'cover'}
                      style={styles.sliderImage}
                    />
                  )}
                </Fragment>
              </Slider>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.actionWrapper}>
          <View style={{flex: 1}}>
            <TouchableOpacity style={styles.discardWrapper}>
              <Image
                source={images.delete}
                style={{width: 24, height: 24, resizeMode: 'cover'}}
                resizeMode={'contain'}
              />
              <Text style={styles.discardText}>Disacard</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={styles.actionCancelWrapper}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionSaveWrapper}>
              <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(255,255,255)',
    marginTop: StatusBar.currentHeight,
  },
  scrollStyle: {
    height: '100%',
    width: '100%',
  },
  scrollContentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgb(197,197,197)',
  },
  scheduleText: {
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
    paddingVertical: hp('1%'),
    width: '100%',
    color: 'rgb(52,101,127)',
    fontSize: 22,
  },
  commonBlockStyle: {
    paddingVertical: hp('2%'),
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgb(197,197,197)',
  },
  commonBlockInnerStyle: {marginBottom: hp('0.5%')},
  commonLabelStyle: {
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
    color: 'rgb(52,101,127)',
    fontSize: 16,
  },
  daysRow: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    // paddingHorizontal: wp('5%'),
    // marginBottom: hp('1%'),
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
  inActiveColor: {
    color: 'rgb(188,188,188)',
  },
  inActiveBackgroundColor: {
    backgroundColor: 'rgb(188,188,188)',
  },
  inActiveBorderColorColor: {
    borderColor: 'rgb(188,188,188)',
  },
  timeScheduleWrapper: {
    marginBottom: hp('1%'),
    // marginHorizontal: '5.5%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  timeLabel: {
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
    color: 'rgb(52,101,127)',
    fontSize: 16,
  },
  timeText: {
    fontFamily: 'IBMPlexSans-Bold',
    color: 'rgb(52,101,127)',
    fontSize: 22,
  },
  sliderImage: {
    borderWidth: 2,
    width: wp(ratio >= 2 ? '22%' : '20%'),
    height: wp(ratio >= 2 ? '22%' : '20%'),
    marginTop: hp('2.5%'),
  },
  actionWrapper: {flexDirection: 'row', flex: 1, marginVertical: '4%'},
  discardWrapper: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '10%',
    height: 40,
  },
  discardText: {
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
    fontSize: 14,
    color: 'rgb(52,101,127)',
    textAlign: 'center',
    marginVertical: '5%',
  },
  actionCancelWrapper: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: '2%',
    height: 40,
  },
  cancelText: {
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
    fontSize: 14,
    color: 'rgb(52,101,127)',
    textAlign: 'center',
    marginVertical: '8%',
  },
  actionSaveWrapper: {
    flex: 1,
    backgroundColor: 'rgb(88,166,232)',
    justifyContent: 'center',
    marginHorizontal: '8%',
    borderRadius: 30,
    height: 40,
  },
  saveText: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 14,
    color: '#FFF',
    textAlign: 'center',
  },
});

export default CreateEditSchedule;
