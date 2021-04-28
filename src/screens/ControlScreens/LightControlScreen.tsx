import React, {Fragment, useState} from 'react';
import {
  Image,
  ImageBackground,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Platform,
  Dimensions,
  StatusBar,
} from 'react-native';
import image from '../../assets/images';
import Slider from '../../components/slider/Slider';
import {useRoute} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import images from '../../assets/images';
import APPCONSTANTS from '../../constants/constants';

export const window = Dimensions.get('window');
const ratio = window.height / window.width;
interface Props {
  navigation: any;
}
const LightControl: React.FC<Props> = ({navigation}) => {
  const route: any = useRoute();
  const [selectedIndex, setSelectedIndex] = useState(
    route.params.roomControl === 'Clear'
      ? 3
      : route.params.roomControl === 'Light'
      ? 2
      : route.params.roomControl === 'Medium'
      ? 1
      : 0,
  );
  const [tintText, setTintText] = useState(route.params.roomControlStatus);
  return (
    <ImageBackground source={image.vbgNature} style={{height: '100%'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: `rgba(${APPCONSTANTS.controlStatusColor},${
            selectedIndex === 3
              ? APPCONSTANTS.controlStatusClearRate
              : selectedIndex === 2
              ? APPCONSTANTS.controlStatusLightRate
              : selectedIndex === 1
              ? APPCONSTANTS.controlStatusMediumRate
              : APPCONSTANTS.controlStatusDarkRate
          })`,
        }}>
        <View style={styles.screenViewWrapper}>
          <View style={styles.header}>
            <TouchableOpacity
              style={[styles.touchableButton, styles.backButton]}
              onPress={() => navigation.goBack()}>
              <Image source={images.backIcon} style={styles.backImage} />
              <Text style={[styles.backtext, {paddingBottom: 1}]}>Back</Text>
            </TouchableOpacity>
            <View style={{flex: 1}} />
            <TouchableOpacity
              style={[styles.touchableButton, styles.flexCenter]}>
              <Image source={images.calendarWhite} style={styles.backImage} />
              <Text style={styles.backtext}>Schedule</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.roomTextWrapper}>
            <Text style={styles.livingroomtext}>Living Room</Text>
            <TouchableOpacity
              style={{justifyContent: 'flex-end', marginBottom: '2%'}}>
              <Image
                source={images.edit}
                style={{height: 14, marginTop: 5, marginLeft: 10}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.sliderWrapper}>
            <View>
              <Slider
                allColors={
                  tintText === 'Override'
                    ? ['#3b6503', '#71a131', '#aae066', '#d9efbb']
                    : ['#033D65', '#3173A2', '#66ADE0', '#BBD9EF']
                }
                isHorizontal={false}
                backgroundColor={'rgba(255,255,255,0.2)'}
                changeSelectedIndex={setSelectedIndex}
                size={hp('52%')}
                defaultIndex={selectedIndex}>
                <Fragment>
                  {selectedIndex === 3 && (
                    <Image
                      source={
                        tintText === 'Override'
                          ? image.greenClearBtn
                          : image.blueClearBtn
                      }
                      resizeMode={'cover'}
                      style={styles.sliderImage}
                    />
                  )}
                  {selectedIndex === 2 && (
                    <Image
                      source={
                        tintText === 'Override'
                          ? image.greenLightBtn
                          : image.blueLightBtn
                      }
                      resizeMode={'cover'}
                      style={styles.sliderImage}
                    />
                  )}
                  {selectedIndex === 1 && (
                    <Image
                      source={
                        tintText === 'Override'
                          ? image.greenMediumBtn
                          : image.blueMediumBtn
                      }
                      resizeMode={'cover'}
                      style={styles.sliderImage}
                    />
                  )}
                  {selectedIndex === 0 && (
                    <Image
                      source={
                        tintText === 'Override'
                          ? image.greenDarkBtn
                          : image.blueDarkBtn
                      }
                      resizeMode={'cover'}
                      style={styles.sliderImage}
                    />
                  )}
                </Fragment>
              </Slider>
            </View>
          </View>
          <View style={{justifyContent: 'center', flex: 0.4}}>
            {tintText === 'Override' ? (
              <Fragment>
                <View
                  style={{
                    flex: 1.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={styles.flexCenter}>
                    <Image
                      source={image.overridegreen}
                      resizeMode="contain"
                      style={{
                        alignSelf: 'center',
                        height: 47,
                        width: 47,
                      }}
                    />
                  </View>
                  <View style={styles.flexCenter}>
                    <Text style={styles.intelligencetext}>
                      {tintText.toUpperCase()}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginHorizontal: wp('18%'),
                  }}>
                  <TouchableOpacity style={{alignSelf: 'center', flex: 1}}>
                    <Image
                      source={image.minusbutton}
                      resizeMode="contain"
                      style={{alignSelf: 'center', height: 40}}
                    />
                  </TouchableOpacity>
                  <View style={{flex: 2}}>
                    <Text style={styles.timing}>1:00</Text>
                  </View>
                  <TouchableOpacity style={{alignSelf: 'center', flex: 1}}>
                    <Image
                      source={image.plusbutton}
                      resizeMode="contain"
                      style={{height: 40}}
                    />
                  </TouchableOpacity>
                </View>
                <View style={[styles.flexCenter, {width: '100%'}]}>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.cancelbutton}
                    onPress={() => {
                      setTintText('Intelligence™');
                    }}>
                    <Text style={styles.canceltext}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </Fragment>
            ) : (
              <Fragment>
                <View style={styles.flexCenter}>
                  <Image
                    source={image.intelligence}
                    resizeMode="contain"
                    style={{
                      alignSelf: 'center',
                      height: 60,
                      width: 60,
                    }}
                  />
                </View>
                <View style={styles.flexCenter}>
                  <Text style={{...styles.intelligencetext}}>
                    {tintText.toUpperCase()}
                  </Text>
                </View>
                <View style={styles.flexCenter}>
                  <Text style={styles.Preventingtext}>
                    Preventing morning glare
                  </Text>
                </View>
                <View style={styles.flexCenter} />
              </Fragment>
            )}
          </View>
          <View style={styles.galleryButtonWrapper}>
            <TouchableOpacity style={[styles.touchableButton, {flex: 0.1}]}>
              <Image source={images.gallery} />
            </TouchableOpacity>
            <View style={{flex: 1}} />
            <View />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
export default LightControl;

const styles = StyleSheet.create({
  screenViewWrapper: {
    justifyContent: 'space-around',
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 0.1,
    justifyContent: 'space-between',
  },
  touchableButton: {
    flexDirection: 'row',
    marginHorizontal: 30,
  },
  backButton: {justifyContent: 'flex-start', alignItems: 'center', flex: 1},
  backImage: {
    height: 22,
    tintColor: '#FFF',
    marginRight: 5,
  },
  roomTextWrapper: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  backtext: {
    fontSize: 18,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
  },
  livingroomtext: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'IBMPlexSans-Bold',
  },
  sliderWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  tinttext: {
    fontSize: 18,
    textAlign: 'right',
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
    color: 'white',
  },
  intelligencetext: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'IBMPlexSans-Bold',
    alignSelf: 'center',
  },
  Preventingtext: {
    fontSize: 16,
    color: 'white',
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
    alignSelf: 'center',
  },
  timing: {
    fontSize: 30,
    color: 'green',
    flex: 1,
    fontFamily: 'IBMPlexSans-Bold',
    marginVertical: 5,
    alignSelf: 'center',
  },
  cancelbutton: {
    width: '40%',
    height: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp('3.5%'),
    // borderTopEndRadius: hp('3.5%'),
    // borderBottomEndRadius: hp('3.5%'),
    // borderBottomStartRadius: hp('3.5%'),
    // borderTopStartRadius: hp('3.5%'),
    borderWidth: 1,
    borderColor: '#FFF',
  },
  canceltext: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'IBMPlexSans-Bold',
  },
  sliderImage: {
    borderWidth: 2,
    width: wp(ratio >= 2 ? '35%' : '30%'),
    height: wp(ratio >= 2 ? '35%' : '30%'),
    marginTop: 30,
  },
  galleryButtonWrapper: {
    flex: 0.08,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
