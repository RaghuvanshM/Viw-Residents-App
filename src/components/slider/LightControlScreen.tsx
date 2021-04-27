import React, {Fragment, useState} from 'react';
import {
  Image,
  ImageBackground,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import image from '../../assets/images';
import Slider from './Slider';
import ArrowBack from 'react-native-vector-icons/MaterialIcons';
import {useRoute} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
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
          backgroundColor: `rgba(0,0,0,${
            selectedIndex === 1
              ? 0.25
              : selectedIndex === 2
              ? 0.5
              : selectedIndex === 3
              ? 0
              : 0.75
          })`,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp('4%'),
          }}>
          <TouchableOpacity
            style={styles.touchableButton}
            onPress={() => {
              navigation.goBack();
            }}>
            <ArrowBack
              name="arrow-back-ios"
              size={20}
              color="white"
              style={{marginTop: 5}}
            />
            <Text style={styles.backtext}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableButton}>
            <ArrowBack
              name="calendar-today"
              size={20}
              color="white"
              style={{marginTop: 2, marginRight: 10}}
            />
            <Text style={styles.backtext}>Schedule</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginVertical: 5,
          }}>
          <Text style={styles.livingroomtext}>Living Room</Text>
          <TouchableOpacity>
            <ArrowBack
              name="edit"
              size={25}
              color="white"
              style={{marginLeft: 20}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            marginRight: wp('15%'),
            marginTop: 10,
          }}>
          <View
            style={{justifyContent: 'space-between', marginVertical: hp('5%')}}>
            <Text style={styles.tinttext}>Dark</Text>
            <Text style={styles.tinttext}>Medium</Text>
            <Text style={styles.tinttext}>Light</Text>
            <Text style={styles.tinttext}>clear</Text>
          </View>
          <Slider
            isHorizontal={false}
            changeSelectedIndex={setSelectedIndex}
            size={hp('50%')}
            defaultIndex={selectedIndex}>
            <Fragment>
              {selectedIndex === 3 && (
                <Image
                  source={image.blueClearBtn}
                  resizeMode={'cover'}
                  style={{
                    borderWidth: 2,
                    width: 150,
                    height: 150,
                    marginTop: 40,
                  }}
                />
              )}
              {selectedIndex === 2 && (
                <Image
                  source={image.blueLightBtn}
                  resizeMode={'cover'}
                  style={{
                    borderWidth: 2,
                    width: 150,
                    height: 150,
                    marginTop: 40,
                  }}
                />
              )}
              {selectedIndex === 1 && (
                <Image
                  source={image.blueMediumBtn}
                  resizeMode={'cover'}
                  style={{
                    borderWidth: 2,
                    width: 150,
                    height: 150,
                    marginTop: 40,
                  }}
                />
              )}
              {selectedIndex === 0 && (
                <Image
                  source={image.blueDarkBtn}
                  resizeMode={'cover'}
                  style={{
                    borderWidth: 2,
                    width: 150,
                    height: 150,
                    marginTop: 30,
                  }}
                />
              )}
            </Fragment>
          </Slider>
        </View>
        <View>
          {tintText === 'Override' ? (
            <View>
              <Image
                source={image.overridegreen}
                resizeMode="contain"
                style={{alignSelf: 'center',height:50,width:50, marginTop: 10}}
              />
              <Text style={styles.intelligencetext}>{tintText}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: wp('10%'),
                  marginRight: 30,
                }}>
                <TouchableOpacity style={{alignSelf: 'center'}}>
                  <Image
                    source={image.minusbutton}
                    resizeMode="contain"
                    style={{alignSelf: 'center', height: 30}}
                  />
                </TouchableOpacity>
                <Text style={styles.timing}>1:00</Text>
                <TouchableOpacity style={{alignSelf: 'center'}}>
                  <Image
                    source={image.plusbutton}
                    resizeMode="contain"
                    style={{height: 30}}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setTintText('Intelligence™');
                }}
                style={styles.cancelbutton}>
                <Text style={styles.canceltext}>cancel</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Image
                source={image.intelligence}
                resizeMode="contain"
                style={{alignSelf: 'center', marginTop: 20,height:50,width:50}}
              />
              <Text style={{...styles.intelligencetext, marginTop: 20}}>
                {tintText}
              </Text>
              <Text style={styles.Preventingtext}>
                Preventing morning glare
              </Text>
            </View>
          )}
        </View>
        <TouchableOpacity style={styles.touchableButton}>
          <ArrowBack
            name="image"
            size={20}
            color="white"
            style={{marginBottom: 10}}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default LightControl;
const styles = StyleSheet.create({
  backtext: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'IBMPlexSans-Regular',
  },
  touchableButton: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 30,
  },
  livingroomtext: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'IBMPlexSans-Bold',
  },
  intelligencetext: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'IBMPlexSans-Bold',
    alignSelf: 'center',
    marginTop: 10,
    marginLeft: 10,
  },
  Preventingtext: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'IBMPlexSans-Regular',
    alignSelf: 'center',
  },
  tinttext: {
    fontSize: 18,
    fontFamily: 'IBMPlexSans-Regular',
    color: 'white',
    paddingRight: 10,
  },
  timing: {
    fontSize: 24,
    color: 'green',
    fontWeight: 'bold',
    fontFamily: 'IBMPlexSans-Bold',
    marginVertical: 10,
    alignSelf: 'center',
    marginLeft: 40,
  },
  cancelbutton: {
    width: 170,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
    alignSelf: 'center',
  },
  canceltext: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'IBMPlexSans-Bold',
    padding: 8,
  },
});
