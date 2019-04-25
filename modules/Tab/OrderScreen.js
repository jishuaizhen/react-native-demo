import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions } from 'react-native'

class OrderScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.login}>
            <Text style={styles.desc}>你还没有登录，请先登录!</Text>
            <View style={styles.act}>登录</View>
          </View>
        </View>
      );
    }
  }

let swidth = Dimensions.get('window').width;   
const styles = StyleSheet.create({
  login:{
    alignItems:'center'
  },
  desc:{
    color:'rgba(0,0,0,0.7)'
  },
  act:{
    width:swidth/4,
    height:swidth/8,
    backgroundColor:'blue',
    color:'white',
    textAlign:'center'
  }
})
export default OrderScreen;