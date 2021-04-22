import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    Animated,
    Dimensions,
} from 'react-native';

const HEADER_MAX_HEIGHT = Dimensions.get('window').height / 2.5;
const HEADER_MIN_HEIGHT = Dimensions.get('window').height / 4.5;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
import { sunset, partlyCloudy, wellnessHeaderImg, logo } from '../constants/Images';

import RoomCard from '../componets/RoomCard'
import WelcomeCard from '../componets/WelcomeCard'

export default class HomeScreen extends Component {
    state = {
        scrollAnim: new Animated.Value(0)
    }

    headerTranslateY = () => this.state.scrollAnim.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, -HEADER_SCROLL_DISTANCE],
        extrapolate: 'clamp',
    });

    imageTranslateY = () => this.state.scrollAnim.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, 100],
        extrapolate: 'clamp',
    });

    titleScale = () => this.state.scrollAnim.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [1, 1, 0.9],
        extrapolate: 'clamp',
    });
    titleTranslateY = () => this.state.scrollAnim.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [0, 0, -8],
        extrapolate: 'clamp',
    });

    render() {
        return (
            <>
                <Animated.ScrollView
                    contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
                        { useNativeDriver: true },
                    )}>
                    <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "rgb(102,157,204)", paddingVertical: 10, paddingHorizontal: 10, justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image style={{ width: 20, height: 20, marginRight: 10 }} source={sunset} />
                            <Text style={{ color: "#fff" }}>Sunset at 7:21pm</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ color: "#fff" }}>Outside Air Quality </Text>
                            <View style={{ width: 15, height: 15, marginLeft: 5, backgroundColor: "rgb(126,211,33)", borderWidth: 1, borderColor: "#fff", borderRadius: 100 }} />
                        </View>
                    </View>
                    <WelcomeCard
                        cardTitle={'Welcome Home Emily'}
                        cardDescription={'Your windows are automatically tinting based on our real-time intelligence to provide reduced glare. You can adjust your tint level by tapping on a room and then using the slider.'}
                    />
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                </Animated.ScrollView>
                <Animated.View
                    style={[styles.header, { transform: [{ translateY: this.headerTranslateY() }] }]}>
                    <Animated.Image
                        style={[
                            styles.headerBackground,
                            {
                                transform: [{ translateY: this.imageTranslateY() }],
                            },
                        ]}
                        source={wellnessHeaderImg}
                    />

                    <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
                        <Image source={logo} style={{ width: 140, height: 100, alignSelf: "center", resizeMode: "contain" }} />
                        <View style={styles.headerRow}>
                            <View style={{ alignSelf: "center", flexDirection: "row", alignItems: "center", }}>
                                <Image source={partlyCloudy} style={{ marginRight: 10, width: 30, height: 30, resizeMode: "contain" }} />
                                <Text style={styles.title}>72º Partly Cloudy</Text>
                            </View>
                        </View>
                    </View>
                </Animated.View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    saveArea: {
        flex: 1,
        backgroundColor: '#eff3fb',
    },
    headerRow: {
        paddingVertical: 5,
        backgroundColor: "rgba(0,0,0,0.4)",
        width: "100%"
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#402583',
        backgroundColor: '#ffffff',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 1,
        borderRadius: 10,
        marginHorizontal: 12,
        marginTop: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        // backgroundColor: '#62d1bc',
        overflow: 'hidden',
        height: HEADER_MAX_HEIGHT,
    },
    headerBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
    },
    topBar: {
        marginTop: 40,
        height: Dimensions.get('window').height / 5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    title: {
        color: 'white',
        fontSize: 16,
    },
    avatar: {
        height: 54,
        width: 54,
        resizeMode: 'contain',
        borderRadius: 54 / 2,
    },
    fullNameText: {
        fontSize: 16,
        marginLeft: 24,
    },
});