import React, {useCallback, useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageErrorEventData,
  NativeSyntheticEvent,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CameraRoll from '@react-native-community/cameraroll';
import {Props} from '../types/auth';
import MyViewHeader from '../../components/MyViewHeader';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AppearancePreviewCardComponent from '../../components/AppearancePreviewCard';
import images from '../../assets/images';
import {useDispatch, useSelector} from 'react-redux';
import {getIsInternalImage, getSelectedImage} from '../../module/selectors';
import {changeImage} from '../../module/actions';
const window = Dimensions.get('window');
const ratio = window.height / window.width;
const IMAGE_HEIGHT_WIDTH = ratio >= 2 ? wp('42%') : wp('35%');

const AppearancePreview: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const selectedImage = useSelector(getSelectedImage);
  const isInternalImage = useSelector(getIsInternalImage);
  const [localImageSelected, setLocalImageSelected] = useState('');
  const [gallaryImage, setGallayImage] = useState([] as any);

  const fetchAllImages = useCallback(async (after: string) => {
    try {
      const photos = await CameraRoll.getPhotos({
        first: 50,
        after,
        assetType: 'Photos',
      });
      setGallayImage((imgs: any) => [...imgs, ...photos.edges]);
      if (photos.page_info.has_next_page && photos.page_info.end_cursor) {
        fetchAllImages(photos.page_info.end_cursor);
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    fetchAllImages('0');
  }, [fetchAllImages]);

  return (
    <View style={styles.base}>
      <MyViewHeader
        navigation={navigation}
        headerTitle={'Preview'}
        hasAddIcon={false}
        isIcon
      />
      <View style={styles.screenBodyWrapper}>
        <AppearancePreviewCardComponent
          backgroundImage={
            localImageSelected
              ? {uri: localImageSelected}
              : isInternalImage
              ? selectedImage
                ? images[selectedImage]
                : images.initialWelnessHeader
              : {uri: selectedImage}
          }
        />
        {localImageSelected !== '' && (
          <View style={styles.actionButtonsWrapper}>
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={() => {
                setLocalImageSelected('');
                dispatch(
                  changeImage({
                    selectedImage: 'initialWelnessHeader',
                    isInternalImage: true,
                  }),
                );
              }}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonWrapper, styles.saveButtonWrapper]}
              onPress={() => {
                dispatch(
                  changeImage({
                    selectedImage: localImageSelected,
                    isInternalImage: false,
                  }),
                );
                navigation.goBack();
              }}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View
        style={[
          styles.flatListWrapper,
          localImageSelected !== '' && styles.hasButtonAvailable,
        ]}>
        <View style={styles.headTitleWrapper}>
          <Text style={styles.headTitleText}>Wellness Images</Text>
        </View>
        <FlatList
          data={gallaryImage}
          contentContainerStyle={styles.flatListContentContainer}
          renderItem={({item}) => (
            <Tile item={item} setLocalImageSelected={setLocalImageSelected} />
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};
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
    // paddingVertical: wp(ratio >= 2 ? '2%' : '0%'),
    paddingBottom: wp(ratio >= 2 ? '2%' : '2.5%'),
    paddingHorizontal: wp(ratio >= 2 ? '2%' : '4%'),
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  actionButtonsWrapper: {
    flexDirection: 'row',
    marginTop: hp('2%'),
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  buttonWrapper: {
    alignItems: 'center',
    paddingVertical: hp('1%'),
    borderRadius: hp('3%'),
    justifyContent: 'center',
    width: '25%',
  },
  saveButtonWrapper: {
    backgroundColor: 'rgb(88,166,232)',
  },
  cancelButtonText: {
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
    fontSize: 14,
    color: 'rgb(52,101,127)',
  },
  saveButtonText: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 14,
    color: '#FFF',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    borderRadius: hp('2%'),
    height: IMAGE_HEIGHT_WIDTH,
    width: IMAGE_HEIGHT_WIDTH,
  },
  flatListWrapper: {
    width: '95%',
    borderWidth: 0,
    elevation: 2,
    borderRadius: hp('1%'),
    marginVertical: hp(ratio >= 2 ? '2%' : '3%'),
    paddingVertical: hp(ratio >= 2 ? '2%' : '2%'),
    // marginBottom: wp(ratio >= 2 ? '2%' : '5%'),
    paddingBottom: wp(ratio >= 2 ? '2%' : '5%'),
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: ratio >= 2 ? hp('61%') : hp('52%'),
  },
  hasButtonAvailable: {
    height: ratio >= 2 ? hp('54%') : hp('45%'),
  },
  headTitleWrapper: {marginTop: hp('1%'), marginBottom: hp('1%')},
  headTitleText: {
    color: 'rgb(52,101,127)',
    fontSize: 18,
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
  },
  flatListContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingBottom: ratio >= 2 ? hp('3%') : hp('5%'),
  },
  cardWrapper: {
    // flex: 1,
    width: '50%',
    marginVertical: hp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});

export default AppearancePreview;
interface ImageProps {
  image: {uri: string};
}
interface TileProps {
  setLocalImageSelected: (image: string) => void;
  item: {
    id: number;
    node: ImageProps;
  };
}
const Tile: React.FC<TileProps> = ({setLocalImageSelected, item}) => {
  const [hasErrorInImage, setHasErrorInImage] = useState(false);
  const [loadingEnd, setLoadingEnd] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        if (!hasErrorInImage) {
          setLocalImageSelected(item.node.image.uri);
        }
      }}
      disabled={hasErrorInImage && loadingEnd}
      style={styles.cardWrapper}>
      <Image
        style={styles.imageThumbnail}
        onError={(error: NativeSyntheticEvent<ImageErrorEventData>) => {
          console.log(error);
          setHasErrorInImage(true);
        }}
        onLoadEnd={() => {
          console.log('Loading end...');
          setLoadingEnd(true);
        }}
        loadingIndicatorSource={images.spinner}
        source={hasErrorInImage ? images.noImage : {uri: item.node.image.uri}}
      />
    </TouchableOpacity>
  );
};
