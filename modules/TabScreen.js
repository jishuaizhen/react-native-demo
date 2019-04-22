import React, {Component} from 'react'
import {View, Text } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Tab/HomeScreen.js';
import OrderScreen from './Tab/OrderScreen.js';
import MyCenterScreen from './Tab/MyCenterScreen.js';

const TabNavigator = createBottomTabNavigator({
  Order:{
    screen: OrderScreen,
    navigationOptions: {
      tabBarLabel:'Order',
      tabBarIcon:({tintColor,focused})=>(
          <Ionicons
            name={focused?'ios-cloud-done':'ios-cloud-outline'}
            size={26}
            style={{color:tintColor}}
          />

      )
    }
  },
  MyCenter:{
    screen: MyCenterScreen,
    navigationOptions: {
      tabBarLabel:'MyCenter',
      tabBarIcon:({tintColor,focused})=>(
          <Ionicons
            name={focused?'ios-information-circle':'ios-information-circle-outline'}
            size={26}
            style={{color:tintColor}}
          />

      )
    }
  },
  Home:{
    screen: HomeScreen,
    navigationOptions: {
        tabBarLabel:'Home',
        tabBarIcon:({tintColor,focused})=>(
            <Ionicons
              name={focused?'ios-remove-circle':'ios-remove-circle-outline'}
              size={26}
              style={{color:tintColor}}
            />

        )
    }
  },
  
  
},{
  tabBarOptions:{
    showIcon:true
  }
});
const TabScreen = createAppContainer(TabNavigator);

export default TabScreen;