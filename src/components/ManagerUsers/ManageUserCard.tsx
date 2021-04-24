import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import images from '../../assets/images';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CheckBoxList from './CheckboxList';
interface ManageUserCardProps {
  name: string;
  email: string;
  onEdit?: (item: any) => void;
  isMainUser: boolean;
  checkedList: string[];
  isLastElement: boolean;
  lastElementHeight: number;
}
const ManageUserCard: React.FC<ManageUserCardProps> = ({
  name,
  email,
  isMainUser,
  isLastElement,
  lastElementHeight,
  onEdit,
  checkedList,
}) => {
  return (
    <View
      style={[
        styles.cardWarapper,
        isLastElement && {marginBottom: lastElementHeight + 25},
      ]}>
      <View style={styles.cardContactWrapper}>
        <View style={styles.cardContactImageWrapper}>
          <Image
            source={isMainUser ? images.contacts : images.contactBlue}
            style={styles.cardContactImage}
          />
        </View>
        <View style={{flex: 5}}>
          <Text style={[styles.user, styles.userName]}>{name}</Text>
          <Text style={[styles.user, styles.userEmail]}>{email}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={isMainUser ? styles.mainUser : styles.simpleUser}>
              {isMainUser ? 'Main user' : 'User'}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={onEdit} style={{flex: 0.6}}>
          <Image source={images.editUser} style={styles.cardContactImage} />
        </TouchableOpacity>
      </View>
      {checkedList.map((x, index) => (
        <CheckBoxList text={x} key={index} />
      ))}
    </View>
  );
};
export default ManageUserCard;
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
  },
  cardContactWrapper: {flexDirection: 'row', width: '100%'},
  cardContactImageWrapper: {flex: 1, alignItems: 'center'},
  cardContactImage: {marginTop: hp('1')},

  mainUser: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 14,
    color: 'rgb(255,198,0)',
    marginVertical: 2,
  },
  simpleUser: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 14,
    color: 'rgb(106,187,255)',
    marginVertical: 2,
  },
  user: {alignItems: 'center', color: 'rgb(52,101,127)'},
  userName: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 18,
  },
  userEmail: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 14,
  },
});
