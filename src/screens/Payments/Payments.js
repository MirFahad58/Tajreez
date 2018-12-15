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
        
        <FlatList
          data={[{id:1,name:"saad",email:"s.saad45@gmail.com"}]}
          renderItem={({ data }) => (
            <View style={{height:100, width:'100%',backgroundColor:'white'}}>
            <Text >item.name</Text>
            <Text>item.email</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />


      </View>
    );
  }
}

export default Payments;
