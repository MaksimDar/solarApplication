import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Alert, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Line from '../assets/line.png';

const { width } = Dimensions.get('window');

const LogInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleGoBack = () => {
        Alert.alert('Navigation', 'Go back button pressed!');
        // In a real app, you would use navigation.goBack() here
    };

    const handleContinueWithApple = () => {
        Alert.alert('Continue', 'Continue with Apple pressed!');
    };

    const handleContinueWithGoogle = () => {
        Alert.alert('Continue', 'Continue with Google pressed!');
    };

    const handleContinueWithFacebook = () => {
        Alert.alert('Continue', 'Continue with Facebook pressed!');
    };

    const handleSignUp = () => {
        Alert.alert('Sign Up', `Signing up with Email: ${email}, Password: ${password}`);
    };

    return (
        // Main container, filling the screen
        <View style={styles.rootContainer}>
            {/* Header Section */}
            <View style={styles.header}>
                {/* Back Arrow Icon */}
                <Pressable onPress={handleGoBack} style={styles.backButton}>
                    <Svg width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <Path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></Path>
                    </Svg>
                </Pressable>
                {/* Header Title */}
                <Text style={styles.headerTitle}>Join the community</Text>
            </View>

            {/* Main Heading */}
            <Text style={styles.mainHeading}>Get started by creating a free account.</Text>

            {/* Email Input */}
            <View style={styles.inputWrapper}>
                <View style={styles.labelInputContainer}>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#4E7397" // placeholder:text-[#4e7397]
                        style={styles.textInput}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
            </View>

            {/* Password Input */}
            <View style={styles.inputWrapper}>
                <View style={styles.labelInputContainer}>
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#4E7397"
                        style={styles.textInput}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry // Hides password characters
                    />
                </View>
            </View>

            {/* Terms and Privacy Policy */}
            <Text style={styles.termsText}>
                By continuing, you agree to the Terms of Use. Read our Privacy Policy.
            </Text>

            {/* Social/Sign Up Buttons Group */}
            <View style={styles.buttonGroupOuterContainer}>
                <View style={styles.buttonGroupInnerContainer}>
                    {/* Continue with Apple Button */}
                    <Pressable
                        onPress={handleContinueWithApple}
                        style={({ pressed }) => [
                            styles.socialButtonBase,
                            styles.socialButtonBg,
                            { opacity: pressed ? 0.8 : 1 }
                        ]}
                        android_ripple={{ color: '#c4d7e2' }}
                    >
                        <Text style={styles.socialButtonText}>Continue with Apple</Text>
                    </Pressable>

                    {/* Continue with Google Button */}
                    <Pressable
                        onPress={handleContinueWithGoogle}
                        style={({ pressed }) => [
                            styles.socialButtonBase,
                            styles.socialButtonBg,
                            { opacity: pressed ? 0.8 : 1 }
                        ]}
                        android_ripple={{ color: '#c4d7e2' }}
                    >
                        <Text style={styles.socialButtonText}>Continue with Google</Text>
                    </Pressable>

                    {/* Continue with Facebook Button */}
                    <Pressable
                        onPress={handleContinueWithFacebook}
                        style={({ pressed }) => [
                            styles.socialButtonBase,
                            styles.socialButtonBg,
                            { opacity: pressed ? 0.8 : 1 }
                        ]}
                        android_ripple={{ color: '#c4d7e2' }}
                    >
                        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
                    </Pressable>

                    {/* Sign Up Button (Transparent Background) */}
                    <Pressable
                        onPress={handleSignUp}
                        style={({ pressed }) => [
                            styles.socialButtonBase,
                            styles.signUpButtonTransparent,
                            { opacity: pressed ? 0.8 : 1 }
                        ]}
                        android_ripple={{ color: 'rgba(14, 20, 27, 0.1)' }} // Ripple for transparent button
                    >
                        <Text style={styles.socialButtonText}>Sign Up</Text>
                    </Pressable>
                </View>
            </View>

            {/* Bottom Spacer */}
            <View style={styles.bottomSpacer}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1, // size-full min-h-screen
        flexDirection: 'column', // flex-col
        backgroundColor: '#F8FAFC', // bg-slate-50
        // overflow-x-hidden is not directly translatable to View, overflow: 'hidden' is for both axes
        // font-family: Inter is a web style, would need custom font loading in RN
    },
    header: {
        flexDirection: 'row', // flex
        alignItems: 'center', // items-center
        backgroundColor: '#F8FAFC', // bg-slate-50
        padding: 16, // p-4
        paddingBottom: 8, // pb-2
        justifyContent: 'space-between', // justify-between
    },
    backButton: {
        color: '#0E141B', // text-[#0e141b] (for SVG fill)
        flexDirection: 'row', // flex
        width: 48, // size-12 (12 * 4px)
        height: 48, // size-12
        flexShrink: 0, // shrink-0
        alignItems: 'center', // items-center
        justifyContent: 'center', // Center SVG within its touchable area
    },
    headerTitle: {
        color: '#0E141B', // text-[#0e141b]
        fontSize: 18, // text-lg
        fontWeight: 'bold', // font-bold
        lineHeight: 22.5, // leading-tight (1.25 * 18px)
        letterSpacing: -0.27, // tracking-[-0.015em] (-0.015 * 18px)
        flex: 1, // flex-1
        textAlign: 'center', // text-center
        paddingRight: 48, // pr-12 (to offset the back button and center the title)
    },
    mainHeading: {
        color: '#0E141B', // text-[#0e141b]
        fontSize: 22, // text-[22px]
        fontWeight: 'bold', // font-bold
        lineHeight: 27.5, // leading-tight (1.25 * 22px)
        letterSpacing: -0.33, // tracking-[-0.015em] (-0.015 * 22px)
        paddingHorizontal: 16, // px-4
        textAlign: 'center', // text-center
        paddingBottom: 12, // pb-3
        paddingTop: 20, // pt-5
    },
    inputWrapper: {
        flexDirection: 'row', // flex (for the outer div around label)
        maxWidth: 480, // max-w-[480px]
        flexWrap: 'wrap', // flex-wrap
        alignItems: 'flex-end', // items-end
        gap: 16, // gap-4 (Requires RN 0.71+ for direct 'gap')
        paddingHorizontal: 16, // px-4
        paddingVertical: 12, // py-3
        width: '100%', // Ensure it takes full width within its parent
        alignSelf: 'center', // Center the max-width container
    },
    labelInputContainer: { // Corresponds to the <label> div
        flexDirection: 'column', // flex-col
        minWidth: 160, // min-w-40 (40 * 4px)
        flex: 1, // flex-1
    },
    textInput: {
        flexDirection: 'row', // flex
        width: '100%', // w-full
        minWidth: 0, // min-w-0
        flex: 1, // flex-1
        overflow: 'hidden', // overflow-hidden
        borderRadius: 12, // rounded-xl
        color: '#0E141B', // text-[#0e141b]
        backgroundColor: '#E7EDF3', // bg-[#e7edf3]
        height: 56, // h-14 (14 * 4px)
        padding: 16, // p-4
        fontSize: 16, // text-base
        fontWeight: 'normal', // font-normal
        lineHeight: 24, // leading-normal (1.5 * 16px)
        // focus:outline-0 focus:ring-0 border-none focus:border-none are handled by RN's default TextInput behavior or custom styling with state
        borderWidth: 0, // Ensure no default border
    },
    termsText: {
        color: '#4E7397', // text-[#4e7397]
        fontSize: 14, // text-sm
        fontWeight: 'normal', // font-normal
        lineHeight: 21, // leading-normal (1.5 * 14px)
        paddingBottom: 12, // pb-3
        paddingTop: 4, // pt-1
        paddingHorizontal: 16, // px-4
        textAlign: 'center', // text-center
        width: '100%', // Ensure it takes full width to center text
        maxWidth: 480, // Align with other content max-width
        alignSelf: 'center', // Center the max-width container
    },
    buttonGroupOuterContainer: {
        flexDirection: 'row', // flex
        justifyContent: 'center', // justify-center
        width: '100%', // Ensure it takes full width
    },
    buttonGroupInnerContainer: {
        flexDirection: 'column', // flex-col
        flex: 1, // flex-1
        gap: 12, // gap-3 (Requires RN 0.71+ for direct 'gap')
        maxWidth: 480, // max-w-[480px]
        alignItems: 'stretch', // items-stretch
        paddingHorizontal: 16, // px-4
        paddingVertical: 12, // py-3
    },
    socialButtonBase: {
        flexDirection: 'row', // flex
        minWidth: 84, // min-w-[84px]
        maxWidth: 480, // max-w-[480px]
        alignItems: 'center', // items-center
        justifyContent: 'center', // justify-center
        overflow: 'hidden', // overflow-hidden
        borderRadius: 12, // rounded-xl
        height: 40, // h-10 (10 * 4px)
        paddingHorizontal: 16, // px-4
        width: '100%', // w-full
        // Common text styles for buttons, individual colors applied below
    },
    socialButtonBg: {
        backgroundColor: '#E7EDF3', // bg-[#e7edf3]
    },
    socialButtonText: {
        color: '#0E141B', // text-[#0e141b]
        fontSize: 14, // text-sm
        fontWeight: 'bold', // font-bold (or '700')
        lineHeight: 21, // leading-normal (1.5 * 14px)
        letterSpacing: 0.21, // tracking-[-0.015em] (0.015 * 14px)
        // truncate is handled by numberOfLines if needed, but not common for short labels
    },
    signUpButtonTransparent: {
        backgroundColor: 'transparent', // bg-transparent
        borderWidth: 1, // Add a subtle border for transparent button visibility
        borderColor: '#0E141B', // Choose a color for the border
    },
    bottomSpacer: {
        height: 20, // h-5 (5 * 4px)
        backgroundColor: '#F8FAFC', // bg-slate-50
        width: '100%', // Ensure it spans full width
    },
});

export default SignUpScreen;