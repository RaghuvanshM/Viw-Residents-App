import React, {FC, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const slides = [
  {
    key: 0,
    title: 'Benefits',
    description: 'View Smart Glass automatically\nhas the following benefits',
    subtitle1: 'Maximize Daylight',
    subtitle2: 'Maintains Outside Views',
    subtitle3: 'Minimizes Glare',
    subtitle4: 'Optimal Thermal Comfort',
    image1: require('../assets/sun.png'),
    image2: require('../assets/landscape.png'),
    image3: require('../assets/sun-glasses.png'),
    image4: require('../assets/high-temperature.png'),
  },
  {
    key: 1,
    title: 'How it works',
    description:
      'View’s Intelligence predictively controls the window tint based on a number of inputs including the following:',
    subtitle1: 'Time of Day',
    subtitle2: 'Angle of the Sun',
    subtitle3: 'Cloud Cover',
    subtitle4: 'Orientation',
    image1: require('../assets/clock.png'),
    image2: require('../assets/sun.png'),
    image3: require('../assets/cloud.png'),
    image4: require('../assets/angle.png'),
  },
  {
    key: 2,
    title: 'It’s automatic',
    description:
      'The glass tints automatically based on real-time data and our predictive intelligence. :',
    subtitle1:
      'Sit back and enjoy light, views, reduced glare, and optimized thermal comfort that result in an overall feeling of wellness.',
    image1: require('../assets/exercise.png'),
    image3: require('../assets/override.png'),
  },
  {
    key: 3,
    title: 'Easily customize at any time',
    description:
      'Override the window’s tint setting at any time with this app. Just select the room and tint level.',
    subtitle1:
      'You can also set a schedule so your glass responds to your needs. ',
    image1: require('../assets/control.png'),
    calender: require('../assets/calendar.png'),
    check: require('../assets/check.png'),
    weekly: 'Weekday Wake Up',
    circadian: 'Circadian Rhythm',
    wfhmod: 'WFH Mode',
    custom: 'Custom',
  },
  {
    key: 4,
    title: 'Let’s get started',
    description:
      'Sign in with your email and password provided by your building manager.',
      image1:require('../assets/log-in.png'),
      image2:require('../assets/logo-view-logo.png'),
      subtitle1:'Don’t have an account? ',
      subtitle2:'Sign up here.'
   
  },
];

const Intro: FC = () => {
  const _renderItem = ({item}) => {
    if (item.key == 3) {
      return (
        <View key={item.key} style={styles.slide}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={item.image1}
          />
          <Text style={styles.subtitle}>{item.subtitle1}</Text>
          <View style={styles.calenderwithtext}>
            <Image
              style={styles.calenderimage}
              resizeMode="contain"
              source={item.calender}
            />
            <View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.checkimge} source={item.check} />
                <Text style={styles.checktext}>{item.weekly}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.checkimge} source={item.check} />
                <Text style={styles.checktext}>{item.circadian}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.checkimge} source={item.check} />
                <Text style={styles.checktext}>{item.wfhmod}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.checkimge} source={item.check} />
                <Text style={styles.checktext}>{item.custom}</Text>
              </View>
            </View>
          </View>
        </View>
      );
    } else if (item.key == 2) {
      return (
        <View key={item.key} style={styles.slide}>
          <View style={{marginTop: 60}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={item.image1}
            />
            <Text style={styles.subtitle}>{item.subtitle1}</Text>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={item.image2}
            />
            <Text style={styles.subtitle}>{item.subtitle2}</Text>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={item.image3}
            />
            <Text style={styles.subtitle}>{item.subtitle3}</Text>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={item.image4}
            />
            <Text style={styles.subtitle}>{item.subtitle4}</Text>
          </View>
        </View>
      );
    }
    else if (item.key == 4) {
      return (
        <View key={item.key} style={styles.slide}>
          <View >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
             <ImageBackground
              source={item.image1}
              style={{height:200}}
              resizeMode="contain"
             >
               <Image 
                source={item.image2}
                style={{alignSelf:'center'}}
               />
             </ImageBackground>
             <View style={{flexDirection:'row',alignSelf:'center'}}>
               <Text style={styles.subtitle}>{item.subtitle1}</Text>
               <Text style={{...styles.subtitle,fontWeight:'bold'}}>{item.subtitle2}</Text>
               </View>
          </View>
        </View>
      );
    }
    return (
      <View key={item.key} style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Image style={styles.image} resizeMode="contain" source={item.image1} />
        <Text style={styles.subtitle}>{item.subtitle1}</Text>
        <Image style={styles.image} resizeMode="contain" source={item.image2} />
        <Text style={styles.subtitle}>{item.subtitle2}</Text>
        <Image style={styles.image} resizeMode="contain" source={item.image3} />
        <Text style={styles.subtitle}>{item.subtitle3}</Text>
        <Image style={styles.image} resizeMode="contain" source={item.image4} />
        <Text style={styles.subtitle}>{item.subtitle4}</Text>
      </View>
    );
  };

  const _onDone = () => {};

  return (
    <ImageBackground
      style={{height: '100%'}}
      resizeMode="cover"
      source={require('../assets/vbg-nature.png')}>
      <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <AppIntroSlider
          nextLabel={false}
          doneLabel={false}
          data={slides}
          dotStyle={{backgroundColor: 'gray', marginTop: 15}}
          activeDotStyle={{marginTop: 15, backgroundColor: '#fff'}}
          renderItem={_renderItem}
          onDone={_onDone}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Intro;
const styles = StyleSheet.create({
  slide: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingVertical: 20,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 14,
    height: '90%',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'rgb(52,101,127)',
    marginTop: 15,
  },
  description: {
    marginVertical: 20,
    lineHeight: 17,
    textAlign: 'center',
    fontSize: 16,
    color: 'rgb(52,101,127)',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 15,
    color: 'rgb(52,101,127)',
  },
  image: {
    alignSelf: 'center',
    height: 55,
  },
  checkimge: {
    height: 30,
    resizeMode: 'contain',
  },
  checktext: {
    marginVertical: 10,
    lineHeight: 17,
    textAlign: 'center',
    fontSize: 16,
    color: 'rgb(52,101,127)',
  },
  calenderwithtext: {
    flexDirection: 'row',
    marginVertical: hp('10%'),
    justifyContent: 'space-between',
    marginHorizontal:'10%',
  },
  calenderimage: {
    height: 70,
    alignSelf: 'center',
  },
});
