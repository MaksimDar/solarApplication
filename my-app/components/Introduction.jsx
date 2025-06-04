import React from "react";

import { StyleSheet, Text, View, Image, Pressable, Alert } from "react-native";

const SolarImage = 'https://cdn.usegalileo.ai/sdxl10/357af57e-0631-44c7-b273-5e81aeaade66.png';

const Introduction = () => {
    const handleLogIn = () => {
        Alert.alert('Log in', 'Log in button pressed');
    };
    const handleSignUp = () => {
        Alert.alert('Sign up', 'Sign up button pressed');
    };
    return (
        <View style={styles.section}>
            <View style={styles.container}>
                <Text style={styles.title}>Solar Glossary</Text>
            </View>
            <View >
                <Image source={{ uri: SolarImage }} accessibilityLabel="Solar Image" style={styles.image} />
            </View>
            <Text style={styles.heading}>Welcome to Solar Simplified</Text>
            <Text style={styles.paragraph}>Learn about solar in 5 minutes. No internet required</Text>
            <View style={styles.buttonContainer}>
                <Pressable onPress={handleLogIn} style={({ pressed }) => [
                    styles.buttonBase,
                    styles.loginButton,
                    { opacity: pressed ? 0.8 : 1 },
                ]}>
                    <Text style={styles.loginButtonText}>Log in</Text>
                </Pressable>
                <Pressable onPress={handleSignUp} style={({ pressed }) => [
                    styles.buttonBase,
                    styles.signupButton,
                    { opacity: pressed ? 0.8 : 1 },
                ]}>
                    <Text style={styles.signupButtonText}>Sign up</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    section: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: "#f8fafc",
        // backgroundColor: "yellow",

    },
    container: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: "#f8fafc",
        padding: 4,
        paddingTop: 48,
        paddingBottom: 8,
    },
    title: {
        color: "#0e141b",
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 22,
        textAlign: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 12,
        paddingBottom: 12,
    },
    image: {
        width: 300,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 12,

    },
    heading: {
        color: '#0e141b',
        letterSpacing: -0.01,
        fontSize: 28,
        fontWeight: 'bold',
        lineHeight: 35,
        paddingHorizontal: 16,
        textAlign: 'center',
        paddingBottom: 12,
        paddingTop: 20,
    },
    paragraph: {
        color: '#0e141b',
        fontSize: 16,
        fontWeight: 'normal',
        lineHeight: 24,
        paddingBottom: 12,
        paddingTop: 4,
        paddingHorizontal: 16,
        textAlign: 'center',
    },
    buttonContainer: {
        flex: 1,
        maxWidth: 480,
        flexDirection: 'column',
        alignItems: 'stretch',
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 12,
    },
    buttonBase: {
        flexDirection: 'row',
        minWidth: 84,
        maxWidth: 480,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 12,
        height: 48,
        paddingHorizontal: 20,
        width: '100%',
    },
    loginButton: {
        backgroundColor: '#E7EDF3',
    },
    loginButtonText: {
        color: '#0E141B',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 24,
        letterSpacing: 0.24,
    },
    signupButton: {
        backgroundColor: '#1980E6',
    },
    signupButtonText: {
        color: '#F8FAFC',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 24,
        letterSpacing: 0.24,
    },


});

export default Introduction;