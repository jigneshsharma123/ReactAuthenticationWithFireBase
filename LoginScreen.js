import React, { useState } from 'react';
import { View, Text, Platform, TouchableOpacity, CheckBox, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const LoginScreen = ({ route }) => {
    const {handleLogin} = route.params;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();
    const gotToSign = () => navigation.navigate('Register');
    
    const gotToForgot = () => navigation.navigate('Forgot');
    function handlePasswordChange(text) {
        setPassword(text);
    }

    function handleUsernameChange(text) {
        setUsername(text);
    }

    function handleEmailChange(text) {
        setEmail(text);
    }
    const handleLoginClick = async () => {
        // Call handleLogin function
        const loginResult = await handleLogin(email, password);
    
        // Check if login was successful
        if (loginResult.success) {
            // Navigate to the success screen
            console.log("successfull")
            navigation.navigate('Success');
        } else {
            // Login failed, handle error or display warning message
            console.error('Login failed:', loginResult.errorMessage);
            // Display the warning message to the user (you may implement this part)
            // For example, you can set the warning message state and display it in your UI
        }
    };
    
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
            <ScrollView style={styles.container}>
                <Text style={[styles.heading, { fontSize: 40, fontWeight: 'bold' }]}>Login to your account.</Text>
                <Text style={[styles.subheading, { marginTop: 10, fontSize: 16, color: '#777' }]}>Please sign in to your account</Text>

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

            
                {/* input field for password */}
                <View style={[styles.inputContainer, { marginTop: 20 }]}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <View style={styles.passwordInput}>
                        <TextInput
                            secureTextEntry={!showPassword}
                            placeholder='Enter Password'
                            value={password}
                            onChangeText={setPassword}
                            style={styles.passwordTextInput}
                        />
                        <TouchableOpacity
                            style={styles.eyeIcon}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <Ionicons
                                name={showPassword ? 'eye-off' : 'eye'}
                                size={24}
                                color="gray"
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Forgot password? with color FE8C00  */}
                    <TouchableOpacity onPress={gotToForgot}>
                        <Text style={[styles.subheading, { color: '#FE8C00', marginTop: 10, position: 'absolute', right: 0 }]}>Forgot password?</Text>
                    </TouchableOpacity>



                    <View>

                    </View>
                    {/* for register btn*/}
                    <View>
                        <TouchableOpacity onPress={handleLoginClick} style={{
                            backgroundColor: '#FE8C00',
                            padding: 10,
                            borderRadius: 50,
                            marginTop: 45,
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 70
                        }}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Or sign in with this will be in between the line*/}
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: '#777' }} />
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#777' }}> Or Sign in with </Text>
                        <View style={{ flex: 1, height: 1, backgroundColor: '#777' }} /></View>
                    {/* now add the google icon for signin center that icon icon*/}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                        <MaterialCommunityIcons
                            name='google'
                            size={24}
                            color='#DB4437'
                            style={[{ borderWidth: 1, borderColor: '#777', borderRadius: 100, padding: 10, marginRight: 10 }]}
                        />
                    </View>

                    {/* Have an account? Sign in(clickeble) */}
                    <TouchableOpacity onPress={gotToSign}>
                        <View style={styles.signInContainer}>
                            <Text style={styles.signInText}>Don't Have an account? </Text>
                            <Text style={[styles.signInText, { color: '#FE8C00' }]}>Register</Text>
                        </View>
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
