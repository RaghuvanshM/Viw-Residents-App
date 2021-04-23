import React, {FC} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import images from '../../constants/Images';
import {Props} from '../types/no.auth';

const Startwindow: FC<Props> = ({navigation}) => {
  const onTaptostartPress = () => {
    navigation.navigate('Introduction');
  };
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
      <TouchableOpacity
        style={{
          height: '100%',
          width: '100%',
          alignItems: 'center',
          position: 'absolute',
        }}
        onPress={onTaptostartPress}>
        <Text style={styles.taptostarttext}>Tap to start</Text>
      </TouchableOpacity>
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
    fontSize: 18,
    letterSpacing: 2,
    fontFamily: 'GothamMedium',
    alignSelf: 'center',
    color: 'white',
  },
  taptostarttext: {
    fontSize: 20,
    fontFamily: 'IBMPlexSans-Medium',
    color: 'white',
    position: 'relative',
    top: '85%',
  },
  imageview: {
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
});
