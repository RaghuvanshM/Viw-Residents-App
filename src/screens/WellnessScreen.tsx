import React, { Fragment } from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView,
    ImageBackground,
} from 'react-native';
import images from '../assets/images';
import WelcomeCard from '../components/WelcomeCard';
import WellnessCard from '../components/WellnessCard';

import Carousel from '../components/Carousel';
// import RNSpeedometer from 'react-native-speedometer'


const HEADER_MAX_HEIGHT = Dimensions.get('window').height / 2.2;

const WellnessScreen = () => {
    return (
        <Fragment>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <ImageBackground source={images.wellnessHeader} style={styles.header}>
                    <Text style={styles.headerTitle}>Wellness</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image
                            source={images.partlyCloudy}
                            style={{
                                marginRight: 10,
                                width: 30,
                                height: 30,
                                resizeMode: 'contain',
                            }}
                        />
                        <Text style={[styles.headerText, { fontFamily: "IBMPlexSans" }]}>72º Partly Cloudy</Text>
                    </View>

                    <View style={styles.headerRow}>
                        <View
                            style={{
                                alignSelf: 'center',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <Image
                                source={images.sunset}
                                style={{
                                    marginRight: 10,
                                    width: 30,
                                    height: 30,
                                    resizeMode: 'contain',
                                }}
                            />
                            <Text style={styles.headerText}>Sunset at <Text style={{ fontFamily: "IBMPlexSans-Bold" }}>7:21pm</Text></Text>
                        </View>
                    </View>
                </ImageBackground>
                {/* <View style={{ height: 200, justifyContent: "center", alignItems: "center" }}>
                    <RNSpeedometer
                        innerCircleStyle={{ width: 260, height: 130 }}
                        value={20}
                        labels={[{
                            activeBarColor: '#68E143',
                        }, {
                            activeBarColor: '#FFFFBA',
                        }, {
                            activeBarColor: '#F9D9B7',
                        }, {
                            activeBarColor: '#F4B6B4',
                        }, {
                            activeBarColor: '#D9C6DE',
                        }, {
                            activeBarColor: '#D2B3BD',
                        },
                        ]}
                        size={300} />
                </View> */}
                <WellnessCard />
                <WelcomeCard
                    imageUrl={images.femaleHikerBg2}
                    header
                    headerBgColor="rgb(0,152,161)"
                    buttonBgColor="rgb(0,152,161)"
                    cardTitle={'Daily Mindfulness'}
                    cardDescription={
                        'Just 5 minutes of mindfulness a day can make you healthier and happier. Take a few minutes and enjoy your view while observing your breath.'
                    }
                    buttonText="Learn More"
                />

                <Carousel
                    style="slides"
                    itemsPerInterval={1}
                    items={[
                        {
                            title: "Breathe",
                            text: "Just 1 minute of calm breathing can lower your pulse and blood pressure."
                        }, {
                            title: "Breathe",
                            text: "Just 1 minute of calm breathing can lower your pulse and blood pressure."
                        },
                        {
                            title: "Breathe",
                            text: "Just 1 minute of calm breathing can lower your pulse and blood pressure."
                        }, {
                            title: "Breathe",
                            text: "Just 1 minute of calm breathing can lower your pulse and blood pressure."
                        },
                    ]}
                />
            </ScrollView>
        </Fragment >
    );
};
export default WellnessScreen;
const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: HEADER_MAX_HEIGHT,
        justifyContent: "center",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 62,
        color: "#fff",
        fontFamily: "IBMPlexSans-ExtraLight"
    },
    headerRow: {
        paddingVertical: 5,
        width: '100%',
        position: "absolute",
        bottom: '5%'
    },
    headerText: {
        color: "#fff",
        fontSize: 18,
        fontFamily: "IBMPlexSans-Light"
    },
});
