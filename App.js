import React, {Component} from 'react'
import {View, Text } from 'react-native'
import { createStackNavigator, createAppContainer} from "react-navigation"
import TabScreen from './modules/TabScreen'
import PageScreen from './modules/PageScreen'


export default class App extends Component {

    render(){
      return <AppContainer/>
    }
}
const AppNavigator = createStackNavigator(
  {
    Tab:{
      screen:TabScreen,
      navigationOptions:{
        header:null
      }
    },
    Page:{
      screen:PageScreen,
      navigationOptions:{
        header:null
      }
    }
  }
);
const AppContainer = createAppContainer(AppNavigator);