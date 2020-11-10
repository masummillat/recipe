import React from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const FoodCard = ({item, setModalVisible, setSelectedFood}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setSelectedFood(item);
        setModalVisible(true);
      }}>
      <View key={item.id} style={styles.item}>
        <ImageBackground source={item.img} style={styles.image}>
          <Text style={styles.text}>{item.title}</Text>
        </ImageBackground>
        <View style={styles.descriptions}>
          <Text numberOfLines={2} ellipsizeMode="tail">
            {item.description}
          </Text>
        </View>
        <View style={styles.priceAndTime}>
          <Text style={{fontWeight: 'bold'}}>KD-{item.kd}</Text>
          <Ionicons
            style={{backgroundColor: '#e2e1e1', padding: 6, marginBottom: 10}}
            size={15}
            name="time-outline">
            {` ${item.time} min`}
          </Ionicons>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 300,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 5,
    shadowColor: '#dcd8d8',
    borderRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1.41,

    elevation: 2,
    // padding: 20,
  },

  image: {
    flex: 4,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  descriptions: {
    flex: 2,
    padding: 10,
  },
  priceAndTime: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  text: {
    color: 'white',
    fontSize: 32,
    margin: 10,
  },
});
export default FoodCard;
