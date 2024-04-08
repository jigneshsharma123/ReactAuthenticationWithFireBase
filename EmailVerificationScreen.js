import React, { useState, useeffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TimeClockComponent from './TimeClockComponent';
import { FontAwesome } from '@expo/vector-icons';

const EmailVerificationScreen = () => {
    const [verificationCode, setVerificationCode] = useState('');
    const [email, setEmail] = useState('');
    const navigation = useNavigation();
    const redirectToReset = () => {
        navigation.navigate('Reset');
    }
    const handleResend = () => {
        // Add logic to resend the verification code
    };

    const handleContinue = () => {
        // Add logic to submit the verification code
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.OTPHeader}>
                <Text style={styles.headerText}>OTP</Text>
                {/* <TouchableOpacity style={styles.arrowButton}>
                    <FontAwesome name="angle-left" size={24} color="#000" />
                </TouchableOpacity> */}
            </View>
            <Text style={[styles.heading, { fontSize: 35, fontWeight: 'bold' }]}>Email verification</Text>
            <Text style={[styles.subheading, { marginTop: 10, fontSize: 16, color: '#777' }]}>Enter verification code we send you on:Alberts*****@gmail.com</Text>


            <View style={styles.inputContainer}>
                {Array.from({ length: 4 }).map((_, index) => (
                    <TextInput
                        key={index}
                        style={styles.inputField}
                        keyboardType="number-pad"
                        maxLength={1}
                        value={verificationCode[index] || ''}
                        onChangeText={(text) => {
                            const updatedCode = [...verificationCode];
                            updatedCode[index] = text;
                            setVerificationCode(updatedCode.join(''));
                        }}
                    />
                ))}

            </View>
            {/* this is for resend button  */}

            <TouchableOpacity >
                <View style={styles.signInContainer}>
                    <Text style={styles.signInText}>Didn't receive code? </Text>
                    <Text style={[styles.signInText, { color: '#FE8C00' }]}>Resend</Text>
                </View>
            </TouchableOpacity>
            <TimeClockComponent />
            {/* this is for continue btn */}
            <View>
                <TouchableOpacity onPress={redirectToReset} style={{
                    backgroundColor: '#FE8C00',
                    padding: 10,
                    borderRadius: 50,
                    marginTop: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 70
                }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Continue</Text>
                </TouchableOpacity>
            </View>



        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        padding: 20
    },
    heading: {
        fontWeight: 'bold',
    },

    subheading: {
        fontSize: 16,
        color: '#777'
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
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 24,
        marginTop: 50
    },
    inputField: {
        width: 75,
        height: 75,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginHorizontal: 8,
        textAlign: 'center',
        fontSize: 24,
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
    OTPHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 'auto', // Pushes OTP text to the right
        marginRight: 'auto', // Centers the OTP text horizontally
    },
    arrowButton: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 50,
        padding: 10,
        marginRight: 'auto', // Pushes the arrow button to the left
    },

});

export default EmailVerificationScreen;
