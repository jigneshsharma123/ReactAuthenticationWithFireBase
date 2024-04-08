import React, { useState } from 'react';
import { View, Text, Platform, TouchableOpacity, CheckBox, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const navigation = useNavigation();
    const handleContinue = () => {
        navigation.navigate('EmailVerification');
    }
    function handlePasswordChange(text) {
        setPassword(text);
    }

    function handleUsernameChange(text) {
        setUsername(text);
    }

    function handleEmailChange(text) {
        setEmail(text);
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
            <ScrollView style={styles.container}>
                <Text style={[styles.heading, { fontSize: 40, fontWeight: 'bold' }]}>Forgot password?</Text>
                <Text style={[styles.subheading, { marginTop: 10, fontSize: 16, color: '#777' }]}>Enter your email address and we'll send you confirmation code to reset your password</Text>

                {/* input field for email */}
                <View style={[styles.inputContainer, { marginTop: 20 }]}>
                    <Text style={styles.inputLabel}>Email Address</Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Enter Email Address'
                        style={styles.input}
                    />
                </View>

                {/* for continue button */}
                <View>
                    <TouchableOpacity onPress={handleContinue} style={{
                        backgroundColor: '#FE8C00',
                        padding: 10,
                        borderRadius: 50,
                        marginTop: 60,
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 70
                    }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        padding: 20
    },
    heading: {
        fontWeight: 'bold',
    },
    termsHeading: {
        marginTop: 10,
        fontWeight: 'bold'
    },
    subheading: {
        fontSize: 16,
        color: '#777'
    },
    inputContainer: {
        marginBottom: 8,
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        height: 50,
        borderColor: '#777',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginTop: 15,
        borderRadius: 10,
        padding: 10,
        color: '#000',
        fontWeight: 'bold'

    },
    passwordInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#777',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 10,
    },
    passwordTextInput: {
        flex: 1,
        height: 50,
        fontWeight: 'bold'
    },
    eyeIcon: {
        position: 'absolute',
        top: 13,
        right: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    checkboxLabel: {
        fontSize: 13,
    },
    termsText: {
        color: '#FE8C00',
    },
    signInContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    signInText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default LoginScreen;
