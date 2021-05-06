import React, {useState} from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../assets/images';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CheckBoxSelectionList from './CheckboxSelectionList';
import cloneDeep from 'lodash/cloneDeep';

interface ItemProps {
  name: string;
  email: string;
  checkedList: {
    label: string;
    key: string;
    value: boolean;
  }[];
  isMainUser: boolean;
}
interface AddEditUserProps {
  isCreate: boolean;
  saveUserData: (prevState: any) => void;
  userData: ItemProps;
  toggleAddEdit: () => void;
  removeItem?: () => void;
}
const AddEditUser: React.FC<AddEditUserProps> = ({
  isCreate,
  userData,
  toggleAddEdit,
  removeItem,
  saveUserData,
}) => {
  console.log(userData);
  const [checkList, setCheckList] = useState(cloneDeep(userData.checkedList));
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);

  const SaveUserData = () =>
    saveUserData({
      name,
      email,
      checkedList: checkList,
      isMainUser: userData.isMainUser,
    });
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>
          {`${isCreate ? 'Create a New' : 'Edit'} User`}{' '}
        </Text>
        <TouchableOpacity
          style={styles.titleImageWrapper}
          onPress={toggleAddEdit}>
          <Image style={styles.titleImage} source={images.close} />
        </TouchableOpacity>
      </View>
      <View style={styles.titleWrapper}>
        <View style={styles.formWrapper}>
          <Image
            source={userData?.isMainUser ? images.contacts : images.contactBlue}
          />
          <View style={{flex: 0.9}}>
            <TextInput
              onChangeText={text => setName(text)}
              style={styles.allTextFieldWrapper}
              defaultValue={userData.name}
              value={name}
              placeholderTextColor={'rgb(83,154,180)'}
              placeholder="Full name"
              autoCompleteType={'name'}
              autoCorrect={false}
            />
            <TextInput
              onChangeText={text => setEmail(text)}
              defaultValue={userData.email}
              value={email}
              style={styles.allTextFieldWrapper}
              placeholder="Email"
              autoCompleteType={'email'}
              autoCorrect={false}
            />
            <View>
              {checkList &&
                checkList.map((x, i) => (
                  <CheckBoxSelectionList
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
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.titleWrapper, {marginTop: 20}]}>
        <View style={{flex: 1, opacity: isCreate ? 0 : 1}}>
          <TouchableOpacity
            disabled={isCreate}
            onPress={removeItem}
            style={styles.removeIconWrapper}>
            <Image source={images.delete} style={{height: 24, width: 24}} />
            <Text style={styles.removeIconText}>Remove</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionButton}>
          <TouchableOpacity onPress={toggleAddEdit} style={styles.cancelButton}>
            <Text style={styles.removeIconText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={SaveUserData} style={styles.submitButton}>
            <Text style={styles.saveIconText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default AddEditUser;
const styles = StyleSheet.create({
  cardWrapper: {
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
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: wp('4.5%'),
  },
  titleText: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 18,
    flex: 1,
    color: 'rgb(52,101,127)',
  },
  titleImageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  titleImage: {
    height: 14,
    width: 14,
  },
  formWrapper: {flexDirection: 'row', flex: 1, marginTop: hp('2%')},
  allTextFieldWrapper: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.23)',
    borderRadius: 5,
    height: 40,
    marginLeft: 10,
    paddingLeft: 10,
    flex: 0.95,
    color: 'rgba(15,63,82, 0.87)',
    marginVertical: 8,
    width: '100%',
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.23)',
    borderRadius: 5,
    height: 40,
    marginLeft: 10,
    flex: 0.95,
    marginVertical: 8,
    width: '100%',
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
  },
  removeIconText: {
    marginLeft: wp('1%'),
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
    fontSize: 14,
    color: 'rgb(52,101,127)',
  },
  saveIconText: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 14,
    color: 'rgb(255,255,255)',
  },
  removeIconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    width: '50%',
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 10,
  },
  submitButton: {
    flex: 1,
    backgroundColor: '#58a6e8',
    alignItems: 'center',
    borderRadius: hp('5%'),
    paddingVertical: 10,
    justifyContent: 'center',
  },
});
