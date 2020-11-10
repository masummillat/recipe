import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Alert,
  Dimensions,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppButton} from '../commons/AppButton';
const {width, height} = Dimensions.get('window');
const LoginForm = ({navigation}) => {
  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
    secure: true,
  });
  const handleChange = (event) => {
    setLoginState((state) => {
      return {
        ...state,
        ...event,
      };
    });
  };
  const handleSubmit = () => {
    console.log(`${loginState.email}-${loginState.password}`);
    navigation.navigate('HomeScreen');
  };
  const handleSecurePassword = () => {
    setLoginState((state) => {
      return {
        ...state,
        secure: !state.secure,
      };
    });
  };

  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <View style={{flex: 2, alignItems: 'center'}}>
          <Text style={{margin: 10, fontSize: 20, fontWeight: 'bold'}}>
            Login With
          </Text>
          <View style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons
              onPress={() => {}}
              style={{margin: 5, backgroundColor: '#db3237', padding: 3}}
              size={25}
              color="#fff"
              name="gmail"
            />
            <MaterialCommunityIcons
              onPress={() => {}}
              style={{margin: 5, backgroundColor: '#3b5999', padding: 3}}
              size={25}
              color="#fff"
              name="facebook"
            />
            <MaterialCommunityIcons
              onPress={() => {}}
              style={{margin: 5, backgroundColor: 'black', padding: 3}}
              size={25}
              color="#fff"
              name="apple"
            />
          </View>
          <View style={styles.hairline} />
        </View>
        <View style={styles.formWrapper}>
          <View>
            <Text style={styles.label}>Email</Text>
            <TextInput
              value={loginState.email}
              onChangeText={(email) => handleChange({email})}
              placeholder={'example@gmail.com'}
              style={styles.input}
            />
          </View>
          <View>
            <Text style={styles.label}>Password</Text>
            <View
              style={{
                flexDirection: 'row',
                width: width / 1.1,
                borderBottomWidth: 1,
                borderColor: '#872e0c',
              }}>
              <TextInput
                value={loginState.password}
                onChangeText={(password) => handleChange({password})}
                placeholder={'Password'}
                secureTextEntry={loginState.secure}
                style={{flex: 1}}
              />
              <MaterialCommunityIcons
                onPress={handleSecurePassword}
                style={{color: 'black'}}
                size={25}
                color="#fff"
                name={loginState.secure ? 'eye' : 'eye-off'}
              />
            </View>
          </View>

          <AppButton
            disabled={loginState.email === '' || loginState.password === ''}
            appButtonContainer={[
              styles.appButtonContainer,
              {
                marginTop: 35,
                backgroundColor:
                  loginState.email !== '' && loginState.password !== ''
                    ? '#f89973'
                    : '#ebecf0',
              },
            ]}
            appButtonText={styles.appButtonText}
            title="Login"
            onPress={handleSubmit}
          />
        </View>
        <View style={styles.formBottomWrapper}>
          <Text style={{color: '#872e0c', fontWeight: 'bold', fontSize: 15}}>
            Forgot Password?
          </Text>
          <Text
            style={{
              margin: 20,
              fontWeight: 'bold',
              fontSize: 15,
              color: '#000',
            }}>
            New User ?{' '}
            <Text
              onPress={() => navigation.navigate('Create Account')}
              style={{color: '#872e0c'}}>
              Create Account
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  hairline: {
    backgroundColor: '#f1f1f1',
    height: 2,
    width: 165,
    marginTop: 10,
  },
  formWrapper: {
    flex: 4,
    alignItems: 'center',
  },
  input: {
    width: width / 1.1,
    height: 44,
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#872e0c',
    marginBottom: 10,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#f89973',
    borderRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
    width: width / 1.7,
  },
  appButtonText: {
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  formBottomWrapper: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
export default LoginForm;
