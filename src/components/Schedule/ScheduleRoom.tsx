import React, {FC, Fragment, useState} from 'react';
import {
  View,
  ImageBackground,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Slider from '../../components/slider/Slider';
import APPCONSTANTS from '../../constants/constants';
import {useSelector} from 'react-redux';
import {getIsInternalImage, getSelectedImage} from '../../module/selectors';
import CheckBoxSelectionList from '../../components/ManagerUsers/CheckboxSelectionList';
import cloneDeep from 'lodash/cloneDeep';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import images from '../../assets/images';
const window = Dimensions.get('window');
const ratio = window.height / window.width;
interface ScheduleRoomProps {
  RoomImage?: string;
  Title: string;
  roomType: string;
}
const ScheduleRoom: FC<ScheduleRoomProps> = ({roomType}) => {
  const selectedImage = useSelector(getSelectedImage);
  const isInternalImage = useSelector(getIsInternalImage);
  const [selectedIndex, setSelectedIndex] = useState(0);
  //   const [scheduleRoomName, setScheduleRoomName] = useState('');
  //   const [isActive, setActive] = useState(false);
  const [roomTypes, setRoomType] = useState([] as any[]);
  //   const [activeDays, setActiveDays] = useState([] as any[]);
  //   const [repeatType, setRepeatType] = useState('Weekly');
  console.log(roomTypes);
  console.log(roomTypes.some(r => r === roomType));
  return (
    <View style={styles.cardcontainer}>
      <CheckBoxSelectionList
        key={'room_type'}
        text={roomType}
        isSelected={roomTypes.some(r => r === roomType)}
        customTextStyle={
          roomTypes.indexOf(roomType) !== -1
            ? {fontFamily: 'IBMPlexSans-Bold', marginBottom: 5, fontSize: 18}
            : {marginBottom: 5, fontSize: 18}
        }
        changeChecked={() => {
          setRoomType(prevRoomTypes => {
            const rooms = cloneDeep(prevRoomTypes);
            const selectedRoomIndex = rooms.findIndex(r => r === roomType);
            if (selectedRoomIndex !== -1) {
              rooms.splice(selectedRoomIndex, 1);
            } else {
              rooms.push(roomType);
            }
            return rooms;
          });
        }}
      />
      <ImageBackground
        style={{
          height: hp('25%'),
          width: wp('95%'),
        }}
        imageStyle={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          marginTop: 20,
        }}
        source={
          isInternalImage
            ? selectedImage
              ? images[selectedImage]
              : images.initialWelnessHeader
            : {uri: selectedImage}
        }>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: roomTypes.some(r => r === roomType)
              ? `rgba(${APPCONSTANTS.controlStatusColor},${
                  selectedIndex === 0
                    ? APPCONSTANTS.controlStatusClearRate
                    : selectedIndex === 1
                    ? APPCONSTANTS.controlStatusLightRate
                    : selectedIndex === 2
                    ? APPCONSTANTS.controlStatusMediumRate
                    : APPCONSTANTS.controlStatusDarkRate
                })`
              : 'rgba(0,0,0,0.25)',
          }}>
          {roomTypes.some(r => r === roomType) ? (
            <Slider
              allColors={['#033D65', '#3173A2', '#66ADE0', '#BBD9EF'].reverse()}
              isHorizontal={true}
              texts={['Dark', 'Medium', 'Light', 'Clear'].reverse()}
              backgroundColor={'rgba(255,255,255,0.2)'}
              changeSelectedIndex={setSelectedIndex}
              size={wp('88%')}
              defaultIndex={selectedIndex}>
              <Fragment>
                {selectedIndex === 0 && (
                  <Image
                    source={images.blueClearBtn}
                    resizeMode={'cover'}
                    style={styles.sliderImage}
                  />
                )}
                {selectedIndex === 1 && (
                  <Image
                    source={images.blueLightBtn}
                    resizeMode={'cover'}
                    style={styles.sliderImage}
                  />
                )}
                {selectedIndex === 2 && (
                  <Image
                    source={images.blueMediumBtn}
                    resizeMode={'cover'}
                    style={styles.sliderImage}
                  />
                )}
                {selectedIndex === 3 && (
                  <Image
                    source={images.blueDarkBtn}
                    resizeMode={'cover'}
                    style={styles.sliderImage}
                  />
                )}
              </Fragment>
            </Slider>
          ) : null}
        </View>
      </ImageBackground>
    </View>
  );
};
export default ScheduleRoom;
const styles = StyleSheet.create({
  cardcontainer: {
    width: wp('95%'),
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 2,
    padding: 20,
    backgroundColor: 'white',
    marginVertical: '2%',
    borderRadius: 20,
  },
  sliderImage: {
    borderWidth: 2,
    width: wp(ratio >= 2 ? '22%' : '20%'),
    height: wp(ratio >= 2 ? '22%' : '20%'),
    marginTop: hp('2.5%'),
  },
});
