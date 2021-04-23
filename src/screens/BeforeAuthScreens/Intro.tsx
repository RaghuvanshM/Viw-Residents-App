import React, {FC, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import {authUser} from '../../module/actions';
import images from '../../assets/images';
import {useKeyboardStatus} from '../../module/utils/useKeyboardStatus';

const slides = [
  {
    key: 0,
    title: 'Benefits',
    description: 'View Smart Glass automatically\nhas the following benefits',
    subtitle1: 'Maximize Daylight',
    subtitle2: 'Maintains Outside Views',
    subtitle3: 'Minimizes Glare',
    subtitle4: 'Optimal Thermal Comfort',
    image1: images.sun,
    image2: images.landscape,
    image3: images.sunGlasses,
    image4: images.highTemperature,
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
    image1: images.clock,
    image2: images.sun,
    image3: images.cloud,
    image4: images.angle,
  },
  {
    key: 2,
    title: 'It’s automatic',
    description:
      'The glass tints automatically based on real-time data and our predictive intelligence. :',
    subtitle1:
      'Sit back and enjoy light, views, reduced glare, and optimized thermal comfort that result in an overall feeling of wellness.',
    image1: images.exercise,
    image3: images.override,
  },
  {
    key: 3,
    title: 'Easily customize at any time',
    description:
      'Override the window’s tint setting at any time with this app. Just select the room and tint level.',
    subtitle1:
      'You can also set a schedule so your glass responds to your needs. ',
    image1: images.control,
    calender: images.calendar,
    check: images.check,
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
    image1: null,
    image2: images.viewLogo,
    subtitle1: 'Don’t have an account? ',
    subtitle2: 'Sign up here.',
    subtitle3: 'Forgot your password ',
    subtitle4: 'Tap here to reset',
  },
];
const theme = {
  roundness: 5,
  colors: {
    text: 'black',
    placeholder: '#0b59b8',
    primary: '#92c8d3',
    background: 'white',
  },
};
const Intro: FC = () => {
  const dispatch = useDispatch();
  const isKeyboardOpen = useKeyboardStatus();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(email);
  console.log(password);
  const onSigninPress = () => {
    dispatch(
      authUser({
        id: '123',
        firstName: 'Viral',
        lastName: 'Pattani',
        email: 'viral.pattani@piri.ai',
      }),
    );
  };
  const _renderItem = ({item}) => {
    if (item.key == 3) {
      return (
        <View key={item.key} style={styles.slide2}>
          <View
            style={{
              justifyContent: 'space-around',
              flex: 1,
            }}>
            <View>
              <Text style={styles.title2}>{item.title}</Text>
            </View>
            <View>
              <Text style={[styles.description2, {marginVertical: 0}]}>
                {item.description}
              </Text>
            </View>
            <View>
              <Image
                source={item.image1}
                style={{width: '100%', height: 96, alignSelf: 'center'}}
                resizeMode="contain"
              />
            </View>
            <View>
              <Text style={[styles.description2, {marginVertical: 0}]}>
                {item.subtitle1}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginHorizontal: wp('5%'),
              }}>
              <Image
                source={item.calender}
                style={{height: 100, alignSelf: 'center'}}
                resizeMode="contain"
              />
              <View>
                <View style={styles.checkboxList}>
                  <Image
                    source={item.check}
                    resizeMode="contain"
                    style={styles.checkimge}
                  />
                  <Text style={{...styles.checktext}}>{item.weekly}</Text>
                </View>
                <View style={styles.checkboxList}>
                  <Image
                    source={item.check}
                    style={styles.checkimge}
                    resizeMode="contain"
                  />
                  <Text style={{...styles.checktext}}>{item.circadian}</Text>
                </View>
                <View style={styles.checkboxList}>
                  <Image
                    source={item.check}
                    style={styles.checkimge}
                    resizeMode="contain"
                  />
                  <Text style={{...styles.checktext}}>{item.wfhmod}</Text>
                </View>
                <View style={styles.checkboxList}>
                  <Image
                    source={item.check}
                    style={styles.checkimge}
                    resizeMode="contain"
                  />
                  <Text style={{...styles.checktext}}>{item.custom}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      );
    } else if (item.key == 2) {
      return (
        <View key={item.key} style={styles.slide2}>
          <View
            style={{
              justifyContent: 'space-around',
              flex: 1,
            }}>
            <View>
              <Text style={styles.title2}>{item.title} </Text>
            </View>
            <View>
              <Text style={[styles.description2, {marginVertical: 0}]}>
                {item.description}
              </Text>
            </View>
            <View>
              <Image
                source={item.image1}
                style={{height: 155, alignSelf: 'center'}}
                resizeMode="contain"
              />
            </View>
            <View>
              <Text style={[styles.description2, {marginVertical: 0}]}>
                {item.subtitle1}
              </Text>
            </View>
            <View>
              <Image
                source={item.image3}
                style={{height: 70, alignSelf: 'center'}}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
      );
    } else if (item.key == 4) {
      return (
        <View key={item.key} style={styles.slide2}>
          <View
            style={{
              justifyContent: 'space-around',
              flex: 1,
            }}>
            <View>
              <Text style={styles.title2}>{item.title} </Text>
            </View>
            <View>
              <Text style={styles.description2}>{item.description}</Text>
            </View>
            <View>
              <View style={styles.formcontainer}>
                <Image
                  source={item.image2}
                  style={{...styles.image, marginTop: 10}}
                  resizeMode="contain"
                />
                <View style={{marginTop: 10}}>
                  <TextInput
                    label="Email"
                    mode="outlined"
                    placeholderTextColor={'#333'}
                    style={styles.textinput}
                    onChangeText={text => setEmail(text)}
                    theme={theme}
                  />
                  <TextInput
                    label="Password"
                    mode="outlined"
                    style={styles.textinput}
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    theme={theme}
                  />
                  <View
                    style={{
                      alignSelf: 'center',
                      flexDirection: 'row',
                      marginVertical: 10,
                    }}>
                    <Text style={styles.formsubtitle}>{item.subtitle3}</Text>
                    <TouchableOpacity>
                      <Text
                        style={{...styles.formsubtitle, fontWeight: 'bold'}}>
                        {item.subtitle4}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={styles.signinbutton}
                    onPress={onSigninPress}>
                    <Text style={styles.signtext}>SIGN IN</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Text style={styles.donthaveacc}>{item.subtitle1}</Text>
              <TouchableOpacity>
                <Text style={{...styles.donthaveacc, fontWeight: 'bold'}}>
                  {item.subtitle2}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
    return (
      <View key={item.key} style={styles.slide}>
        <View style={{justifyContent: 'space-around', flex: 1}}>
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
  };

  const _onDone = () => {};
  return (
    <ImageBackground
      style={{height: '100%'}}
      resizeMode="cover"
      source={images.vbgNature}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          marginTop: StatusBar.currentHeight,
        }}>
        <AppIntroSlider
          nextLabel={false}
          doneLabel={false}
          data={slides}
          dotStyle={{
            backgroundColor: isKeyboardOpen
              ? 'transparent'
              : 'rgba(255,255,255, 0.4)',
            marginTop: 15,
          }}
          activeDotStyle={{
            marginTop: 15,
            backgroundColor: isKeyboardOpen ? 'transparent' : '#fff',
          }}
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
    paddingVertical: 10,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 14,
    height: '90%',
  },
  slide2: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    height: '90%',
    paddingHorizontal: 10,
    marginTop: 20,
    borderRadius: 14,
    width: wp('90%'),
    alignSelf: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'rgb(52,101,127)',
    marginTop: 15,
    fontFamily: 'IBMPlexSans-Bold',
  },
  description: {
    marginVertical: 20,
    lineHeight: 17,
    textAlign: 'center',
    fontSize: 16,
    color: 'rgb(52,101,127)',
    fontFamily: 'IBMPlexSansRegular',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 15,
    color: 'rgb(52,101,127)',
    fontFamily: 'IBMPlexSans-Medium',
  },
  image: {
    alignSelf: 'center',
    height: 55,
  },
  checkimge: {
    height: 15,
    resizeMode: 'contain',
  },
  checktext: {
    marginVertical: 2,
    lineHeight: 18,
    textAlign: 'center',
    fontSize: 18,
    color: 'rgb(52,101,127)',
    fontFamily: 'IBMPlexSans-Medium',
  },
  calenderwithtext: {
    flexDirection: 'row',
    marginVertical: hp('10%'),
    justifyContent: 'space-between',
    marginHorizontal: '10%',
  },
  calenderimage: {
    height: 70,
    alignSelf: 'center',
  },
  formcontainer: {
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: wp('4%'),
  },
  textinput: {
    width: wp('80%'),
    height: 40,
    alignSelf: 'center',
    marginTop: 10,
  },
  signinbutton: {
    backgroundColor: 'rgb(52, 144, 172)',
    width: wp('80%'),
    alignSelf: 'center',
    borderRadius: 5,
  },
  signtext: {
    alignSelf: 'center',
    paddingVertical: 10,
    color: 'white',
    fontSize: 20,
    fontFamily: 'IBMPlexSans-Bold',
  },
  formsubtitle: {
    textAlign: 'center',
    fontSize: 16,
    color: 'rgb(52,101,127)',
  },
  description2: {
    marginVertical: 18,
    lineHeight: 22,
    textAlign: 'center',
    marginHorizontal: 20,
    fontSize: 18,
    color: 'rgb(52,101,127)',
    fontFamily: 'IBMPlexSans-Regular',
  },

  image2: {
    height: 55,
    alignSelf: 'center',
  },
  title2: {
    fontSize: 30,
    textAlign: 'center',
    color: 'rgb(52,101,127)',
    marginTop: 5,
    fontFamily: 'IBMPlexSans-Bold',
  },
  checkboxList: {
    flexDirection: 'row',
    marginVertical: 2.5,
  },
  donthaveacc: {
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    color: 'rgb(52,101,127)',
    fontFamily: 'IBMPlexSans-Regular',
  },
});
