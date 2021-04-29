import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Props} from '../types/auth';
import MyViewHeader from '../../components/MyViewHeader';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AppearanceTile from '../../components/AppearanceTile';
import images from '../../assets/images';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {window} from '../ControlScreens/LightControlScreen';
import AppearancePreviewCardComponent from '../../components/AppearancePreviewCard';
const Appearance: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.base}>
      <MyViewHeader
        navigation={navigation}
        headerTitle={'Appearance'}
        hasAddIcon={false}
      />
      <View style={styles.screenBodyWrapper}>
        <AppearancePreviewCardComponent />
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: ratio >= 2 ? hp('65%') : hp('55%'),
          }}>
          <View style={{width: '100%', flexDirection: 'row', height: '50%'}}>
            <AppearanceTile
              name={'My Photos'}
              image={images.myPhotosMaskGroup}
              onPress={() =>
                navigation.navigate('AppearancePreview', {name: 'My Photos'})
              }
            />
            <AppearanceTile
              name={'Exo Reston'}
              image={images.exoRestonMaskGroup}
              onPress={() =>
                navigation.navigate('AppearancePreview', {name: 'Exo Reston'})
              }
            />
          </View>
          <View style={{width: '100%', flexDirection: 'row'}}>
            <AppearanceTile
              name={'Wellness'}
              image={images.wellnessMaskGroup}
              onPress={() =>
                navigation.navigate('AppearancePreview', {name: 'Wellness'})
              }
            />
            <AppearanceTile
              name={'Patterns'}
              image={images.patternMaskGroup}
              onPress={() =>
                navigation.navigate('AppearancePreview', {name: 'Patterns'})
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const ratio = window.height / window.width;

const styles = StyleSheet.create({
  base: {
    // flex: 1,
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
  },
  screenBodyWrapper: {
    width: '93%',
    height: hp(ratio >= 2 ? '90' : '85%'),
    // flex: 1,
    marginVertical: wp(ratio >= 2 ? '4%' : '2%'),
    paddingVertical: wp(ratio >= 2 ? '2%' : '1%'),
    paddingHorizontal: wp(ratio >= 2 ? '1%' : '1%'),
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
});

export default Appearance;
