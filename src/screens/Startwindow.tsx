import React, {FC, useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import images from '../constants/Images';
import Intro from './Intro';
const Startwindow: FC = () => {
  const [intro, setIntro] = useState(false);
  const onTaptostartPress = () => {
    setIntro(true);
  };
  return (
    <View>
      {!intro ? (
        <ImageBackground
          resizeMode="cover"
          source={images.vgnature}
          style={styles.backgrondimage}>
          <View style={styles.imageview}>
            <View>
              <Image source={images.logo} />
              <Text style={styles.smartwindowtext}>SMART WINDOWS</Text>
            </View>
            <TouchableOpacity onPress={onTaptostartPress}>
              <Text style={styles.taptostarttext}>Tap to start</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      ) : (
        <Intro />
      )}
    </View>
  );
};

export default Startwindow;
const styles = StyleSheet.create({
  backgrondimage: {
    height: '100%',
    resizeMode: 'contain',
  },
  smartwindowtext: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
    fontFamily: 'GothamMedium',
  },
  taptostarttext: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'IBMPlexSans-Medium',
  },
  imageview: {
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
});
