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
          numColumns={1}
          renderItem={({ item }) => <CarItem item={item} onPress={() => navigation.navigate('CarDetail')} />}
        />
      </View>
    );
  }
}

CarListing.propTypes = {
  navigation: PropTypes.any,
};
CarListing.defaultProps = {
  navigation: {},
};
export default CarListing;
