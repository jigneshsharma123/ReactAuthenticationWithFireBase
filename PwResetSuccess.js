import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';

const PwResetSuccess = ({ navigation }) => {
    const handleLogout = () => {
        // Add your logout logic here
        // For example, you can navigate to the login screen
        navigation.navigate('Login');
    };

    return (
        <ImageBackground source={require('./bg.png')} style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.messageContainer}>
                    <Image source={require('./Success.png')} style={styles.successImage} />
                    <Text style={styles.heading}>Password changed</Text>
                    <Text style={styles.message}>
                      Password changed successfully, you cna login again with a new password
                    </Text>
                    <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                        <Text style={styles.buttonText}>Got To Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    contentContainer: {
        width: '100%',
        alignItems: 'stretch',
    },
    messageContainer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        
    },
    successImage: {
        width: 150,
        height: 150,
        marginBottom: 10,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#777',
    },
    logoutButton: {
        backgroundColor: '#FE8C00',
        width: '100%',
        paddingVertical: 15,
        borderRadius: 100,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default PwResetSuccess;