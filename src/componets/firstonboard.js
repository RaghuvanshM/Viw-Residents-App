import React, { Component } from 'react'
import {
    Text,
    View,
    ImageBackground,
    Image,
    StyleSheet
} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
class FirstOnbard extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
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
                        Benefits
                    </Text>
                    <Text style={styles.Viewsamartglasfirst}
                    >
                        View Smart Glass automatically
                        has the following benefits:
                    </Text>
                    <View style={styles.sunimage}>
                        <Image
                            source={require('../assets/sun.png')}
                            style={styles.firstOnbardimage}
                        />

                    </View>
                    <View>
                        <Text style={styles.suntext} >Maximize Daylight</Text>
                    </View>
                    <View style={styles.sunimage}>
                        <Image
                            source={require('../assets/landscape.png')}
                            style={styles.firstOnbardimage}
                        />
                    </View>
                    <View>
                        <Text style={styles.suntext}>Maintains Outside Views</Text>
                    </View>
                    <View style={styles.sunimage}>
                        <Image
                            source={require('../assets/sun-glasses.png')}
                            style={styles.firstOnbardimage}
                        />
                    </View>
                    <View>
                        <Text style={styles.suntext}>Minimizes Glare</Text>
                    </View>
                    <View style={styles.sunimage}>
                        <Image
                            source={require('../assets/high-temperature.png')}
                            style={styles.firstOnbardimage}
                        />
                    </View>
                    <View>
                        <Text style={styles.suntext}>Optimal Thermal Comfort</Text>
                    </View>
                </ImageBackground>

            </View>
        )
    }
}
export default FirstOnbard;
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
    imagebackgroundmain: { height: hp('100%'), marginLeft: hp('4%'), marginRight: wp('6%'), width: wp('90%') },
    Viewsamartglasfirst: {
        fontSize: 20,
        width: wp('70%'),
        textAlign: 'center',
        marginLeft: hp('4%'),
        color: '#34657F',
        marginTop: hp('2%')

    },
    firstOnbardimage: { height: hp('12%'), width: wp('12%'), resizeMode: 'contain' }





})