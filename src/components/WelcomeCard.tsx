import React, {FC} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Platform,
} from 'react-native';

interface WelcomeCardProps {
  cardTitle: string;
  header?: boolean;
  cardDescription: string;
  headerBgColor?: string;
  buttonBgColor?: string;
  buttonText: string;
  imageUrl?: ImageSourcePropType;
}
const WelcomeCard: FC<WelcomeCardProps> = ({
  header = false,
  cardTitle,
  cardDescription,
  headerBgColor,
  buttonBgColor,
  buttonText,
  imageUrl,
}) => {
  return (
    <View style={styles.shadowWrap}>
      <View style={styles.card}>
        {imageUrl && (
          <Image style={{height: 150, width: '100%'}} source={imageUrl} />
        )}
        <View
          style={{
            backgroundColor: headerBgColor ? headerBgColor : 'transparent',
            marginBottom: 5,
            paddingVertical: 5,
          }}>
          <Text
            style={[
              styles.title,
              {
                color: headerBgColor ? '#fff' : 'rgb(52,101,127)',
                paddingTop: !header ? 10 : 0,
              },
            ]}>
            {cardTitle}
          </Text>
        </View>

        <Text style={styles.description}>{cardDescription}</Text>

        <TouchableOpacity
          style={[
            styles.btn,
            {backgroundColor: buttonBgColor || 'rgb(88,166,232)'},
          ]}>
          <Text style={styles.btnText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default WelcomeCard;
const styles = StyleSheet.create({
  shadowWrap: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  card: {
    borderRadius: 8,
    margin: 10,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    // paddingHorizontal: 20,
    overflow: 'hidden',
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'IBMPlexSans-Bold',
    color: 'rgb(52,101,127)',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
    color: 'rgb(52,101,127)',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  btn: {
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 20,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
