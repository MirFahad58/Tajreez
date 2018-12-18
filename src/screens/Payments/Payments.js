/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { HeaderComponent } from '../../common/Header/Header';
import PaymentItem from '../../common/PaymentIem/PaymentItem';


class Payments extends Component {
  render() {
    let { navigation } = this.props
    return (
      <View style={{ flex: 1 }}>
        <HeaderComponent showBackButton onPress={() => navigation.goBack()} headerText={'Payments'} />
        <FlatList
          data={[{ key: 'a' }, { key: 'b' } , { key: 'd' }, { key: 'e' },{ key: 'f' },{ key: 'g' },{ key: 'h' }]}
          numColumns={1}
          renderItem={({ item }) => <PaymentItem item={item} />}
        />
      </View>

    );
  }
}

export default Payments;
