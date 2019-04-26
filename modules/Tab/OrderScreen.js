import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions } from 'react-native'

class OrderScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.login}>
            <Text style={styles.desc}>你还没有登录，请先登录!</Text>
            <Text style={styles.act}>登录</Text>
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
    width:swidth/6,
    height:swidth/13,
    backgroundColor:'#168',
    color:'white',
    textAlign:'center',
    borderRadius:swidth/20,
    lineHeight:swidth/13
  }
})
export default OrderScreen;