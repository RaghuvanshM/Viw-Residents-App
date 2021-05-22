import React from 'react';
import {Text, View, StatusBar, StyleSheet} from 'react-native';
import MyViewHeader from '../../components/MyViewHeader';
import {Props} from '../types/auth';
const NotificationScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.base}>
      <MyViewHeader
        navigation={navigation}
        headerTitle={'Notifications'}
        isIcon
      />
      <Text style={styles.notificatintext}>Notifications on/off here</Text>
    </View>
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
  base: {
    flex: 1,
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
  },
});
