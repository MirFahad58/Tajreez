/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  View, FlatList,
} from 'react-native';
import CarItem from '../../common/CarItem/CarItem';
import { HeaderComponent } from '../../common/Header/Header';
import PropTypes from 'prop-types';
class CarListing extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <HeaderComponent showBackButton onPress={() => navigation.goBack()} headerText="Car detail" />
        <FlatList
          data={[{ key: 'a' }, { key: 'b' }, { key: 'd' }]}
          renderItem={({ item }) => <CarItem item={item} />}
        />
      </View>
    );
  }
}

CarListing.propTypes = {
  navigation: PropTypes.func,
};
CarListing.defaultProps = {
  navigation: () => { },
};
export default CarListing;
