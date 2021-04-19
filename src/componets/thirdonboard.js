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
class SecondOnbard extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    resizeMode='contain'
                    source={require('../assets/bg.png')}
                    style={styles.imagebackgroundmain}
                >
                    <Text style={styles.benefitheadings}
                    >
                        It’s automatic
                    </Text>
                    <Text style={styles.Viewsamartglasfirst}
                    >
                        The glass tints automatically based on real-time data and our predictive intelligence.
                    </Text>
                    <View style={styles.sunimage}>
                        <Image
                            source={images.exercise}
                            style={styles.firstOnbardimage}
                        />

                    </View>
                    <View>
                        <Text style={styles.Viewsamartglasfirst} >Sit back and enjoy light, views, reduced glare, and optimized thermal
                        comfort that result in an overall feeling of wellness.</Text>
                    </View>
                    <View style={styles.sunimage}>
                        <Image
                            source={images.override}
                            style={styles.firstOnbardimage}
                        />
                    </View>


                </ImageBackground>

            </View>
        )
    }
}
export default SecondOnbard;
const styles = StyleSheet.create({
    benefitheadings:
    {
        fontSize: 40,
        color: '#34657F',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: hp('10%')
    },
    sunimage: {
        alignSelf: 'center',

    },
    suntext: {
        alignSelf: 'center',
        fontSize: 20,

        color: '#34657F',
    },
    imagebackgroundmain: { height: hp('100%'), marginLeft: hp('6%'), width: wp('90%') },
    Viewsamartglasfirst: {
        fontSize: 20,
        width: wp('70%'),
        textAlign: 'center',
        marginLeft: hp('6%'),
        color: '#34657F',
        marginTop: hp('2%')

    },
    firstOnbardimage: { height: hp('30%'), width: wp('30%'), resizeMode: 'contain' }

})