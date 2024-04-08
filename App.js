import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './RegisterScreen';
import LoginScreen from './LoginScreen';
import LoginSuccessScreen from './LoginSuccessScreen ';
import ForgotPwScreen from './ForgotPwScreen';
import EmailVerificationScreen from './EmailVerificationScreen';
import ResetPwScreen from './ResetPwScreen';
import PwResetSuccess from './PwResetSuccess';
import {app} from './firebaseConfig';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signOut,
  } from 'firebase/auth';
  
const Stack = createStackNavigator();

const App = () => {
    // this function for handle the registration part of the user
  const handleRegisterUser = (email, username, password) => {
  const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, email,password)
  .then((userCredential) => {
    //signup 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
    };
    // this is for handle the login 
    const handleLogin = async (email, password) => {
        const auth = getAuth(app);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // Login successful
            const user = userCredential.user;
            console.log('Login successful:', user);
            return { success: true, user };
        } catch (error) {
            // Login failed
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Login error:', errorMessage);

            // Handle specific error codes
            let warningMessage;
            switch (errorCode) {
                case 'auth/user-not-found':
                    warningMessage = 'No user found with this email. Please check the email address or register for an account.';
                    break;
                case 'auth/invalid-email':
                    warningMessage = 'Invalid email address. Please enter a valid email address.';
                    break;
                case 'auth/wrong-password':
                    warningMessage = 'Incorrect password. Please enter the correct password.';
                    break;
                default:
                    warningMessage = 'Login failed. Please try again later.';
            }
            return { success: false, errorCode, errorMessage, warningMessage };
        }
    };
    // this function is for handling the user logout screen;
    const handleLogOut = async () => {
        const auth = getAuth(app);
        try {
            await signOut(auth);
            // Sign-out successful.
            console.log('Sign-out successful');
            return { success: true };
        } catch (error) {
            // An error happened.
            console.error('Sign-out error:', error.message);
            return { success: false, errorMessage: error.message };
        }
    }

 // handle the google login 
 const handleGoogleSignIn = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log('Google sign-in successful:', user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Google sign-in error:', errorMessage);
    }
  };
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          initialParams={{ handleRegisterUser,handleGoogleSignIn }}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="Login" component={LoginScreen} options={{ headerShown: false }}
        initialParams={{handleLogin}}
        
        />
        <Stack.Screen name="Success" component={LoginSuccessScreen} options={{ headerShown: false }}
        initialParams={{handleLogOut}}
        />
        <Stack.Screen name="Forgot" component={ForgotPwScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EmailVerification" component={EmailVerificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Reset" component={ResetPwScreen} options={{ headerShown: false }} />
        <Stack.Screen name="pwsuccessReaset" component={PwResetSuccess} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
