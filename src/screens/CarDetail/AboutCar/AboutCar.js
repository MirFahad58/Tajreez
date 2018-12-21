/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, Text, Image,ScrollView, FlatList } from 'react-native';
import Button from '../../../common/Button/Button';


class AboutCar extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
      <View style={{flex:0.85}}>
      <ScrollView>
      <View style={{ height: 300, backgroundColor: 'white', marginBottom: 10 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.2 }}>
            <View style={{ flexDirection: 'row', paddingVertical: 20, flex: 0.8 }}>
              <View style={{ marginHorizontal: 15,justifyContent:'center' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Lexus IS Neuwagen</Text>
              </View>

              <View style={{ flex: 1, alignItems: 'flex-end',justifyContent:'center' }}>
                <Text style={{ fontSize: 16, backgroundColor: '#d5e7e0', fontWeight:'bold',paddingHorizontal: 15 }}>Excellent Value</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 0.05, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                  <View style={{ flex: 0.8, justifyContent: 'center',alignItems:'flex-end', marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 14, color: 'gray' }}>Free Cancellation</Text>
                  </View>
                  
                </View>
          </View>
          <View style={{ flex: 0.55, backgroundColor: 'white' }}>
            <View style={{ flex: 1, flexDirection: 'column' }}>
                  <Image
                    resizeMode="contain"
                    style={{ flex: 1, width: null, height: null }}
                    source={require('../../../assets/car.png')}
                  />
            </View>
          </View>
          <View style={{ flex: 0.3 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 0.3 }}>
                <Image
                  resizeMode="contain"
                  style={{ flex: 1, width: null, height: null }}
                  source={require('../../../assets/dollar.png')}
                />
              </View>
              <View style={{flex: 0.4, marginVertical: 7, flexDirection: 'column', justifyContent: 'center', marginLeft: 5}}>
                
              </View>
              <View style={{ flex: 0.3, marginVertical: 7, justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize:18 }}> AED 550</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      </View>

      <View>

      </View>

      <View style={{ backgroundColor:'white', paddingHorizontal:20, paddingTop:10}}>
      <Text style={{color:'green',fontWeight:'bold'}}>Car specifications</Text>
        <View style={{paddingTop:10}}>
        <FlatList
                data={[{key: '4x Seat'}, {key: '4x Door'},{key: 'Air Conditioning'}, {key: 'Automatic'}]}
                renderItem={({item}) => <View style={{flexDirection:'row',paddingTop:5}}><Text style={{color:'grey'}}>{item.key}</Text></View>}
              />
        <View style={{borderBottomColor:'lightgrey',borderBottomWidth:1,paddingTop:10}}></View>
        </View>
      
      </View>

      <View style={{ backgroundColor:'white', paddingHorizontal:20, paddingTop:10}}>
      <Text style={{color:'green',fontWeight:'bold'}}>Included completely free</Text>
        <View style={{paddingTop:10}}>
        <FlatList
                data={[{key: 'FREE cancellation'}, {key: 'Collision damage waiver'},{key: 'Theft protection'}]}
                renderItem={({item}) => <View style={{flexDirection:'row',paddingBottom:5}}><Text style={{color:'grey'}}>{item.key}</Text></View>}
              />
        <View style={{borderBottomColor:'lightgrey',borderBottomWidth:1,paddingTop:10}}></View>
        </View>
      
      </View>

      </ScrollView>
      </View>

      <View style={{ flex: 0.15,paddingHorizontal: 15,paddingTop:20,backgroundColor:'white' }}>
              <Button buttonText="Book now" onPress={() => { }} />
            </View>
      </View>
    );
  }
}

export default AboutCar;
