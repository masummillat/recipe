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
const SignUpWithEmailForm = ({navigation}) => {
  const [signUpState, setSignUpState] = useState({
    name: '',
    email: '',
    password: '',
    secure: true,
  });
  const handleChange = (event) => {
    setSignUpState((state) => {
      return {
        ...state,
        ...event,
      };
    });
  };
  const handleSubmit = () => {
    console.log(
      `${signUpState.name}-${signUpState.email}-${signUpState.password}`,
    );
    navigation.navigate('HomeScreen');
  };
  const handleSecurePassword = () => {
    setSignUpState((state) => {
      return {
        ...state,
        secure: !state.secure,
      };
    });
  };
  const {email, name, password, secure} = signUpState;
  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <View style={styles.formWrapper}>
          <View>
            <Text style={styles.label}>Name</Text>
            <TextInput
              value={name}
              onChangeText={(name) => handleChange({name})}
              placeholder={'John Doe'}
              style={styles.input}
            />
          </View>
          <View>
            <Text style={styles.label}>Email</Text>
            <TextInput
              value={email}
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
                value={password}
                onChangeText={(password) => handleChange({password})}
                placeholder={'Password'}
                secureTextEntry={secure}
                style={{flex: 1}}
              />
              <MaterialCommunityIcons
                onPress={handleSecurePassword}
                style={{color: 'black'}}
                size={25}
                color="#fff"
                name={secure ? 'eye' : 'eye-off'}
              />
            </View>
          </View>

          <AppButton
            disabled={email === '' || password === '' || name === ''}
            appButtonContainer={[
              styles.appButtonContainer,
              {
                marginTop: 35,
                backgroundColor:
                  email !== '' && name !== '' && password !== ''
                    ? '#f89973'
                    : '#ebecf0',
              },
            ]}
            appButtonText={styles.appButtonText}
            title="Create an account"
            onPress={handleSubmit}
          />
        </View>
        <View style={styles.formBottomWrapper}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Text>By creating an account, I accept recipe's</Text>
            <Text
              onPress={() => navigation.navigate('Terms')}
              style={{
                textDecorationLine: 'underline',
              }}>
              Terms of service
            </Text>
          </View>
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
    marginTop: 30,
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
    // backgroundColor: '#f89973',
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
export default SignUpWithEmailForm;
