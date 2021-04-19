import React, { Component } from 'react'
import {
    Text,
    View,
    ImageBackground,
    Image,
    StyleSheet
} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { images } from '../constants';
class FourthOnboard extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    resizeMode='contain'
                    source={require('../assets/bg.png')}
                    style={styles.imagebackgroundmain}
                >
                    <Text style={styles.headings}
                    >
                        Easily customize at any time
                    </Text>
                    <Text style={styles.Viewsamartglasfirst}
                    >
                        Override the window’s tint setting at any time with this app. Just select the room and tint level.
                    </Text>
                    <View style={styles.sunimage}>
                        <Image
                            source={images.control}
                            style={styles.controlimage}
                        />

                    </View>
                    <View>
                        <Text style={styles.Viewsamartglasfirst} >You can also set a schedule so your glass responds to your needs. </Text>
                    </View>
                    <View style={styles.calendarimagewithtext}>
                        <View style={styles.sunimage}>
                            <Image
                                source={images.calendar}
                                style={styles.calendarimage}
                            />
                        </View>
                        <View>
                            <View style={{flexDirection:"row"}}>
                                <View>
                                    <Image
                                        source={images.check}
                                        style={styles.checkimage}
                                    />
                                </View>
                                <View>
                                   <Text style={styles.checktext}>Weekday Wake Up</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:"row"}}>
                                <View>
                                    <Image
                                        source={images.check}
                                        style={styles.checkimage}
                                    />
                                </View>
                                <View>
                                   <Text style={styles.checktext}>Circadian Rhythm</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:"row"}}>
                                <View>
                                    <Image
                                        source={images.check}
                                        style={styles.checkimage}
                                    />
                                </View>
                                <View>
                                   <Text style={styles.checktext}>WFH Mode</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:"row"}}>
                                <View>
                                    <Image
                                        source={images.check}
                                        style={styles.checkimage}
                                    />
                                </View>
                                <View>
                                   <Text style={styles.checktext}>Custom</Text>
                                </View>
                            </View>
                        </View>
                    </View>


                </ImageBackground>

            </View>
        )
    }
}
export default FourthOnboard;
const styles = StyleSheet.create({


    headings:
    {
        fontSize: 40,
        color: '#34657F',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: hp('10%'),
        width: wp('60%'),
        alignSelf: 'center'
    },
    sunimage: {
        alignSelf: 'center',

    },
    suntext: {
        alignSelf: 'center',
        fontSize: 20,

        color: '#34657F',
    },
    imagebackgroundmain: { height: hp('100%'), marginLeft: hp('4%'), width: wp('90%') },
    Viewsamartglasfirst: {
        fontSize: 20,
        width: wp('60%'),
        textAlign: 'center',
        alignSelf: 'center',
        color: '#34657F',
        marginTop: hp('2%')

    },
    controlimage: {
        height: hp('20%'),
        width: wp('60%'),
        resizeMode: 'contain',

        // alignSelf:'center'
    },
    calendarimage: {
        height: hp('10%'),
        width: wp('20%'),
        resizeMode: 'contain',
    },
    checkimage: {
        height: hp('5%'),
        width: wp('5%'),
        resizeMode: 'contain',
    },
    calendarimagewithtext: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: wp('15%'),
        marginTop:hp('6%')
    },
    checktext:{
        fontSize:22,
        color:'#34657F',
        marginTop:hp('1%'),
        marginLeft:wp('1%'),
    }

})