import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { HeaderComponent } from '../../common/Header/Header';
import AboutItem from '../../common/AboutItem/AboutItem';


class Privacy extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <HeaderComponent showBackButton onPress={() => navigation.goBack()} headerText={'Privacy Policy'} />
        <FlatList
          data={[{ key: 'a' }, { key: 'b' }]}
          renderItem={({ item }) => <AboutItem />}
        />

      </View>
    );
  }
}

export default Privacy;
