import React, {Component} from 'react'
import {View, Text, StyleSheet,  Dimensions, Image} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
class MyCenterScreen extends Component {
    render() {
      return (
        <View>
          {/* 顶部开始 */}
          <View style={styles.top}>
            <Image source={require('../../image/bg.jpg')} style={styles.topbg}></Image>
            <View style={styles.in}>
              <View style={styles.left}>
                <Image source={require('../../image/xingkong.jpg')} style={styles.userpic}></Image>
                <View style={styles.leftin}>
                  <Text style={styles.gologin}>立即登录</Text>
                  <Text style={styles.desc}>让生活多份自在</Text>
                </View>
              </View>
              <Text style={styles.right}>充值 ></Text>
            </View>
          </View>
          {/* 顶部结束 */}
          {/* 钱包开始 */}
          <View style={styles.wallet}>
            <View style={styles.walletleft}>
              <Ionicons
                name={'ios-wallet'}
                size={18}
                style={styles.walleticon}
              />
              <Text>我的钱包</Text>
            </View>
            <Text style={styles.walletright}>开发票</Text>
          </View>
          {/* 钱包结束 */}
          {/* 账户信息 */}
          <View style={styles.account}>
            <View style={styles.accountitem}>
              <Text style={styles.num}>0张</Text>
              <Text style={styles.desc}>优惠券</Text>
            </View>
            <View style={styles.accountitem}>
              <Text style={styles.num}>￥ 0.00</Text>
              <Text style={styles.desc}>余额</Text>
            </View>
            <View style={styles.accountitem}>
              <Text style={styles.num}>0张</Text>
              <Text style={styles.desc}>e卡</Text>
            </View>
            <View style={styles.accountitem}>
              <Text style={styles.num}>0</Text>
              <Text style={styles.desc}>积分</Text>
            </View>
          </View>
          {/* 账户结束 */}
          {/* 其他模块 */}
          <View style={styles.others}>
            <View style={styles.otheritem}>
              <View style={styles.otherleft}>
                <Ionicons
                  name={'ios-pin'}
                  size={25}
                  style={styles.othericon}
                />
                <Text>常用地址</Text>
              </View>
              <Text style={styles.otherright}>></Text>
            </View>
            <View style={styles.otheritem}>
              <View style={styles.otherleft}>
                <Ionicons
                  name={'ios-pint'}
                  size={25}
                  style={styles.othericon}
                />
                <Text>推荐有礼</Text>
              </View>
              <Text style={styles.otherright}>></Text>
            </View>
            <View style={styles.otheritem}>
              <View style={styles.otherleft}>
                <Ionicons
                  name={'ios-pizza'}
                  size={25}
                  style={styles.othericon}
                />
                <Text>积分商城</Text>
              </View>
              <Text style={styles.otherright}>></Text>
            </View>
            <View style={styles.otheritem}>
              <View style={styles.otherleft}>
                <Ionicons
                  name={'ios-planet'}
                  size={25}
                  style={styles.othericon}
                />
                <Text>取送小e招募</Text>
              </View>
              <Text style={styles.otherright}>></Text>
            </View>
          </View>
          <View style={styles.others}>
            <View style={styles.otheritem}>
              <View style={styles.otherleft}>
                <Ionicons
                  name={'ios-play'}
                  size={25}
                  style={styles.othericon}
                />
                <Text>意见反馈</Text>
              </View>
              <Text style={styles.otherright}>></Text>
            </View>
            <View style={styles.otheritem}>
              <View style={styles.otherleft}>
                <Ionicons
                  name={'ios-podium'}
                  size={25}
                  style={styles.othericon}
                />
                <Text>更多</Text>
              </View>
              <Text style={styles.otherright}>></Text>
            </View>
          </View>
          {/* 其他模块 */}
          {/* 客服电话 */}
          <View style={styles.phone}>
          <Ionicons
            name={'ios-tablet-portrait'}
            size={25}
            style={styles.othericon}
          />
          <Text>客服电话</Text>
          </View>
          {/* 客服电话 */}
        </View>
      );
    }
}
let swidth = Dimensions.get('window').width;   
const styles = StyleSheet.create({
  top:{
    width:'100%',
    height:swidth/3,
    justifyContent:'center',
    alignItems:'center'
  },
  topbg:{
    width:'100%',
    height:swidth/3,
    opacity:0.2
  },
  in:{
    width:'100%',
    height:swidth/3,
    position:'absolute',
    left:0,
    top:0,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  left:{
    width:'30%',
    height:swidth/6,
    marginLeft:20,
    flexDirection:'row',
    alignItems:'center'
  },
  right:{
    fontSize:17,
    marginRight:20,
    color:'#FE6F48'
  },
  userpic:{
    width:swidth/7,
    height:swidth/7,
    borderRadius:swidth/14,
    marginRight:5
  },
  gologin:{
    fontSize:18,
    color:'rgba(0,0,0,0.7)'
  },
  desc:{
    color:'rgba(0,0,0,0.5)'
  },
  wallet:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    height:50,
  },
  walletleft:{
    flexDirection:'row',
    alignItems:'center',
  },
  walleticon:{
    marginRight:5,
    marginLeft:20,
  },
  walletright:{
    marginRight:10
  },
  account:{
    height:60,
    width:'100%',
    flexDirection:'row',
    borderTopColor:'rgba(0,0,0,0.6)',
    borderTopWidth:1,
    alignItems:'center',
    borderBottomWidth:10,
    borderBottomColor:'#F3F7FA'
  },
  accountitem:{
    width:'25%',
    height:60,
    justifyContent:'center',
    alignItems:'center'
  },
  num:{
    fontSize:18,
    color:'rgba(0,0,0,0.7)'
  },
  desc:{
    fontSize:16
  },
  others:{
    width:'100%',
    borderBottomWidth:10,
    borderBottomColor:'#F3F7FA'
  },
  otheritem:{
    width:'100%',
    height:50,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    fontSize:25,
  },
  otherleft:{
    marginLeft:20,
    flexDirection:'row',
  },
  othericon:{
    marginRight:20
  },
  otherright:{
    marginRight:20,
    fontSize:25,
  },
  phone:{
    width:'100%',
    height:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth:10,
    borderBottomColor:'#F3F7FA'
  }
})
export default MyCenterScreen;