import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import images from '../../constants/Images';
import MyViewHeader from '../../components/MyViewHeader';
import {Props} from '../types/auth';
import LinearGradient from 'react-native-linear-gradient';
const IntelligenceScreen: React.FC<Props> = ({navigation}) => {
  return (
    <>
      <View style={{marginTop: StatusBar.currentHeight}}>
        <MyViewHeader navigation={navigation} headerTitle={'Intelligence'} />
      </View>
      <ScrollView>
        <View style={styles.base}>
          <LinearGradient
            colors={['#000000', '#193A4B', 'rgb(52, 101, 127)']}
            style={styles.linearGradient}>
            <Image
              source={images.logo}
              style={{
                width: 140,
                height: 100,
                alignSelf: 'center',
                marginTop: '4%',
                resizeMode: 'contain',
              }}
            />

            <View style={{marginTop: '5%'}}>
              <Text style={styles.description}>
                View’s Intelligence predictively controls the window tint based
                on a number of inputs including the following:
              </Text>
            </View>
          </LinearGradient>
          <View style={{marginTop: '10%'}}>
            <Image
              source={images.clocksecond}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.title}>Time of Day</Text>
          </View>
          <View style={{marginTop: '10%'}}>
            <Image
              source={images.sun2}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.title}>Angle of the sun</Text>
          </View>
          <View style={{marginTop: '10%'}}>
            <Image
              source={images.cloud3}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={{...styles.title, marginLeft: '7%'}}>Cloud Cover</Text>
          </View>
          <View style={{margin: '10%'}}>
            <Image
              source={images.angle1}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.title}>Orientation</Text>
          </View>
        </View>
        <View style={styles.bottombase}>
          <View style={{marginTop: '5%'}}>
            <Text style={styles.description}>
              View Smart Glass automatically has the following benefits:
            </Text>
          </View>
          <View style={{marginTop: '10%'}}>
            <Image
              source={images.clocksecond}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.title}>Maximize Daylight</Text>
          </View>
          <View style={{marginTop: '10%'}}>
            <Image
              source={images.landscape2}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.title}>Maintains Outside Views</Text>
          </View>
          <View style={{marginTop: '10%'}}>
            <Image
              source={images.sunglasses2}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.title}>Minimizes Glare</Text>
          </View>
          <View style={{margin: '10%'}}>
            <Image
              source={images.hightemp2}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.title}>Optimal Thermal Comfort</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  base: {
    backgroundColor: 'rgb(52, 101, 127)',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  linearGradient: {
    width: '100%',
    alignItems: 'center',
  },
  description: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    color: 'rgb(106, 187, 255)',
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
  },
  image: {
    alignSelf: 'center',
    height: 55,
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'IBMPlexSans-Medium',
    marginTop: '2%',
  },
  bottombase: {
    flex: 1,
    backgroundColor: 'rgb(25, 58, 75)',
    alignItems: 'center',
  },
});
export default IntelligenceScreen;
