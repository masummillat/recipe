import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  VirtualizedList,
} from 'react-native';
import FoodCard from '../homeStackScreen/FoodCard';
import FoodDetails from '../homeStackScreen/FoodDetails';
import {newfood} from '../data/data';

const BreakfastTabView = () => {
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
export default BreakfastTabView;
