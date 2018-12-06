/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';


class DrawerContent extends Component {
  render() {
    return (
      <View style={{flex:1 , backgroundColor:'red'}}>
            <Text>Drawer Content here</Text>
      </View>
    );
  }
}

export default DrawerContent;
