import React, {FC, useState} from 'react';
import {Switch} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Text, View, ImageBackground, Image, StyleSheet} from 'react-native';
import {sunset, tint1, arrowRight, cardimage1} from '../constants/Images';
interface RoomCardProps {
  hasWakeupAlarm?: boolean;
  roomStatus: 'Intelligence™' | 'Override' | 'Schedule';
  controlStatus: 'Light' | 'Dark' | 'Clear' | 'Medium';
  roomSubText: string;
  roomName: string;
}
const RoomCard: FC<RoomCardProps> = ({
  roomSubText,
  controlStatus,
  roomStatus,
  roomName,
  hasWakeupAlarm = false,
}) => {
  const [value, setValue] = useState(false);
  return (
    <View style={styles.shadowWrap}>
      <View style={styles.card}>
        <ImageBackground
          style={{
            width: '100%',
            height: 170,
          }}
          source={cardimage1}>
          <View
            style={{
              width: '100%',
              height: 170,
              backgroundColor: `rgba(0,0,0,${
                controlStatus === 'Clear'
                  ? 0
                  : controlStatus === 'Light'
                  ? 0.25
                  : controlStatus === 'Medium'
                  ? 0.50
                  : 0.75
              })`,
            }}>
            <Text
              style={{
                fontSize: 24,
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center',
                fontFamily: 'IBMPlexSans-Bold',
                marginTop: '15%',
              }}>
              {roomName}
            </Text>
            <View
              style={{
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'absolute',
                bottom: 5,
                width: '100%',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={sunset}
                  style={{width: 15, height: 15, marginRight: 5}}
                />
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 14,
                        fontFamily: 'IBMPlexSans-Regular',
                      }}>
                      {roomStatus + ' '}
                    </Text>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 14,
                        fontFamily: 'IBMPlexSans-Bold',
                      }}>
                      Active
                    </Text>
                  </View>
                  <Text
                    style={{
                      color:
                        roomStatus === 'Override'
                          ? 'rgb(126, 211, 33)'
                          : roomStatus === 'Schedule'
                          ? 'rgb(170, 170, 170)'
                          : 'rgb(255,255,255)',
                      fontSize: 12,
                      fontFamily: 'IBMPlexSans-Regular',
                    }}>
                    {roomSubText}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    fontFamily: 'IBMPlexSans-Medium',
                  }}>
                  {controlStatus}
                </Text>
                <Image
                  source={tint1}
                  style={{width: 50, height: 50, marginLeft: 5, marginTop: 10}}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={{backgroundColor: '#fff'}}>
          <View
            style={{
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              paddingVertical: 15,
              paddingHorizontal: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'gray',
                fontSize: 16,
                fontFamily: 'IBMPlexSans-Regular',
              }}>
              Schedules
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(176,219,255, 0.5)',
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 100,
              }}>
              <Text
                style={{
                  color: 'rgb(52,101,127)',
                  fontSize: 14,
                  fontFamily: 'IBMPlexSans-Regular',
                }}>
                + Add Schedule
              </Text>
            </TouchableOpacity>
          </View>
          {hasWakeupAlarm && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#fff',
                paddingBottom: 10,
                borderTopWidth: 0.5,
                borderColor: 'gray',
                marginHorizontal: 15,
                paddingTop: 10,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Switch
                  value={value}
                  thumbColor={'white'}
                  trackColor={{
                    false: 'rgb(126,211,33)',
                    true: 'rgb(126,211,33)',
                  }}
                  onValueChange={event => {
                    setValue(event);
                  }}
                />
                <View style={{marginLeft: 10}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 16,
                      color: 'rgb(52,101,127)',
                    }}>
                    Weekday Wake Up
                  </Text>
                  <Text style={{fontSize: 12, color: 'rgb(52,101,127)'}}>
                    Weekdays 6:30am - 7:30am
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={arrowRight}
                  style={{width: 30, height: 30, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
export default RoomCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    overflow: 'hidden',
    margin: 10,
  },
  shadowWrap: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});