import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  VirtualizedList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import FoodCard from './FoodCard';
import FoodDetails from './FoodDetails';
import {newfood} from '../data/data';

const NewTabView = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const getItem = (data, index) => {
    return data[index];
  };
  return (
    <SafeAreaView style={styles.container}>
      {selectedFood !== null && (
        <FoodDetails
          selectedFood={selectedFood}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
      <VirtualizedList
        data={newfood}
        initialNumToRender={4}
        renderItem={({item}) => (
          <FoodCard
            setSelectedFood={setSelectedFood}
            setModalVisible={setModalVisible}
            item={item}
          />
        )}
        keyExtractor={(item) => item.id}
        getItemCount={(data) => data.length}
        getItem={getItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
});

export default NewTabView;
