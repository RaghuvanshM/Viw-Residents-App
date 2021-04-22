import React, { FC, useState } from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
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
      {!intro ? <ImageBackground
        resizeMode="cover"
        source={images.vgnature}
        style={styles.backgrondimage}>
        <View style={styles.imageview}>
          <View>
            <Image source={require('../assets/logo-view-logo-white.png')} />
            <Text style={styles.smartwindowtext}>SMART WINDOWS</Text>
          </View>
          <TouchableWithoutFeedback onPress={onTaptostartPress}>
            <Text style={styles.taptostarttext}>Tap to start</Text>
          </TouchableWithoutFeedback>
        </View>
      </ImageBackground> : <Intro />}
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
    fontWeight: 'bold',
  },
  taptostarttext: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
  imageview: {
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
});
