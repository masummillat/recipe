/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, Fragment} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Platform,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';
import WelcomeScreen from './components/welcome';
import LoginScreen from './components/login/Login';
import CreateAccountScreen from './components/createAccount/CreateAccountScreen';
import HomeScreen from './components/home/HomeScreen';
import Terms from './components/terms/Terms';
import SignUpScreen from './components/signUpWithEmail/SignUpWithEmail';
import PlaceOrder from './components/orders/PlaceOrder';
const Stack = createStackNavigator();

const App: () => React$Node = () => {
  setTimeout(() => {
    SplashScreen.hide();
  }, 2000);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{title: 'Welcome', headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          options={{title: 'Home ', headerShown: false}}
          component={HomeScreen}
        />
        <Stack.Screen
          name="PlaceOrder"
          options={{
            title: 'Place Order',
            headerShown: false,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
          }}
          component={PlaceOrder}
        />
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen
          options={{title: 'Login', headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{title: 'Sign Up With Email', headerShown: false}}
          name="SignUpWithEmail"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{title: 'Create Account', headerShown: false}}
          name="Create Account"
          component={CreateAccountScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
