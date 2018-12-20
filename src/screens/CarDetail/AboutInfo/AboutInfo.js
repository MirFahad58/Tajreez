/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import AboutItem from '../../../common/AboutItem/AboutItem';
import Button from '../../../common/Button/Button';


class AboutInfo extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: .4, borderBottomWidth: 10, borderBottomColor: 'lightgray' }}>
          <AboutItem title={'Excess'} description={'The car has a damge excess of AED 300 including tax the has a theft exess of'} />
          <AboutItem showUnderLine={false} title={'Collision dmaage waiver (CDW)'} description={'if the car is bodywork gets damaged the most you will pay towards reparis covered by the collision dmage waiver is the damage excess'} />
        </View>
        <View style={{ flex: .4 }}>
          <AboutItem title={'Mileage / Kilometer'} description={'You rental includes unlimited free kilometers'} />
          <AboutItem title={'Age requirements'} description={'Minimum age limit for this car is 24'} />
          <AboutItem showUnderLine={false} title={'Pick up requirements'} description={'A Passport is required'} />
        </View>
        <View style={{ flex: .2, justifyContent: 'center' }}>
          <View style={{ flex: 1, paddingTop: 20, justifyContent: 'center', marginHorizontal: 15 }}>
            <Button buttonText="Book now" onPress={() => { }} />
          </View>
        </View>
      </View>
    );
  }
}

export default AboutInfo;
