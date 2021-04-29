import React, {FC} from 'react';
import {Text, View, Image, StyleSheet, Platform} from 'react-native';
import images from '../assets/images';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface AppearancePreviewCardProps {}
const AppearancePreviewCardComponent: FC<AppearancePreviewCardProps> = ({}) => {
  return (
    <View style={styles.cardWrapper}>
      <View style={{}}>
        <Image
          source={images.initialWelnessHeader}
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.logoWrapper}>
        <Image source={images.viewLogoWhite} style={styles.logoImage} />
        <View style={styles.headerRow}>
          <View style={styles.cloudWrapper}>
            <Image source={images.partlyCloudy} style={styles.cloudImage} />
            <Text style={styles.title}>72º Partly Cloudy</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomBlueLine}>
        <View style={styles.sunsetAtWrapper}>
          <Image style={styles.sunsetImage} source={images.sunset} />
          <View style={styles.sunsetWrapper}>
            <Text style={styles.sunsetAt}>Sunset at </Text>
            <Text style={styles.sunsetTime}>7:21pm</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.airQualityText}>Outside Air Quality </Text>
          <View style={styles.airQualityDot} />
        </View>
      </View>
    </View>
  );
};
export default AppearancePreviewCardComponent;

const styles = StyleSheet.create({
  headerRow: {
    paddingVertical: hp('1%'),
    width: '100%',
    position: 'absolute',
    bottom: '5%',
  },
  title: {
    color: 'white',
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
    fontSize: 14,
  },
  cardWrapper: {
    width: '95%',
    marginTop: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  backgroundImage: {
    height: hp('21%'),
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  logoWrapper: {
    height: hp('21%'),
    position: 'absolute',
    width: '100%',
  },
  logoImage: {
    width: 140,
    height: 140,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  cloudWrapper: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cloudImage: {
    marginRight: 10,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  bottomBlueLine: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(102,157,204)',
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  airQualityDot: {
    width: 12,
    height: 12,
    marginLeft: 5,
    backgroundColor: 'rgb(126,211,33)',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 100,
  },
  airQualityText: {
    color: '#fff',
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
    fontSize: 14,
  },
  sunsetImage: {width: 20, height: 20, marginRight: 10},
  sunsetAtWrapper: {flexDirection: 'row', alignItems: 'center'},
  sunsetWrapper: {
    flexDirection: 'row',
  },
  sunsetAt: {
    color: '#fff',
    fontFamily: 'IBMPlexSans-Light',
    fontSize: 14,
  },
  sunsetTime: {
    color: '#fff',
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 14,
  },
});
