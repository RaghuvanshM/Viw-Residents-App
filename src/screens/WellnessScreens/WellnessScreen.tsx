import React, {Fragment, useEffect, useRef} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Animated,
} from 'react-native';
import WelcomeCard from '../../components/WelcomeCard';

import {Props} from '../types/auth';
import images from '../../assets/images';
import WellnessCard from '../../components/WellnessCard';
import Carousel from '../../components/Carousel';

const HEADER_MAX_HEIGHT = Dimensions.get('window').height / 2.5;
const HEADER_MIN_HEIGHT = Dimensions.get('window').height / 4.5;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const WellnessScreen: React.FC<Props> = ({navigation}) => {
  const scrollAnim = useRef(new Animated.Value(0));

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('I am focues in Homescreen');
      StatusBar.setBarStyle('light-content');
      StatusBar.setTranslucent(true);
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

        <Carousel
          itemsPerInterval={1}
          items={[
            {
              title: 'Breathe',
              text:
                'Just 1 minute of calm breathing can lower your pulse and blood pressure.',
            },
            {
              title: 'Breathe',
              text:
                'Just 1 minute of calm breathing can lower your pulse and blood pressure.',
            },
            {
              title: 'Breathe',
              text:
                'Just 1 minute of calm breathing can lower your pulse and blood pressure.',
            },
            {
              title: 'Breathe',
              text:
                'Just 1 minute of calm breathing can lower your pulse and blood pressure.',
            },
          ]}
        />
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

        <View style={{position: 'absolute', height: '100%', width: '100%'}}>
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
              }}>
              <Image
                source={images.sunset}
                style={{
                  marginRight: 10,
                  width: 30,
                  height: 30,
                  resizeMode: 'contain',
                }}
              />
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.headerText}>Sunset at </Text>
                <Text
                  style={[styles.headerText, {fontFamily: 'IBMPlexSans-Bold'}]}>
                  7:21pm
                </Text>
              </View>
            </View>
          </View>
        </View>
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
    bottom: '8%',
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
    fontSize: 18,
    fontFamily: 'IBMPlexSans-Light',
  },
});
