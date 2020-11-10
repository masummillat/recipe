import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LoginForm from './LoginForm';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.loginContainer}>
      <View style={styles.loginHead}>
        <FontAwesome
          onPress={() => navigation.navigate('Welcome')}
          style={{margin: 10}}
          size={25}
          color="#fff"
          name="close"
        />
      </View>
      <View style={styles.loginTop}>
        <Text style={{fontSize: 20, textTransform: 'uppercase'}}>
          Welcome to
        </Text>
        <Text style={{color: '#f89973', fontWeight: 'bold', fontSize: 35}}>
          Recipe
        </Text>
        <Text
          style={{
            fontSize: 15,
            textTransform: 'uppercase',
            fontWeight: 'bold',
          }}>
          Login to your account
        </Text>
      </View>
      <View style={styles.loginFormWrapper}>
        <LoginForm navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {flex: 1, flexDirection: 'column', backgroundColor: 'white'},
  loginHead: {
    flex: 1,
    backgroundColor: '#f9e1d7',
  },
  loginTop: {
    flex: 3,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginFormWrapper: {
    flex: 7,
    backgroundColor: '#fbf6f3',
    borderTopStartRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'column',
  },
});
export default LoginScreen;
