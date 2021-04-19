import React from 'react';
import { StyleSheet, View, Image, Text, ImageBackground, SafeAreaView, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
        key: 0,
        title: 'Benefits',
        description: 'View Smart Glass automatically\nhas the following benefits',
        subtitle1: 'Maximize Daylight',
        subtitle2: 'Maintains Outside Views',
        subtitle3: 'Minimizes Glare',
        subtitle4: 'Optimal Thermal Comfort',
        image1: require('../assets/sun.png'),
        image2: require('../assets/landscape.png'),
        image3: require('../assets/sun-glasses.png'),
        image4: require('../assets/high-temperature.png'),
    },
    {
        key: 1,
        title: 'How it works',
        description: 'View’s Intelligence predictively controls the window tint based on a number of inputs including the following:',
        subtitle1: 'Time of Day',
        subtitle2: 'Angle of the Sun',
        subtitle3: 'Cloud Cover',
        subtitle4: 'Orientation',
        image1: require('../assets/clock.png'),
        image2: require('../assets/sun.png'),
        image3: require('../assets/cloud.png'),
        image4: require('../assets/angle.png'),
    },
];

export default class Intro extends React.Component {
    _renderItem = ({ item }) => {
        return (
            <View key={item.key} style={styles.slide}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Image style={styles.image} resizeMode="contain" source={item.image1} />
                <Text style={styles.subtitle}>{item.subtitle1}</Text>
                <Image style={styles.image} resizeMode="contain" source={item.image2} />
                <Text style={styles.subtitle}>{item.subtitle2}</Text>
                <Image style={styles.image} resizeMode="contain" source={item.image3} />
                <Text style={styles.subtitle}>{item.subtitle3}</Text>
                <Image style={styles.image} resizeMode="contain" source={item.image4} />
                <Text style={styles.subtitle}>{item.subtitle4}</Text>
            </View>
        );
    }
    _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.setState({ showRealApp: true });
    }
    render() {
        return (
            <ImageBackground style={{ height: "100%" }} resizeMode="cover" source={require('../assets/vbg-nature.png')}>
                <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
                    < AppIntroSlider
                        nextLabel={false}
                        doneLabel={false}
                        data={slides}
                        dotStyle={{ backgroundColor: "gray", marginTop: 15 }}
                        activeDotStyle={{ marginTop: 15, backgroundColor: "#fff" }}
                        renderItem={this._renderItem}
                        onDone={this._onDone} />
                </SafeAreaView>
            </ImageBackground>
        )


    }
}

const styles = {
    slide: {
        backgroundColor: "rgba(255,255,255,0.8)",
        paddingHorizontal: 20,
        justifyContent: "center",
        paddingVertical: 20,
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 14,
        height: "90%",
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
        color: "rgb(52,101,127)"
    },
    description: {
        marginVertical: 20,
        lineHeight: 17,
        textAlign: "center",
        fontSize: 16,
        color: "rgb(52,101,127)"
    },
    subtitle: {
        textAlign: "center",
        fontSize: 18,
        marginVertical: 15,
        color: "rgb(52,101,127)"
    },
    image: {
        alignSelf: "center", height: 55
    }
}