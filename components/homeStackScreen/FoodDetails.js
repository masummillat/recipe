import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import {AppButton} from '../commons/AppButton';

const FoodDetails = ({selectedFood, modalVisible, setModalVisible}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              <Image
                style={styles.image}
                source={selectedFood && selectedFood.img}
              />
              <Ionicons
                style={{position: 'absolute', margin: 15}}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                color="white"
                size={45}
                name="chevron-back-circle"
              />
              <View style={styles.details}>
                <View style={styles.detailsContent}>
                  <Text style={styles.title}>
                    {selectedFood && selectedFood.title}
                  </Text>
                  <View style={styles.tags}>
                    <Text style={styles.tag}>{`KD-${
                      selectedFood && selectedFood.kd
                    }`}</Text>
                    <Text style={styles.tag}>
                      {selectedFood && selectedFood.serving}
                    </Text>
                  </View>
                  <ScrollView>
                    <View>
                      <Text style={styles.title2}>Details</Text>
                      <Text style={styles.descriptions}>
                        {selectedFood && selectedFood.description}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.title2}>Ingredients</Text>
                      {selectedFood &&
                        selectedFood.ingredients.map((item, index) => (
                          <Text style={{fontSize: 15}} key={index}>
                            {item}
                          </Text>
                        ))}
                    </View>
                  </ScrollView>
                </View>
              </View>
            </View>
            <View style={styles.orderWrapper}>
              <AppButton
                onPress={() => {}}
                appButtonContainer={{
                  margin: 10,
                  padding: 10,
                  borderWidth: 2,
                  borderColor: '#bc8b7c',
                  flex: 1,
                  borderRadius: 3,
                }}
                appButtonText={{
                  fontWeight: 'bold',
                  color: '#bc8b7c',
                  textAlign: 'center',
                }}
                title="SCHEDULE ORDER"
              />
              <AppButton
                appButtonContainer={{
                  margin: 10,
                  padding: 10,
                  borderWidth: 2,
                  borderColor: '#bc8b7c',
                  flex: 1,
                  borderRadius: 3,
                }}
                appButtonText={{
                  fontWeight: 'bold',
                  color: '#bc8b7c',
                  textAlign: 'center',
                }}
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('PlaceOrder');
                }}
                title="ORDER NOW"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 7,
    backgroundColor: 'yellow',
  },
  orderWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'stretch',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopColor: '#c1c1c1',
    borderTopWidth: 1,
  },
  image: {
    // resizeMode: 'cover',
    height: '50%',
    width: '100%',
  },
  details: {
    backgroundColor: 'white',
    width: '100%',
    height: '65%',
    position: 'absolute',
    top: '40%',
  },
  detailsContent: {
    top: -40,
    borderRadius: 5,
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    height: '95%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  tags: {
    flexDirection: 'row',
  },
  tag: {
    backgroundColor: '#b0e1cb',
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  title2: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  descriptions: {
    fontSize: 15,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default FoodDetails;
