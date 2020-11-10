import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Button,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import {AppButton} from '../commons/AppButton';


const {width, height} = Dimensions.get('window');

const WelcomeScreen = ({navigation}) => {
  const [size, setSize] = useState({width, height});
  const _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    setSize({width: layout.width, height: layout.height});
  };
  return (
    <View style={{flex: 1}} onLayout={_onLayoutDidChange}>
      <Carousel
        delay={2000}
        style={size}
        autoplay={false}
        // pageInfo
        bullets={true}
        bulletsContainerStyle={styles.bulletsContainerStyle}
        onAnimateNextPage={(p) => console.log(p)}>
        <View style={[size]}>
          <ImageBackground
            resizeMode="cover"
            source={require('../../assets/images/screen-1.jpg')}
            style={styles.image}>
            <Text style={styles.textHeader}>Delicious Recipes</Text>
            <Text style={styles.text}>
              Discover yours from thousands of delicious recipes and keep
              ordering
            </Text>
          </ImageBackground>
        </View>
        <View style={[size]}>
          <ImageBackground
            resizeMode="cover"
            source={require('../../assets/images/screen-2.jpg')}
            style={styles.image}>
            <Text style={styles.textHeader}>Become a Chef</Text>
            <Text style={styles.text}>
              Cook yours own recipes. Add description, price & start selling
            </Text>
          </ImageBackground>
        </View>
        <View style={[size]}>
          <ImageBackground
            resizeMode="cover"
            source={require('../../assets/images/screen-3.jpg')}
            style={styles.image}>
            <Text style={styles.textHeader}>Weekly Menu</Text>
            <Text style={styles.text}>
              Personalize your recipes, meal plans and shopping list
            </Text>
          </ImageBackground>
        </View>
      </Carousel>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          top: height / 10,
        }}>
        <Text
          style={{
            fontSize: 18,
            textTransform: 'uppercase',
            color: '#fff',
          }}>
          Welcome to
        </Text>
        <Text
          style={{
            fontSize: 45,
            fontWeight: 'bold',
            color: '#fff',
          }}>
          Recipe
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          bottom: -height / 1.4,
        }}>
        <AppButton
          appButtonContainer={styles.appButtonContainer}
          appButtonText={styles.appButtonText}
          title="Create an account"
          onPress={() => navigation.navigate('Create Account')}
        />
        <AppButton
          appButtonContainer={styles.LoginButtonContainer}
          appButtonText={styles.LoginButtonText}
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
        <AppButton
          appButtonText={styles.laterButtonText}
          title="Maybe Later"
          onPress={() => {}}
          // onPress={() => {
          //   navigation.navigate('Profile');
          // }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  textHeader: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    margin: '10%',
  },
  bulletsContainerStyle: {
    backgroundColor: 'transparent',
    top: height / 1.7,
  },
  createAccount: {
    backgroundColor: '#f89973',
    margin: 10,
  },
  title: {
    marginVertical: 8,
    padding: 16,
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
  LoginButtonContainer: {
    elevation: 8,
    backgroundColor: '#ffffff',
    borderRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
    width: width / 1.7,
  },
  LoginButtonText: {
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  laterButtonText: {
    marginTop: 15,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default WelcomeScreen;
