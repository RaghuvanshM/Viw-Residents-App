import React from 'react';
import {
  Image,
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../assets/images';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface CheckBoxSelectionListProps {
  text: string;
  isSelected: boolean;
  changeChecked: () => void;
  customTextStyle?: StyleProp<TextStyle>;
}
const CheckBoxSelectionList: React.FC<CheckBoxSelectionListProps> = ({
  text,
  changeChecked,
  isSelected,
  customTextStyle,
}) => {
  return (
    <View style={styles.checkListWrapper}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={changeChecked}
        style={styles.checkBoxWrapper}>
        <Image
          source={isSelected ? images.checkBox : images.checkBoxUnchecked}
          style={styles.checkBox}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={changeChecked}
        style={styles.checkBoxTextWrapper}>
        <Text style={[styles.user, styles.checkedText, customTextStyle]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default CheckBoxSelectionList;
const styles = StyleSheet.create({
  checkListWrapper: {flexDirection: 'row', width: '100%'},
  checkBoxWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp('0.5%'),
  },
  checkBox: {height: 24, width: 24},
  user: {alignItems: 'center', color: 'rgb(52,101,127)'},
  checkBoxTextWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  checkedText: {
    fontSize: 14,
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
  },
});
