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
import {heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen';
interface Props {
  navigation: any;
}
const LightControl: React.FC<Props> = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
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
            marginVertical: 10,
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
            marginVertical: 10,
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
          style={{alignSelf: 'center', flexDirection: 'row', marginRight:wp('10%')}}>
          <View
            style={{justifyContent: 'space-between', marginVertical: hp('6%')}}>
            <Text style={styles.tinttext}>Dark</Text>
            <Text style={styles.tinttext}>Medium</Text>
            <Text style={styles.tinttext}>Light</Text>
            <Text style={styles.tinttext}>clear</Text>
          </View>
          <Slider
            isHorizontal={false}
            changeSelectedIndex={setSelectedIndex}
            defaultIndex={2}>
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
        <Image
          source={image.intelligence}
          resizeMode="contain"
          style={{alignSelf: 'center', marginTop: 20}}
        />
        <Text style={styles.intelligencetext}>INTELLIGENCE</Text>
        <Text style={styles.Preventingtext}>Preventing morning glare</Text>
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
    marginVertical: 20,
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
});
