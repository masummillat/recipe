import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Dimensions,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BreakfastTabView from './BreakfastTabView';
import LunchTabView from './LunchTabView';
import DinnerTabView from './DinnerTabView';

const initialLayout = {width: Dimensions.get('window').width};

const RecipesScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'breakfastTabView', title: 'Breakfast'},
    {key: 'lunchTabView', title: 'Lunch'},
    {key: 'dinnerTabView', title: 'Dinner'},
  ]);

  const renderScene = SceneMap({
    breakfastTabView: BreakfastTabView,
    lunchTabView: LunchTabView,
    dinnerTabView: DinnerTabView,
  });
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: '#f89973'}}
      style={{backgroundColor: 'white'}}
      renderLabel={({route, focused, color}) => (
        <Text style={{color: focused ? 'black' : 'grey', fontWeight: 'bold'}}>
          {route.title}
        </Text>
      )}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: '40%'}}>
          Recipes
        </Text>
        <View style={{marginRight: 10}}>
          <Ionicons size={25} name="search" />
        </View>
      </View>
      <View style={styles.content}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9e1d7',
  },
  content: {
    flex: 9,
  },
  scrollView: {
    backgroundColor: 'pink',
  },
  text: {
    fontSize: 42,
  },
  scene: {
    flex: 1,
  },
});

export default RecipesScreen;
