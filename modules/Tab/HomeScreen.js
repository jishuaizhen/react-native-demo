import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

class HomeScreen extends Component {
    render() {
      return (
        <View style={{backgroundColor:'white'}}>
          {/* 轮播图区域 */}
          <View style={styles.flash}>
            <Image source={require('../../image/xingkong.jpg')} style={styles.flashpic}></Image>
            <View style={styles.city}>
                <Text style={styles.cityname}>北京</Text>
                <Ionicons
                    name={'ios-water'}
                    size={22}
                    style={{color:'#333'}}
                />
            </View>
          </View>
          {/* 轮播图区域 */}

          <Text style={styles.clean}>-专业清洗-</Text>
          {/* 横排四个分类 */}
          <View style={styles.cleanlist}>
            <View style={styles.cleanitem}>
              <Text style={styles.cleantitle}>衬衣</Text>
              <Image source={require('../../image/chenyi.jpg')} style={styles.cleanimage}></Image>
            </View>
            <View style={styles.cleanitem}>
              <Text style={styles.cleantitle}>鞋</Text>
              <Image source={require('../../image/xie.jpg')} style={styles.cleanimage}></Image>
            </View>
            <View style={styles.cleanitem}>
              <Text style={styles.cleantitle}>家纺</Text>
              <Image source={require('../../image/jiafang.jpg')} style={styles.cleanimage}></Image>
            </View>
            <View style={styles.cleanitem}>
              <Text style={styles.cleantitle}>窗帘</Text>
              <Image source={require('../../image/chuanglian.jpg')} style={styles.cleanimage}></Image>
            </View>
          </View>
          {/* 横排四个分类 */}
          {/* 五个小图标 */}
          <View style={styles.icons}>
            <View style={styles.iconitem}>
              <View style={styles.icon}>
                <Ionicons
                  name={'ios-heart'}
                  size={26}
                />
              </View>
              <Text style={styles.icontitle}>服务介绍</Text>
            </View>
            <View style={styles.iconitem}>
              <View style={styles.icon}>
                <Ionicons
                  name={'ios-home'}
                  size={26}
                />
              </View>
              <Text style={styles.icontitle}>服务介绍</Text>
            </View>
            <View style={styles.iconitem}>
              <View style={styles.icon}>
                <Ionicons
                  name={'ios-list-box'}
                  size={26}
                />
              </View>
              <Text style={styles.icontitle}>服务介绍</Text>
            </View>
            <View style={styles.iconitem}>
              <View style={styles.icon}>
                <Ionicons
                  name={'ios-mail-open'}
                  size={26}
                />
              </View>
              <Text style={styles.icontitle}>服务介绍</Text>
            </View>
            <View style={styles.iconitem}>
              <View style={styles.icon}>
                <Ionicons
                  name={'ios-locate'}
                  size={26}
                />
              </View>
              <Text style={styles.icontitle}>服务介绍</Text>
            </View>
          </View>
          {/* 五个小图标 */}
          {/* 轮播图区域 */}
          <View style={styles.swiper}>
            <Image source={require('../../image/bg.jpg')} style={styles.swiperbg}></Image>
          </View>
          {/* 轮播图区域 */}
        </View>
      );
    }
  }
let swidth = Dimensions.get('window').width; 
let styles = StyleSheet.create({
    flash:{
        width:swidth,
        height:swidth * 512/1024,
        position:'relative'
    },
    flashpic:{
        width:swidth,
        height:swidth * 512/1024
    },
    city:{
        position:'absolute',
        backgroundColor:'rgba(255,255,255,0.6)',
        width:'16%',
        height:26,
        left:'42%',
        top:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:13,
        flexDirection:'row'
    },
    cityname:{
        marginRight:5
    },
    clean:{
      textAlign:'center',
      fontSize:16,
      color:'rgba(0,0,0,0.2)',
      marginTop:15
    },
    cleanlist:{
      flexDirection:'row',
      marginBottom:15,
      borderBottomWidth:10,
      borderBottomColor:'#F3F7FA'
    },
    cleanitem:{
      width:'25%',
      alignItems:'center'
    },
    cleantitle:{
      width:'100%',
      fontSize:15,
      textAlign:'center'
    },
    cleanimage:{
      width:swidth/6,
      height:swidth/6,
      marginTop:15,
      marginBottom:15
    },
    icons:{
      flexDirection:'row'
    },
    iconitem:{
      width:'20%',
      justifyContent:'center',
      alignItems:'center',
    },
    icon:{
      width:swidth*0.2*0.6,
      height:swidth*0.2*0.6,
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.6)',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:5,
      marginBottom:10
    },
    icontitle:{
      fontSize:15,
      marginBottom:10
    },
    swiper:{
      width:'100%',
      height:swidth/3,
    },
    swiperbg:{
      width:'100%',
      height:swidth/3
    }
})
export default HomeScreen;