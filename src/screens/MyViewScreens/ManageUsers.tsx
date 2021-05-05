import React, {useRef} from 'react';
import {StatusBar, StyleSheet, View, FlatList, Platform} from 'react-native';
import {Props} from '../types/auth';
import MyViewHeader from '../../components/MyViewHeader';
import AddEditUser from '../../components/ManagerUsers/AddEditUser';
import ManagerUserFlatListComponent from '../../components/ManagerUsers/ManagerUserFlatListComponent';
import {useDispatch, useSelector} from 'react-redux';
import {
  getShowAddUserManagement,
  getUserManagementList,
} from '../../module/selectors';
import {
  addUserManagement,
  editUserManagement,
  toggleAddNewUser,
} from '../../module/actions';

const ManageUsers: React.FC<Props> = ({navigation}) => {
  const tabHeight = 50;
  const usersData = useSelector(getUserManagementList);
  const showAdd = useSelector(getShowAddUserManagement);
  const newUser = useRef({
    name: '',
    email: '',
    checkedList: [
      {
        label: 'Add and manage users',
        key: 'addAndManageUser',
        value: false,
      },
      {
        label: 'Create and edit schedules',
        key: 'createAndEditSchedules',
        value: false,
      },
      {
        label: 'Override windows',
        key: 'overrideAllWindows',
        value: false,
      },
      {
        label: 'Configure apartment',
        key: 'configApartments',
        value: false,
      },
    ],
    isMainUser: false,
  });
  const dispatch = useDispatch();

  return (
    <View style={styles.base}>
      <MyViewHeader
        navigation={navigation}
        headerTitle={'Manage Users'}
        hasAddIcon
        addIconPress={() => dispatch(toggleAddNewUser(true))}
        isIcon={true}
      />
      <View style={{width: '100%'}}>
        <FlatList
          data={usersData}
          keyExtractor={(item, index) => item.email + '_index_' + index}
          contentContainerStyle={{alignItems: 'center'}}
          renderItem={({item, index}) => (
            <>
              {index === 0 && showAdd && (
                <AddEditUser
                  isCreate={true}
                  userData={newUser.current}
                  toggleAddEdit={() => dispatch(toggleAddNewUser(!showAdd))}
                  saveUserData={(data: any) =>
                    dispatch(addUserManagement(data))
                  }
                />
              )}
              <ManagerUserFlatListComponent
                userData={item}
                key={index}
                saveUserData={(data: any) => dispatch(editUserManagement(data))}
                isLastElement={index === usersData.length - 1}
                tabHeight={tabHeight}
              />
            </>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
  },
  headerText: {
    height: 85 - (StatusBar.currentHeight || 0),
    paddingHorizontal: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  headerTitle: {flexDirection: 'row'},
  headerTitleText: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 18,
    color: 'rgb(52,101,127)',
  },
  addUserIcon: {flexDirection: 'row'},
  addUserImage: {height: 26, width: 26, resizeMode: 'contain'},
});

export default ManageUsers;
