import React, { useState } from 'react';
import { View, Text, Platform, TouchableOpacity, CheckBox, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = ({ route }) => {
    const { handleRegisterUser , handleGoogleSignIn} = route.params; // Extracting handleRegisterUser from route.params
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [showPasswordReqMsg, setShowPasswordReqMsg] = useState(false);
    const navigation = useNavigation();

    const goToLogin = () => navigation.navigate('Login');
    const handlePasswordChange = (text) => {
        // Update password state
        setPassword(text);
    };
    const handlePasswordBlur = () => {
        // Validate password strength when user finishes entering the password
        setPasswordValid(isStrongPassword(password));
    };
    const handleEmailChange = (text) => {
        // Update email state and perform validation
        setEmail(text);
        setEmailValid(true); // Reset validity when user changes the email
    };
    // Function to handle the registration process
    const handleRegister = () => {
        // Perform validation here if needed
        // Email validation regex pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // Check if email is valid
      if (!emailPattern.test(email)) {
        // Invalid email format, set emailValid to false
        setEmailValid(false);
        return; // Exit the function if email is invalid
    }
    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    if (
        password.length < minLength ||
        !uppercaseRegex.test(password) ||
        !lowercaseRegex.test(password) ||
        !numberRegex.test(password) ||
        !specialCharRegex.test(password)
    ) {
        // Password does not meet criteria
        setPasswordValid(false);
        setShowPasswordReqMsg(true);
        setTimeout(() => {
            setShowPasswordReqMsg(false);
        }, 2000);

        return; // Exit the function if password is invalid
    }
        // Call the handleRegisterUser function passed as a prop
        handleRegisterUser(email, username, password);
       navigation.navigate('Login')
    };
    const handleGoogleSignInClick = () => {
        handleGoogleSignIn();
        navigation.navigate('Success');
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
            <ScrollView style={styles.container}>
                <Text style={[styles.heading, { fontSize: 35, fontWeight: 'bold' }]}>Create your new account</Text>
                <Text style={[styles.subheading, { marginTop: 10, fontSize: 16, color: '#777' }]}>Create an account to start looking for the food you like</Text>

                {/* input field for email */}
                <View style={[styles.inputContainer, { marginTop: 20 }]}>
                    <Text style={styles.inputLabel}>Email Address</Text>
                    <TextInput
                value={email}
                onChangeText={handleEmailChange}
                placeholder='Enter Email Address'
                style={[styles.input, !emailValid && styles.invalidInput]} // Apply invalidInput style conditionally
            />
                </View>

                {/* input field for username*/}
                <View style={[styles.inputContainer, { marginTop: 20 }]}>
                    <Text style={styles.inputLabel}>User Name</Text>
                    <TextInput
                        placeholder='Enter User Name'
                        value={username}
                        onChangeText={setUsername}
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
                             style={[styles.passwordTextInput, !passwordValid && styles.invalidInput]}
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
                    {showPasswordReqMsg && <Text style={styles.passwordReqMsg}>Password must be at least 8 characters long and contain uppercase, lowercase, number, and special character.</Text>}

                    {/* terms condition code */}
                    <View style={styles.checkboxContainer}>
                        <TouchableOpacity
                            style={[styles.checkbox, agreeTerms ? { backgroundColor: '#FE8C00' } : null]}
                            onPress={() => setAgreeTerms(!agreeTerms)}
                        >
                            {agreeTerms && <Ionicons name="checkmark" size={24} color="white" />}
                        </TouchableOpacity>
                        <Text style={styles.checkboxLabel}>
                            I Agree with <Text style={styles.termsText}>Terms of Service</Text> and <Text style={styles.termsText}>Privacy Policy</Text>
                        </Text>
                    </View>

                    {/* end of terms condition */}
                    <View>

                    </View>
                    {/* for register btn*/}
                    <View>
                        <TouchableOpacity onPress={handleRegister} style={{
                            backgroundColor: '#FE8C00',
                            padding: 10,
                            borderRadius: 50,
                            marginTop: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 70
                        }}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Or sign in with this will be in between the line*/}
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: '#777' }} />
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#777' }}> Or Sign in with </Text>
                        <View style={{ flex: 1, height: 1, backgroundColor: '#777' }} /></View>
                    {/* now add the google icon for signin center that icon icon*/}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                        <TouchableOpacity onPress={handleGoogleSignIn}>
                        <MaterialCommunityIcons
                            name='google'
                            size={24}
                            color='#DB4437'
                            style={[{ borderWidth: 1, borderColor: '#777', borderRadius: 100, padding: 10, marginRight: 10 }]}
                        />
                        </TouchableOpacity>
                        
                    </View>

                    {/* Have an account? Sign in(clickeble) */}
                    <TouchableOpacity onPress={goToLogin}>
                        <View style={styles.signInContainer}>
                            <Text style={styles.signInText}>Have an account? </Text>
                            <Text style={[styles.signInText, { color: '#FE8C00' }]}>Sign in</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
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
    invalidInput: {
        borderColor: 'red', // Change border color to red when email is invalid
    },
    errorText: {
        color: 'red',
        fontSize: 12,
    },
    passwordReqMsg: {
        color: 'red',
        marginTop: 10,
    },
    
});

export default RegisterScreen;
