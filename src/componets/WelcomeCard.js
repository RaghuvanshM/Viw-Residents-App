import React, { Component } from 'react';
import { Modal, TouchableOpacity, Text, View, ImageBackground, Image, StyleSheet } from 'react-native';
import { wellnessHeaderImg, sunset, tint1, arrowRight } from "../constants/images";

export default class WelcomeCard extends Component {
    render() {
        const { savings, cardTitle, cardDescription } = this.props;
        return (
            <View style={styles.shadowWrap}>
                <View style={styles.card}>

                    <View style={{ backgroundColor: savings ? "rgb(135,191,43)" : "transparent", marginBottom: 10, paddingVertical: 10 }}>
                        <Text style={[styles.title, { color: savings ? "#fff" : "rgb(52,101,127)", paddingTop: !savings ? 10 : 0 }]}>{cardTitle}</Text>
                    </View>

                    <Text style={styles.description}>{cardDescription}</Text>

                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Got it</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    shadowWrap: {
        shadowColor: "#000",
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
        backgroundColor: "#fff",
        // paddingHorizontal: 20,
        overflow: "hidden",
        paddingBottom: 20,
    },
    title: {
        fontSize: 24,
        color: "rgb(52,101,127)",
        textAlign: "center",
        fontWeight: "bold",
    },
    description: {
        fontSize: 14,
        color: "rgb(52,101,127)",
        textAlign: "center",
        paddingHorizontal: 20,
    },
    btn: {
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "rgb(88,166,232)",
        borderRadius: 50,
        paddingHorizontal: 30,
        paddingVertical: 12,
        marginTop: 20
    },
    btnText: {
        color: "#fff",
        fontWeight: "bold",
    }
});