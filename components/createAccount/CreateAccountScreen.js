import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View,
  Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {AppButton} from '../commons/AppButton';

const {width, height} = Dimensions.get('window');
const CreateAccountScreen = ({navigation}) => {
  return (
    <View style={styles.CreateAccountContainer}>
      <View style={styles.topWrapper}>
        <FontAwesome
          onPress={() => navigation.goBack()}
          style={{margin: 10, marginTop: 30, flex: 1}}
          size={20}
          color="#000"
          name="chevron-left"
        />
        <View style={styles.topContents}>
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
      </View>
      <View style={styles.bottomContentWrapper}>
        <View style={{flex: 2, alignItems: 'center'}}>
          <Text
            style={{
              margin: 10,
              marginTop: 30,
              fontSize: 22,
              fontWeight: 'bold',
            }}>
            Continue With
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
        <View style={{flex: 1, alignItems: 'center'}}>
          <AppButton
            title="Sign up with Email"
            onPress={() => {
              navigation.navigate('SignUpWithEmail');
            }}
            appButtonContainer={styles.appButtonContainer}
            appButtonText={styles.appButtonText}
          />
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Already have an Account ?{' '}
            <Text
              onPress={() => navigation.navigate('Login')}
              style={{color: '#872e0c'}}>
              Login
            </Text>
          </Text>
        </View>
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
  );
};

const styles = StyleSheet.create({
  CreateAccountContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  loginHead: {
    flex: 1,
    backgroundColor: '#f9e1d7',
  },
  topWrapper: {
    flex: 4,
    backgroundColor: '#fff',
  },
  topContents: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContentWrapper: {
    flex: 5,
    backgroundColor: '#fbf6f3',
    borderTopStartRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'column',
  },
  hairline: {
    backgroundColor: '#f17c7c',
    height: 2,
    width: 180,
    marginTop: 10,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#ffffff',
    borderRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
    width: width / 2,
  },
  appButtonText: {
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
export default CreateAccountScreen;
