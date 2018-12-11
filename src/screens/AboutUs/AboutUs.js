/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { HeaderComponent } from '../../common/Header/Header';


class AboutUs extends Component {
  render() {
    let { navigation } = this.props
    return (
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <HeaderComponent showBackButton onPress={() => navigation.goBack()}/>
        <Text>ABOUT text here</Text>
      </View>
    );
  }
}

export default AboutUs;
