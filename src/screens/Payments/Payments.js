/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, FlatList,Text } from 'react-native';
import { HeaderComponent } from '../../common/Header/Header';


class Payments extends Component {
  render() {
    let { navigation } = this.props
    return (
      <View style={{ flex: 1 }}>
        <HeaderComponent showBackButton onPress={() => navigation.goBack()} />
      <View style={{flex:0.14,backgroundColor:'white',paddingVertical:20}}>
          <View style={{flex:1}}>
          <View style={{ flex:0.3,flexDirection:'row',marginHorizontal:20}}>
            
            <View style={{flex:0.5,justifyContent:'flex-start',flexDirection:'row'}}>
              <Text style={{fontSize:18,fontWeight:'bold'}}>
                BMW F80 M3
              </Text>
            </View>
            
            <View style={{flex:0.2, justifyContent:'flex-end',flexDirection:'row'}}>
              <Text style={{color:'grey'}}>
                Verifying
              </Text>
            </View>

            <View style={{flex:0.3,alignContent:'flex-end',justifyContent:'flex-end',flexDirection:'row'}}>
              <Text style={{fontSize:18,fontWeight:'bold',color:'green'}}>
                AED 500
              </Text>
            </View>
            
          </View>
          <View style={{flex:0.1,borderTopColor:'lightgrey',borderTopWidth:0.5,marginHorizontal:15}}>
          </View>
          <View style={{flex:0.2,paddingLeft:20}}>
            <Text style={{fontWeight:'bold'}}>
              Madina Mall - Dubai International City
            </Text>

          </View>

          <View style={{flex:0.2,justifyContent:'flex-end',paddingLeft:20}}>
            <Text style={{color:'grey'}}>
              Tue Nov 13 10:00 AM - Fri Nov 20 10:00 AM
            </Text>

          </View>
          </View>
        </View>
        <View style={{flex:0.02}}>

        </View>
      </View>
    );
  }
}

export default Payments;
