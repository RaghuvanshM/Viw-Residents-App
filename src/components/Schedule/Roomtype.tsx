import React from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import images from '../../assets/images';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { color } from 'react-native-reanimated';

interface RoomtypeProps {
  text: string;
}
const RoomTypeList: React.FC<RoomtypeProps> = ({text}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 5}}>
      <View style={styles.points}></View>
      <Text style={styles.roomTypeText}>{text}</Text>
    </View>
  );
};
export default RoomTypeList;
const styles = StyleSheet.create({
  points: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'rgb(52, 101, 127)',
    marginVertical:'5%',
    marginHorizontal:'6%'
  },
  roomTypeText: {
    fontSize: 18,
    fontFamily:'Roboto-Regular',
    color:'rgb(52, 101, 127)'
  },
});
