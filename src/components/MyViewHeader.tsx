import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';

import images from '../assets/images';
import {ScreenNavigationProp} from '../screens/types/auth';

interface MyViewHeaderProps {
  navigation: ScreenNavigationProp;
  headerTitle: string;
  hasAddIcon?: boolean;
  addIconPress?: () => void;
  isIcon: boolean;
  saveschedule?: () => void;
  save?: string;
}

const MyViewHeader: React.FC<MyViewHeaderProps> = ({
  navigation,
  headerTitle,
  addIconPress,
  hasAddIcon,
  isIcon,
  save,
}) => {
  return (
    <View style={styles.headerText}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.headerWrapper}>
        <Image source={images.backIcon} style={styles.backIcon} />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.headerTitle}>
        <Text style={styles.headerTitleText}>{headerTitle}</Text>
      </View>

      {isIcon ? (
        <TouchableOpacity
          activeOpacity={hasAddIcon ? 0.2 : 1}
          onPress={addIconPress}
          style={[styles.addUserIcon, !hasAddIcon && {opacity: 0}]}>
          <Image source={images.newUser} style={styles.addUserImage} />
        </TouchableOpacity>
      ) : hasAddIcon ? (
        <TouchableOpacity
          activeOpacity={hasAddIcon ? 0.2 : 1}
          onPress={addIconPress}
          style={[styles.addUserIcon, !hasAddIcon && {opacity: 0}]}>
         <Text style={{fontSize:20,color:'rgb(33, 150 , 243)',fontFamily:'IBMPlexSans-Regular'}}>{save}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    height: 85 - (StatusBar.currentHeight || 0),
    paddingHorizontal: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'flex-start',
  },
  backIcon: {height: 28, width: 28, resizeMode: 'contain'},
  backText: {
    fontSize: 18,
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
    marginBottom: 3,
    color: 'rgb(52,101,127)',
  },
  headerTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  headerTitleText: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 18,
    color: 'rgb(52,101,127)',
  },
  addUserIcon: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  addUserImage: {height: 26, width: 26, resizeMode: 'contain'},
});

export default MyViewHeader;
