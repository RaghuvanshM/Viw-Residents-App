import React, {useRef} from 'react';
import {StatusBar, StyleSheet, View, FlatList} from 'react-native';
import {Props} from '../types/auth';
import ManageUserCard from '../../components/ManagerUsers/ManageUserCard';
import MyViewHeader from '../../components/MyViewHeader';

const ManageUsers: React.FC<Props> = ({navigation}) => {
  const tabHeight = 50;
  const usersData = useRef([
    {
      name: 'Emily Jackson',
      email: 'emilyjackson298@gmail.com',
      checkedList: [
        'Add and manage users',
        'Create and edit schedules',
        'Override windows',
      ],
      isMainUser: true,
    },
    {
      name: 'Will Smith',
      email: 'willsmith99@gmail.com',
      checkedList: ['Create and edit schedules', 'Override windows'],
      isMainUser: false,
    },
    {
      name: 'Sara Jackson',
      email: 'saraJJJJJ99@gmail.com',
      checkedList: ['Create and edit schedules', 'Override windows'],
      isMainUser: false,
    },
    {
      name: 'Sara Jackson',
      email: 'saraJJJJ9@gmail.com',
      checkedList: ['Create and edit schedules', 'Override windows'],
      isMainUser: false,
    },
    {
      name: 'Sara Jackson',
      email: 'saraJJJJ9@gmail.com',
      checkedList: ['Create and edit schedules', 'Override windows'],
      isMainUser: false,
    },
    {
      name: 'Sara Jackson',
      email: 'saraJJ99@gmail.com',
      checkedList: ['Create and edit schedules', 'Override windows'],
      isMainUser: false,
    },
  ]);

  return (
    <View style={styles.base}>
      <MyViewHeader
        navigation={navigation}
        headerTitle={'Manage Users'}
        hasAddIcon
      />
      <View style={{width: '100%'}}>
        <FlatList
          data={usersData.current}
          keyExtractor={(item, index) => item.email + '_index_' + index}
          contentContainerStyle={{alignItems: 'center'}}
          renderItem={({item, index}) => (
            <ManageUserCard
              name={item.name}
              email={item.email}
              checkedList={item.checkedList}
              isMainUser={item.isMainUser}
              onEdit={() => {
                console.log('On Edit Called ' + item);
              }}
              isLastElement={index === usersData.current.length - 1}
              lastElementHeight={tabHeight}
            />
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
    fontFamily: 'IBMPlexSans',
    fontSize: 18,
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
