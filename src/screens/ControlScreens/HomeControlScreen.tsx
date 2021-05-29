import React, {useRef, Fragment, useEffect} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import images from '../../assets/images';
import WelcomeCard from '../../components/WelcomeCard';
import RoomCard from '../../components/RoomCard';
import {Props} from '../types/auth';
import {useSelector, useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {
  getSelectedImage,
  getIsInternalImage,
  getAirQualityIndex,
  getUserProfile,
  getWelcomeInfoShow,
  getZones,
} from '../../module/selectors';
import * as actions from '../../module/actions';
import APPCONSTANTS from '../../constants/constants';
const HEADER_MAX_HEIGHT = Dimensions.get('window').height / 2.5;
const HEADER_MIN_HEIGHT = Dimensions.get('window').height / 4.5;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const HomeControlScreen: React.FC<Props> = ({navigation}) => {
  const scrollAnim = useRef(new Animated.Value(0));

  const selectedImage = useSelector(getSelectedImage);
  const isInternalImage = useSelector(getIsInternalImage);
  const airqualityindex = useSelector(getAirQualityIndex);
  const userDetails = useSelector(getUserProfile);
  const isWelcomeInfoShow = useSelector(getWelcomeInfoShow);
  const zones = useSelector(getZones);
  const isFocused = useIsFocused();
  const dispatch = useDispatch()
  console.log(airqualityindex);
  console.log(userDetails);
  console.log(zones);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      StatusBar.setBarStyle('light-content');
      if (Platform.OS === 'android') {
        StatusBar.setTranslucent(true);
      }
      StatusBar.setBackgroundColor('transparent');
    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    dispatch(actions.getAirQualityIndex());
    dispatch(actions.getZoneDetails({buildingId: 'Network_6_415582'}));
  }, [dispatch, isFocused]);

  const headerTranslateY = () =>
    scrollAnim.current.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });

  const imageTranslateY = () =>
    scrollAnim.current.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });

  return (
    <Fragment>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor="transparent"
      />
      <Animated.ScrollView
        contentContainerStyle={{paddingTop: HEADER_MAX_HEIGHT}}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollAnim.current}}}],
          {useNativeDriver: true},
        )}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'rgb(102,157,204)',
            paddingVertical: 10,
            paddingHorizontal: 10,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{width: 20, height: 20, marginRight: 10}}
              source={images.sunset}
            />
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'IBMPlexSans-Light',
                  fontSize: 14,
                }}>
                Sunset at{' '}
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'IBMPlexSans-Bold',
                  fontSize: 14,
                }}>
                7:21pm
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                color: '#fff',
                ...Platform.select({
                  ios: {fontFamily: 'IBMPlexSans'},
                  android: {fontFamily: 'IBMPlexSans-Regular'},
                }),
                fontSize: 14,
              }}>
              Outside Air Quality{' '}
            </Text>
            <View
              style={{
                width: 15,
                height: 15,
                marginLeft: 5,
                backgroundColor: 'rgb(126,211,33)',
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 100,
              }}
            />
          </View>
        </View>
        {isWelcomeInfoShow && (
          <WelcomeCard
            cardTitle={`Welcome Home ${userDetails?.user?.firstName}`}
            cardDescription={
              'Your windows are automatically tinting based on our real-time intelligence to provide reduced glare. You can adjust your tint level by tapping on a room and then using the slider.'
            }
            buttonText="Got it"
          />
        )}

        {zones.map((zone, index) => {
          return (
            <RoomCard
              key={index}
              roomStatus={APPCONSTANTS.tintAgent[zone.snapshot.tintAgent]}
              controlStatus={APPCONSTANTS.tintLevel[zone.snapshot.tintLevel]}
              roomSubText={''}
              zone={zone}
              roomName={zone.name}
            />
          );
        })}
        {/* <RoomCard
          roomStatus={'Schedule'}
          controlStatus={'Clear'}
          roomSubText={'Weekday Wake Up'}
          roomName={'Living Room'}
        />
        <RoomCard
          hasWakeupAlarm
          roomStatus={'Intelligence™'}
          controlStatus={'Light'}
          roomSubText={'Preventing morning glare'}
          roomName={'Living Room'}
        />
        <RoomCard
          roomStatus={'Schedule'}
          controlStatus={'Medium'}
          roomSubText={'Weekday Wake Up'}
          roomName={'Living Room'}
        />
        <RoomCard
          hasWakeupAlarm
          roomStatus={'Override'}
          controlStatus={'Dark'}
          roomSubText={'0:59:12'}
          roomName={'Living Room'}
        /> */}
      </Animated.ScrollView>
      <Animated.View
        style={[
          styles.header,
          {transform: [{translateY: headerTranslateY()}]},
        ]}>
        <Animated.Image
          style={[
            styles.headerBackground,
            {
              transform: [{translateY: imageTranslateY()}],
            },
          ]}
          source={
            isInternalImage
              ? selectedImage
                ? images[selectedImage]
                : images.initialWelnessHeader
              : {uri: selectedImage}
          }
        />

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '55%',
            justifyContent: 'center',
          }}>
          <Image
            source={images.viewLogoWhite}
            style={{
              width: 140,
              height: 100,
              alignSelf: 'center',
              resizeMode: 'contain',
            }}
          />
          <View style={styles.headerRow}>
            <View
              style={{
                alignSelf: 'center',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={images.partlyCloudy}
                style={{
                  marginRight: 10,
                  width: 30,
                  height: 30,
                  resizeMode: 'contain',
                }}
              />
              <Text style={styles.title}>72º Partly Cloudy</Text>
            </View>
          </View>
        </View>
      </Animated.View>
    </Fragment>
  );
};
export default HomeControlScreen;
const styles = StyleSheet.create({
  saveArea: {
    flex: 1,
    backgroundColor: '#eff3fb',
  },
  headerRow: {
    paddingVertical: 5,
    width: '100%',
    position: 'absolute',
    bottom: '5%',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#402583',
    backgroundColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
    borderRadius: 10,
    marginHorizontal: 12,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // backgroundColor: '#62d1bc',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_MAX_HEIGHT,
    width: '100%',
    resizeMode: 'cover',
  },
  topBar: {
    marginTop: 40,
    height: Dimensions.get('window').height / 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
    fontSize: 14,
  },
  avatar: {
    height: 54,
    width: 54,
    resizeMode: 'contain',
    borderRadius: 54 / 2,
  },
  fullNameText: {
    fontSize: 16,
    marginLeft: 24,
  },
});
