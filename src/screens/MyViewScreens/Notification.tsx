import React from 'react';
import {Text, View, StatusBar, StyleSheet} from 'react-native';
import MyViewHeader from '../../components/MyViewHeader';
import {Props} from '../types/auth';
const NotificationScreen: React.FC<Props> = ({navigation}) => {
  return (
    <>
      <View style={{marginVertical: StatusBar.currentHeight}}>
        <MyViewHeader navigation={navigation} headerTitle={'Notifications'} />
      </View>
      <Text style={styles.notificatintext}>Notifications on/off here</Text>
    </>
  );
};
export default NotificationScreen;
const styles = StyleSheet.create({
  notificatintext: {
    fontSize: 18,
    color: 'rgb(47, 47, 47)',
    fontFamily: 'IBMPlexSans-Regular',
    margin: '3%',
  },
});
