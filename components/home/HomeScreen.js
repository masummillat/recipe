import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../profile';
import HomeStackScreen from '../homeStackScreen/HomeStackScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RecipesScreen from '../recipies/RecipesScreen';
import OrdersScreen from '../orders/OrdersScreen';
const Tab = createBottomTabNavigator();
const HomeScreen = ({navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
        name="Home"
        component={HomeStackScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <Ionicons
              name={focused ? 'fast-food' : 'fast-food-outline'}
              size={size}
              color={color}
            />
          ),
        }}
        name="Recipes"
        component={RecipesScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              size={size}
              color={color}
            />
          ),
        }}
        name="Orders"
        component={OrdersScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={size}
              color={color}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};
export default HomeScreen;
