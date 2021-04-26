import React from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import images from '../../assets/images';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface CheckBoxListProps {
  text: string;
}
const CheckBoxList: React.FC<CheckBoxListProps> = ({text}) => {
  return (
    <View style={styles.checkListWrapper}>
      <View style={styles.checkBoxWrapper}>
        <Image source={images.userDetailsChecked} style={styles.checkBox} />
      </View>
      <View style={styles.checkBoxTextWrapper}>
        <Text style={[styles.user, styles.checkedText]}>{text}</Text>
      </View>
    </View>
  );
};
export default CheckBoxList;
const styles = StyleSheet.create({
  checkListWrapper: {flexDirection: 'row', width: '100%'},
  checkBoxWrapper: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  checkBox: {marginTop: hp('1'), height: 24, width: 24},
  user: {alignItems: 'center', color: 'rgb(52,101,127)'},

  checkBoxTextWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  checkedText: {
    fontSize: 14,
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
  },
});
