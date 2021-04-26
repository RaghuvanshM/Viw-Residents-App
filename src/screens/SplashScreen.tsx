import React, {FC} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import images from '../constants/Images';

export const SplashScreen: FC = () => {
  return (
    <View>
      <ImageBackground
        resizeMode="cover"
        source={images.vgnature}
        style={styles.backgrondimage}>
        <View style={styles.imageview}>
          <View>
            <Image source={images.logo} />
            <Text style={styles.smartwindowtext}>SMART WINDOWS</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  backgrondimage: {
    height: '100%',
    resizeMode: 'contain',
  },
  smartwindowtext: {
    fontSize: 18,
    letterSpacing: 2,
    fontFamily: 'GothamMedium',
    alignSelf: 'center',
    color: 'white',
  },
  imageview: {
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
});
