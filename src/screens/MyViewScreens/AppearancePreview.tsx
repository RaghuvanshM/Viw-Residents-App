import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Props} from '../types/auth';
import MyViewHeader from '../../components/MyViewHeader';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AppearancePreviewCardComponent from '../../components/AppearancePreviewCard';
import {window} from '../ControlScreens/LightControlScreen';
const AppearancePreview: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.base}>
      <MyViewHeader
        navigation={navigation}
        headerTitle={'Preview'}
        hasAddIcon={false}
      />
      <View style={styles.screenBodyWrapper}>
        <AppearancePreviewCardComponent />
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
    width: '100%',
    borderWidth: 0,
    elevation: 5,
    paddingVertical: wp(ratio >= 2 ? '2%' : '1%'),
    paddingBottom: wp(ratio >= 2 ? '2%' : '5%'),
    paddingHorizontal: wp(ratio >= 2 ? '2%' : '4%'),
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});

export default AppearancePreview;
