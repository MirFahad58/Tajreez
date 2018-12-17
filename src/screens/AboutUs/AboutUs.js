/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { HeaderComponent } from '../../common/Header/Header';


class AboutUs extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <HeaderComponent showBackButton onPress={() => navigation.goBack()} />
        <View>
          <View style={{ paddingHorizontal: 25, paddingVertical: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'green' }}>About the company</Text>
          </View>

          <View style={{ paddingHorizontal: 25, paddingVertical: 10 }}>
            <Text style={{ fontSize: 18, color: 'grey', fontWeight: '700' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
          <View style={{
            borderBottomWidth: 2, borderBottomColor: 'lightgrey', paddingVertical: 10, marginHorizontal: 15,
          }}
          />
        </View>
      </View>
    );
  }
}

export default AboutUs;
