import React, {Component} from 'react';
import {Text, View, ImageBackground, Image, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {images} from '../constants';
class SecondOnbard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          resizeMode="contain"
          source={require('../assets/bg.png')}
          style={styles.imagebackgroundmain}>
          <Text style={styles.benefitheadings}>How it works</Text>
          <Text style={styles.Viewsamartglasfirst}>
            View’s Intelligence predictively controls the window tint based on a
            number of inputs including the following:
          </Text>
          <View style={styles.sunimage}>
            <Image source={images.clock} style={styles.firstOnbardimage} />
          </View>
          <View>
            <Text style={styles.suntext}>Time of Day</Text>
          </View>
          <View style={styles.sunimage}>
            <Image source={images.sun} style={styles.firstOnbardimage} />
          </View>
          <View>
            <Text style={styles.suntext}>Angle of the sun</Text>
          </View>
          <View style={styles.sunimage}>
            <Image source={images.cloud} style={styles.firstOnbardimage} />
          </View>
          <View>
            <Text style={styles.suntext}>Cloud Cover</Text>
          </View>
          <View style={styles.sunimage}>
            <Image source={images.angle} style={styles.firstOnbardimage} />
          </View>
          <View>
            <Text style={styles.suntext}>Orientation</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default SecondOnbard;
const styles = StyleSheet.create({
  benefitheadings: {
    fontSize: 40,
    color: '#34657F',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: hp('10%'),
  },
  sunimage: {
    alignSelf: 'center',
  },
  suntext: {
    alignSelf: 'center',
    fontSize: 20,

    color: '#34657F',
  },
  imagebackgroundmain: {
    height: hp('100%'),
    marginLeft: wp('2%'),
    width: wp('90%'),
  },
  Viewsamartglasfirst: {
    fontSize: 20,
    width: wp('70%'),
    textAlign: 'center',
    marginLeft: hp('6%'),
    color: '#34657F',
    marginTop: hp('2%'),
  },
  firstOnbardimage: {
    height: hp('12%'),
    width: wp('12%'),
    resizeMode: 'contain',
  },
});
