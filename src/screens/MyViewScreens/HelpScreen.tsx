import React from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Platform,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MyViewHeader from '../../components/MyViewHeader';
import {Props} from '../types/auth';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
const HelpScreen: React.FC<Props> = ({navigation}) => {
  return (
    <>
      <View style={{marginVertical: StatusBar.currentHeight}}>
        <MyViewHeader
          navigation={navigation}
          headerTitle={'Help'}
          hasAddIcon
          isIcon={false}
        />
      </View>
      <ScrollView>
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <Text style={styles.notificatintext}>
            Get help from your building manager either by phone or send a
            message here.
          </Text>
          <View>
            <Text style={styles.buidiingmangertext}>Building Manger:</Text>
            <Text style={styles.name}>Tom Wilson</Text>
            <Text style={styles.number}>(213) 555-1212</Text>
          </View>
          <View style={{margin: '3%'}}>
            <Text style={styles.description}>Description</Text>
            <View style={styles.textAreaContainer}>
              <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Enter your description or issue here."
                placeholderTextColor="grey"
                numberOfLines={10}
                multiline={true}
              />
              <TouchableOpacity style={styles.sendbutton}>
                <Text style={styles.sendtext}>Send</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.bottomtext}>Product Design Note: </Text>
            <Text style={styles.bottomtext}>
              Instead of view support, this help request should go to the
              building manager, who can then escalate to view.
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default HelpScreen;
const styles = StyleSheet.create({
  notificatintext: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    color: 'rgb(52, 101, 127)',
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
  },
  buidiingmangertext: {
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
    color: 'rgb(52, 101, 127)',
    marginTop: '4%',
  },
  name: {
    fontSize: 18,
    fontFamily: 'IBMPlexSans-Bold',
    color: 'rgb(52, 101, 127)',
    textAlign: 'center',
  },
  number: {
    fontFamily: 'IBMPlexSans-Bold',
    color: 'rgb(88, 166, 232)',
    textAlign: 'center',
    fontSize: 18,
  },
  description: {
    marginVertical: 20,
    lineHeight: 17,
    fontSize: 16,
    color: 'rgb(52,101,127)',
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
  },
  textAreaContainer: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    width: '100%',
    justifyContent: 'space-between',
  },
  textArea: {
    height: hp('15%'),
    fontSize: 18,
    fontFamily: 'IBMPlexSans-Regular',
  },
  sendbutton: {
    backgroundColor: 'rgb(88, 166, 232)',
    width: 140,
    borderRadius: 30,
    marginLeft: '70%',
    margin: 20,
  },
  sendtext: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'IBMPlexSans-Bold',
    alignSelf: 'center',
    marginVertical: 10,
  },
  bottomtext: {
    marginTop: 20,
    lineHeight: 17,
    fontSize: 16,
    color: 'rgb(47,47,47)',
    ...Platform.select({
      ios: {fontFamily: 'IBMPlexSans'},
      android: {fontFamily: 'IBMPlexSans-Regular'},
    }),
    marginHorizontal: '3%',
  },
});
