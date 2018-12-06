/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';
import { HeaderComponent } from '../../common/Header/Header';


class Home extends Component {
  render() {
    let { navigation } = this.props;
    return (
      <View style={{flex:1 , backgroundColor:'green'}}>
      <HeaderComponent onPressMenu={() => navigation.openDrawer()} />
            <Text>Home Content here</Text>
      </View>
    );
  }
}

export default Home;
