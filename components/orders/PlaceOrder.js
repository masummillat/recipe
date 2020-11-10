import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-community/picker';
import RadioButton from '../commons/RadioButton';
import {AppButton} from '../commons/AppButton';
const PlaceOrder = ({navigation}) => {
  const [address, setaddress] = useState('Mogbazar');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#f9e1d7" barStyle="light-content" />
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <View style={{marginLeft: 10}}>
            <Ionicons
              onPress={() => navigation.goBack()}
              size={25}
              name="chevron-back-outline"
            />
          </View>
          <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: '40%'}}>
            Place Order
          </Text>
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.contentMain}>
          <View style={styles.cardBox}>
            <View style={[styles.title]}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Delivery Address
              </Text>
            </View>
            <View>
              <Text>Address</Text>
              <Picker
                selectedValue={address}
                // style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) => setaddress(itemValue)}>
                <Picker.Item label="Mogbazar" value="Mogbazar" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
          </View>
          <View style={styles.cardBox}>
            <View style={[styles.title]}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Your Order</Text>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 5,
                }}>
                <Text style={{fontWeight: 'bold'}}>
                  Extra Cheese Chicken Burger
                </Text>
                <Ionicons
                  onPress={() => {}}
                  size={20}
                  name="close-outline"
                  color="red"
                />
              </View>
              <View style={{margin: 5}}>
                <Text>
                  Get star chef Edward Lee's recipe for Chicken Burgers with
                  Crispy Cheddar Cheese from Food & Wine.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 5,
                }}>
                <Text>KD-100</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Ionicons
                    onPress={() => {}}
                    size={20}
                    name="remove-circle-outline"
                    color="black"
                  />
                  <Text style={{marginHorizontal: 10}}>Qty 1</Text>
                  <Ionicons
                    onPress={() => {}}
                    size={20}
                    name="add-circle-outline"
                    color="black"
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.cardBox}>
            <View style={[styles.title]}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Payment Summary
              </Text>
            </View>
            <View>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    marginBottom: 10,
                  }}>
                  <Text style={{fontWeight: 'bold'}}>Subtotal</Text>
                  <Text style={{fontWeight: 'bold'}}>KD 100</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    marginBottom: 5,
                  }}>
                  <Text>Discount</Text>
                  <Text>KD 10</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    marginBottom: 5,
                  }}>
                  <Text>Delivery</Text>
                  <Text>KD 10</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderTopWidth: 1,
                  padding: 10,
                  borderTopColor: '#f5f5f5',
                }}>
                <Text style={{fontWeight: 'bold'}}>Total</Text>
                <Text style={{fontWeight: 'bold'}}>KD 100</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardBox}>
            <View style={[styles.title]}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Payment Option
              </Text>
            </View>
            <View>
              <RadioButton
                onChange={(val) => {
                  console.log(val);
                }}
                selectedOption={1}
                options={[
                  {id: 1, label: 'Cash on delivery'},
                  {id: 2, label: 'Bkash'},
                  {id: 3, label: 'Card'},
                ]}
                labelStyle={{color: 'black'}}
                radioStyle={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  borderColor: '#f89973',
                }}
                radioWrapperStyle={{margin: 5}}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.contentFooter}>
        <AppButton
          onPress={() => {}}
          appButtonText={{
            fontWeight: 'bold',
            fontSize: 18,
            color: 'white',
          }}
          appButtonContainer={{
            backgroundColor: '#f89973',
            paddingVertical: 10,
            paddingHorizontal: Dimensions.get('window').width / 3,
            borderRadius: 5,
          }}
          title="Confirm Order"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flex: 1,
    backgroundColor: '#f9e1d7',
  },
  header: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginRight: '35%',
    alignItems: 'center',
  },
  contentWrapper: {
    flex: 9,
    backgroundColor: 'white',
  },
  contentMain: {
    flex: 6,
    backgroundColor: 'white',
  },
  cardBox: {
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: 'white',
  },
  title: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentFooter: {
    flex: 1,
    borderTopColor: '#c1c1c1',
    borderTopWidth: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default PlaceOrder;
