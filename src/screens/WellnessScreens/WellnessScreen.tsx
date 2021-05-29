import React, {Fragment, useEffect, useRef} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Animated,
  Platform,
} from 'react-native';
import WelcomeCard from '../../components/WelcomeCard';

import {Props} from '../types/auth';
import images from '../../assets/images';
import WellnessCard from '../../components/WellnessCard';
import AnimatedCircle from '../../components/AnimatedCircle';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useSelector} from 'react-redux';
import {getAirQualityIndex} from '../../module/selectors';
const HEADER_MAX_HEIGHT = Dimensions.get('window').height / 2.5;
const HEADER_MIN_HEIGHT = Dimensions.get('window').height / 4.5;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const WellnessScreen: React.FC<Props> = ({navigation}) => {
  const scrollAnim = useRef(new Animated.Value(0));
  const airqualityindex = useSelector(getAirQualityIndex);

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
  const headerTranslateY = () =>
    scrollAnim.current.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });

  const sunsetTextAndImageTranslateY = () =>
    scrollAnim.current.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE + hp('15%')],
      extrapolate: 'clamp',
    });

  const imageTranslateY = () =>
    scrollAnim.current.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });

  const textOpacityTranslate = () =>
    scrollAnim.current.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 0],
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
            paddingVertical: 20,
            paddingHorizontal: '5%',
            backgroundColor: '#FFF',
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 18,
                paddingVertical: 20,
                color: 'rgba(23,23,23, 0.5)',
                ...Platform.select({
                  ios: {fontFamily: 'IBMPlexSans'},
                  android: {fontFamily: 'IBMPlexSans-Regular'},
                }),
              }}>
              The air outside is Great!
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                marginBottom: hp('7%'),
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'rgb(23,23,23)',
                  fontFamily: 'IBMPlexSans-Bold',
                }}>
                AQI(US)
              </Text>
              <Text>AQI(US)</Text>
            </View>
          </View>
          <AnimatedCircle
            airQuality={airqualityindex.airQualitydata?.indexes?.baqi?.aqi}
            speed={2}
            radius={wp('35%')}
            minNumber={0}
            maxNumber={500}
          />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 25,
                paddingVertical: 20,
                color: 'rgb(23,23,23)',
                fontFamily: 'IBMPlexSans-Bold',
              }}>
              {/*Good Air Quality*/}
              {airqualityindex.airQualitydata?.indexes?.baqi?.category}
            </Text>
            <Text
              style={{
                fontSize: 22,
                color: 'rgb(23,23,23)',
                ...Platform.select({
                  ios: {fontFamily: 'IBMPlexSans'},
                  android: {fontFamily: 'IBMPlexSans-Regular'},
                }),
              }}>
              Same as usual
            </Text>
          </View>
        </View>
        <WellnessCard />
        <WelcomeCard
          imageUrl={images.femaleHikerBg2}
          header
          headerBgColor="rgb(0,152,161)"
          buttonBgColor="rgb(0,152,161)"
          cardTitle={'Daily Mindfulness'}
          cardDescription={
            'Just 5 minutes of mindfulness a day can make you healthier and happier. Take a few minutes and enjoy your view while observing your breath.'
          }
          buttonText="Learn More"
        />

        <View style={{paddingBottom: 45}}>
          <AppIntroSlider
            nextLabel={''}
            doneLabel={''}
            keyExtractor={(item, index) => 'carousel_index_' + index}
            data={[
              {
                title: 'Breathe',
                text: 'Just 1 minute of calm breathing can lower your pulse and blood pressure.',
              },
              {
                title: 'Breathe',
                text: 'Just 1 minute of calm breathing can lower your pulse and blood pressure.',
              },
              {
                title: 'Breathe',
                text: 'Just 1 minute of calm breathing can lower your pulse and blood pressure.',
              },
              {
                title: 'Breathe',
                text: 'Just 1 minute of calm breathing can lower your pulse and blood pressure.',
              },
            ]}
            dotStyle={{
              borderColor: 'rgba(180,180,180, 1)',
              borderWidth: 1,
              marginTop: 85,
            }}
            activeDotStyle={{
              marginTop: 85,
              backgroundColor: 'rgba(96,96,96, 1)',
            }}
            renderItem={({item, index}: any) => {
              return (
                <View style={styles.slide} key={index + '_carousel'}>
                  <Text style={styles.slideTitle}>{item.title}</Text>
                  <Text style={{...styles.slideText}}>{item.text}</Text>
                </View>
              );
            }}
            onDone={() => {}}
          />
        </View>
      </Animated.ScrollView>
      <Animated.View
        style={[
          styles.header,
          {transform: [{translateY: headerTranslateY()}]},
        ]}>
        <Animated.Image
          style={[
            styles.headerBackground,
            {transform: [{translateY: imageTranslateY()}]},
          ]}
          source={images.wellnessHeader}
        />

        <LinearGradient
          colors={[
            'transparent',
            'transparent',
            'transparent',
            'transparent',
            'transparent',
            'transparent',
            'rgba(255,255,255, 1)',
          ]}
          style={{position: 'absolute', height: '100%', width: '100%'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              position: 'absolute',
            }}>
            <Animated.Text
              style={[styles.headerTitle, {opacity: textOpacityTranslate()}]}>
              Wellness
            </Animated.Text>
            <Animated.View
              style={[
                {
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                {opacity: textOpacityTranslate()},
              ]}>
              <Animated.Image
                source={images.partlyCloudy}
                style={[
                  {
                    marginRight: 10,
                    width: 30,
                    height: 30,
                    resizeMode: 'contain',
                  },
                  {opacity: textOpacityTranslate()},
                ]}
              />
              <Animated.Text
                style={[styles.title, {opacity: textOpacityTranslate()}]}>
                72º Partly Cloudy
              </Animated.Text>
            </Animated.View>
          </View>
          <View style={styles.headerRow}>
            <View
              style={{
                alignSelf: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-around',
              }}>
              <View
                style={{
                  alignSelf: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Animated.Image
                  source={images.sunset}
                  style={[
                    {
                      marginRight: 10,
                      width: 30,
                      height: 30,
                      resizeMode: 'contain',
                    },
                    {
                      transform: [{translateY: sunsetTextAndImageTranslateY()}],
                    },
                  ]}
                />
                <Animated.View
                  style={[
                    {flexDirection: 'row'},
                    {
                      transform: [{translateY: sunsetTextAndImageTranslateY()}],
                    },
                  ]}>
                  <Text style={styles.headerText}>Sunset at </Text>
                  <Text
                    style={[
                      styles.headerText,
                      {fontFamily: 'IBMPlexSans-Bold'},
                    ]}>
                    7:21pm
                  </Text>
                </Animated.View>
              </View>
              <Animated.View
                style={[
                  {
                    flexDirection: 'row',
                    alignSelf: 'center',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  },
                  {
                    transform: [{translateY: sunsetTextAndImageTranslateY()}],
                  },
                ]}>
                <Animated.Text style={styles.outsideAirQualityText}>
                  Outside Air Quality{' '}
                </Animated.Text>
                <Animated.Image
                  source={images.greenDot}
                  style={[
                    {
                      marginRight: 10,
                      width: 14,
                      height: 14,
                      resizeMode: 'contain',
                    },
                    {
                      transform: [{translateY: sunsetTextAndImageTranslateY()}],
                    },
                  ]}
                />
              </Animated.View>
            </View>
          </View>
        </LinearGradient>
      </Animated.View>
    </Fragment>
  );
};
export default WellnessScreen;
const styles = StyleSheet.create({
  saveArea: {
    flex: 1,
    backgroundColor: '#eff3fb',
  },
  headerRow: {
    paddingVertical: 5,
    width: '100%',
    position: 'absolute',
    bottom: '15%',
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
    fontFamily: 'IBMPlexSans',
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
  headerTitle: {
    fontSize: 62,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'IBMPlexSans-ExtraLight',
  },
  headerText: {
    color: '#fff',
    fontSize: 14.1,
    fontFamily: 'IBMPlexSans-Light',
  },
  outsideAirQualityText: {
    color: '#fff',
    fontSize: 14.1,
    fontFamily: 'IBMPlexSans-Regular',
  },
  slide: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexBasis: '100%',
    flex: 1,
    maxWidth: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    minHeight: 150,
  },
  slideTitle: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'DesertDogHmk',
    color: 'rgb(96, 96, 96)',
    marginBottom: 0,
    fontSize: 37,
  },
  slideText: {
    width: '100%',
    textAlign: 'center',
    color: 'rgb(96, 96, 96)',
    fontSize: 16,
    ...Platform.select({
      ios: {
        fontFamily: 'IBMPlexSans',
      },
      android: {
        fontFamily: 'IBMPlexSans-Regular',
      },
    }),
  },
});
