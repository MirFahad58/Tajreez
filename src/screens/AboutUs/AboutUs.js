/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { HeaderComponent } from '../../common/Header/Header';


class AboutUs extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <HeaderComponent />
        <Text>ABOUT text here</Text>
      </View>
    );
  }
}

export default AboutUs;
