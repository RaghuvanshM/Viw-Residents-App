import React, {FC} from 'react';
import {Text, View, Image, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {window} from '../screens/ControlScreens/LightControlScreen';
interface AppearanceTileProps {
    name: string;
    image: any;
    onPress: () => void;
}

const ratio = window.height / window.width;
const IMAGE_HEIGHT_WIDTH = ratio >= 2 ? wp('42%') : wp('35%');
const MARGIN_TOP = ratio >= 2 ? hp('0.5%') : hp('0.5%');
const MARGIN_BOTTOM = ratio >= 2 ? hp('0.5%') : hp('0.5%');
const AppearanceTile: FC<AppearanceTileProps> = ({name, image, onPress}) => {
  return (
    <TouchableOpacity style={styles.tileWrapper} onPress={onPress}>
      <View style={{marginBottom: MARGIN_BOTTOM}}>
        <Text style={styles.tileText}>{name}</Text>
      </View>
      <View style={{marginTop: MARGIN_TOP}}>
        <Image
          source={image}
          style={{
            resizeMode: 'cover',
            width: IMAGE_HEIGHT_WIDTH,
            height: IMAGE_HEIGHT_WIDTH,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};
export default AppearanceTile;

const styles = StyleSheet.create({
  tileWrapper: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  tileText: {
    fontSize: 14,
    color: 'rgb(52,101,127)',
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
  },
});
