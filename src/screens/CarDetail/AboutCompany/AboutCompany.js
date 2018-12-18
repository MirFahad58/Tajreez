/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';


class AboutCompany extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <Text>About Company</Text>
      </View>
    );
  }
}

export default AboutCompany;
