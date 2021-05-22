import React, {useRef} from 'react';
import {Dimensions, FlatList, StatusBar, StyleSheet, View} from 'react-native';
import {Props} from '../types/auth';
import MyViewHeader from '../../components/MyViewHeader';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AppearanceTile from '../../components/AppearanceTile';
import images from '../../assets/images';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppearancePreviewCardComponent from '../../components/AppearancePreviewCard';
import {useSelector} from 'react-redux';
import {getIsInternalImage, getSelectedImage} from '../../module/selectors';

const Appearance: React.FC<Props> = ({navigation}) => {
  const mainGallery = useRef([
    {
      id: 1,
      image: images.myPhotosMaskGroup,
      name: 'My Photos',
    },
    {
      id: 2,
      image: images.exoRestonMaskGroup,
      name: 'Exo Reston',
    },
    {
      id: 3,
      image: images.wellnessMaskGroup,
      name: 'Wellness',
    },
    {
      id: 4,
      image: images.patternMaskGroup,
      name: 'Pattern',
    },
  ]);
  const selectedImage = useSelector(getSelectedImage);
  const isInternalImage = useSelector(getIsInternalImage);

  return (
    <View style={styles.base}>
      <MyViewHeader
        navigation={navigation}
        headerTitle={'Appearance'}
        hasAddIcon={false}
        isIcon
      />
      <View style={styles.screenBodyWrapper}>
        <AppearancePreviewCardComponent
          backgroundImage={
            isInternalImage
              ? selectedImage
                ? images[selectedImage]
                : images.initialWelnessHeader
              : {uri: selectedImage}
          }
        />
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: hp('4.5%'),
            height: ratio >= 2 ? hp('55%') : hp('50%'),
          }}>
          <FlatList
            data={mainGallery.current}
            contentContainerStyle={styles.flatListContentContainer}
            renderItem={({item}) => {
              return (
                <AppearanceTile
                  name={item.name}
                  image={item.image}
                  onPress={() =>
                    navigation.navigate({
                      name: 'AppearancePreview',
                      params: {name: item.name},
                    })
                  }
                />
              );
            }}
            //Setting the number of column
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
          />
          {/*<View style={{width: '100%', flexDirection: 'row', height: '50%'}}>
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
          </View>*/}
        </View>
      </View>
    </View>
  );
};

const window = Dimensions.get('window');
const ratio = window.height / window.width;

const styles = StyleSheet.create({
  base: {
    // flex: 1,
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
  },
  screenBodyWrapper: {
    width: '93%',
    height: hp(ratio >= 2 ? '88' : '85%'),
    // flex: 1,
    marginVertical: wp(ratio >= 2 ? '4%' : '2%'),
    paddingVertical: wp(ratio >= 2 ? '2%' : '1%'),
    paddingHorizontal: wp(ratio >= 2 ? '1%' : '1%'),
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  flatListContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default Appearance;
