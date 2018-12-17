/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, Text,Image } from 'react-native-animatable';


class Home2 extends Component {
  render() {
    const { navigation } = this.props;
    return (
        <View style={{flex:1}}>
            <View style={{flex:0.1, backgroundColor:'red'}}></View>
            <View style={{flex:.44,backgroundColor:'white'}}>
                <View style={{flex:1}}>
                    <View style={{flex:0.2}}>
                        <View style={{flexDirection:'row',paddingVertical:20}}>
                            <View style={{marginHorizontal:20}}>
                                <Text style={{fontSize:18,fontWeight:'bold'}}>BMW F80 M3</Text>
                            </View>

                            <View style={{flex:1,alignItems:'flex-end'}}>
                                <Text style={{fontSize:16,backgroundColor:'#d5e7e0',paddingHorizontal:10}}>Excellent Value</Text>
                            </View>
                            
                        </View>
                        <View style={{flex:1,borderBottomWidth:1,borderBottomColor:'lightgrey',marginHorizontal:15}}></View>
                    </View>
                    <View style={{flex:0.6}}>
                        <View style={{flex:1}}>
                            <View style={{flex:1,flexDirection:'row'}}>
                                <View style={{flex:0.5,backgroundColor:'blue'}}>
                                    <View style={{flexDirection:'column'}}>
                                    <Image
                                        resizeMode="contain"
                                        style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}
                                        source={require('../../assets/logo.png')}
                                        />
                                    </View>
                                    
                                </View>
                                <View style={{flex:0.5, backgroundColor:'green'}}>

                                </View>

                            </View>
                        </View>
                    <View style={{flex:1,borderBottomWidth:1,borderBottomColor:'lightgrey',marginHorizontal:15}}></View>
                    </View>
                    <View style={{flex:0.2}}>

                    </View>
                </View>

            </View>
            <View style={{flex:0.01}}></View>
        </View>
    );
  }
}

export default Home2;
