import React, {useEffect, useRef} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
  ImageSourcePropType,
  Platform,
} from 'react-native';
import {Props} from '../types/auth';
import images from '../../assets/images';
import {useDispatch} from 'react-redux';
import {signOutUser} from '../../module/actions';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
const MyViewScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const currentDate = useRef(new Date());
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      StatusBar.setBarStyle('dark-content');
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor('white');
      }
      StatusBar.setTranslucent(true);
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  const LogoutUser = () => {
    dispatch(signOutUser());
  };

  return (
    <View style={styles.base}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="white"
      />
      <View style={styles.headerText}>
        <View style={{flex: 1}}>
          <Image source={images.contacts} style={{marginTop: hp('1')}} />
        </View>
        <View style={{flex: 5, justifyContent: 'space-around'}}>
          <Text style={[styles.user, styles.userName]}>Emily Jackson</Text>
          <Text style={[styles.user, styles.userUnit]}>Unit 201</Text>
          <View>
            <Text style={[styles.user, styles.userAddress]}>
              1897 Oracle Way
            </Text>
            <Text style={[styles.user, styles.userAddress]}>
              Los Angeles, CA 92101
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.mainUser]}>Main User</Text>
          </View>
          <View style={styles.logoutWrapper}>
            <View style={styles.flexView} />
            <TouchableOpacity style={styles.logoutButton} onPress={LogoutUser}>
              <Image source={images.logout} style={styles.logoutLogo} />
              <Text style={styles.logout}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.menuItems}>
        <TextWithIcon
          icon={images.manage}
          textString={'Manage Users'}
          onPress={() => navigation.navigate('ManageUsers')}
        />
        <TextWithIcon
          icon={images.appearance}
          textString={'Appearance'}
          onPress={() => navigation.navigate('Appearance')}
        />
        <TextWithIcon
          icon={images.intelligence}
          textString={'Intelligence™'}
          onPress={() => navigation.navigate('Intelligence')}
        />
        <TextWithIcon
          icon={images.notification}
          textString={'Notifications'}
          onPress={() => navigation.navigate('Notification')}
        />
        <TextWithIcon icon={images.privacy} textString={'About'} />
        {/* <TextWithIcon
          icon={images.help}
          textString={'Need Help?'}
          onPress={() => navigation.navigate('NeedHelp')}
        /> */}
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFF',
          width: '100%',
        }}>
        <Text style={styles.viewInc}>
          View, Inc. {currentDate.current.getFullYear()}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
  },
  headerText: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 5,
    flex: 2,
  },
  userWrapper: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 17,
    alignItems: 'center',
    color: 'rgb(52,101,127)',
  },
  user: {alignItems: 'center', color: 'rgb(52,101,127)'},
  userName: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 24,
    lineHeight: 31,
    marginVertical: 5,
  },
  userUnit: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 17,
    lineHeight: 22,
    marginVertical: 5,
  },
  userAddress: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 14,
  },
  mainUser: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 17,
    color: 'rgb(255,198,0)',
    marginVertical: 2,
  },
  logoutLogo: {
    height: 24,
    width: 24,
  },
  logout: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
    color: 'rgb(88,166,232)',
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewInc: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
    color: 'rgba(0,0,0,0.08)',
  },
  viewText: {
    color: 'rgb(52,101,127)',
    fontSize: 16,
    fontFamily: 'IBMPlexSans-Medium',
  },
  menuItem: {
    flexDirection: 'row',
    borderBottomColor: 'rgb(227,227,227)',
    borderBottomWidth: 1,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {justifyContent: 'center', alignItems: 'center', flex: 1},
  menuText: {justifyContent: 'center', flex: 5},
  logoutWrapper: {
    flexDirection: 'row',
    marginBottom: 10,
    position: 'relative',
  },
  flexView: {
    flex: 2,
  },
  logoutButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  menuItems: {
    flex: 4,
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    width: '100%',
  },
});

export default MyViewScreen;

interface TextWithIconProps {
  icon: ImageSourcePropType;
  textString: string;
  onPress?: (event: GestureResponderEvent) => void;
}
const TextWithIcon: React.FC<TextWithIconProps> = ({
  icon,
  textString,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.menuItem}>
      <View style={styles.menuIcon}>
        <Image source={icon} />
      </View>
      <View style={styles.menuText}>
        <Text style={styles.viewText}>{textString}</Text>
      </View>
    </TouchableOpacity>
  );
};
