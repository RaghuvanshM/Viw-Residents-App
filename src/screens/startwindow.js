import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {images, theme} from '../constants';
const {onboarding1, onboarding2, onboarding3} = images;
// theme
const {COLORS, FONTS, SIZES} = theme;
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import OnBoardingComponent from '../componets/onboardcomponent';
import {
  FirstOnbardComponent,
  SecondOnbardComponent,
  ThirdonboardComponent,
} from '..';
import onboardScreen from '../componets';
import PaperOnboarding from 'react-native-paper-onboarding';
import FourthOnboard from '../componets/fourthonboard';
import {LogBox} from 'react-native';

class StartWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalvisible: false,
    };
    console.log(onboardScreen);
  }
  renderDots = () => {
    return (
      <View style={styles.dotsContainer}>
        <Text>.</Text>
      </View>
    );
  };
  callonscroll = () => {
    console.log('hello');
  };
  renderContent = () => {
    return (
      // <Animated.ScrollView
      //     horizontal
      //     pagingEnabled
      //     onScroll={() => { this.callonscroll() }}
      //     scrollEnabled
      //     decelerationRate={0}
      //     scrollEventThrottle={16}
      //     snapToAlignment="center"
      //     showsHorizontalScrollIndicator={false}
      // >
      //     <View style={{ flexDirection: 'row' }}>
      //         {onboardScreen.map((Component, key) => {
      //             console.log(key)
      //             return (
      //                 <Component key={key} />
      //             )
      //         })}

      //     </View>

      // </Animated.ScrollView>
      <PaperOnboarding screens={onboardScreen} />
    );
  };
  componentDidMount() {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }

  render() {
    let {modalvisible} = this.state;
    return (
      <ImageBackground
        source={require('../assets/vbg-nature.png')}
        style={styles.imagebackground}>
        {!modalvisible ? (
          <View style={styles.imageview}>
            <View>
              <Image source={require('../assets/logo-view-logo-white.png')} />
              <Text style={styles.smartwindowtext}>SMART WINDOWS</Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => {
                this.setState({modalvisible: true});
              }}>
              <Text style={styles.taptostarttext}>Tap to start</Text>
            </TouchableWithoutFeedback>
            {this.renderDots()}
          </View>
        ) : null}
        <Modal
          visible={true}
          transparent={true}
          coverScreen={false}
          animationType="fade"
          onRequestClose={() => {
            this.setState({modalvisible: false});
          }}>
          {this.renderContent()}
        </Modal>
      </ImageBackground>
    );
  }
}
export default StartWindow;
const styles = StyleSheet.create({
  imagebackground: {
    width: '100%',
    height: '100%',
    position: 'relative',
    top: 0,
    left: 0,
  },
  imageview: {
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  smartwindowtext: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  taptostarttext: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    marginTop: hp('6%'),
  },
  viewsmartglasstext: {
    fontSize: 20,
    color: '#34657F',
    textAlign: 'center',
    width: wp('70%'),
    margin: hp('3%'),
  },
  benefitheadings: {
    fontSize: 40,
    color: '#34657F',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: hp('10%'),
  },
  sunimage: {
    alignSelf: 'center',
    marginTop: hp('2%'),
  },
  suntext: {
    alignSelf: 'center',
    fontSize: 20,
    margin: hp('1%'),
    color: '#34657F',
  },
});
