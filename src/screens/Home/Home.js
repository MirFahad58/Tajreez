/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  View, Text, Image, Switch
} from 'react-native';
import { HeaderComponent } from '../../common/Header/Header';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import ModalView from '../../common/Modal/Modal';

class Home extends Component {

  constructor() {
    super()
    this.state = {
      toggleBottom: 0,
      isReturnToSameLocation: false
    }
  }

  onChangeLocationToggle = (value) => {
    if (value) {
      this.setState({ isReturnToSameLocation: value, toggleBottom: 50 })
    }
    else {
      this.setState({ isReturnToSameLocation: value, toggleBottom: 0 })
    }
  }
  render() {
    let { navigation } = this.props;
    let { toggleBottom, isReturnToSameLocation } = this.state
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <HeaderComponent onPress={() => navigation.openDrawer()} />
        {/* <ModalView isVisible={false}>
          <Text>Hello</Text>
        </ModalView>
        <GooglePlacesAutocomplete
          placeholder='Search'
          autoFocus={false}
          returnKeyType={'search'}
          listViewDisplayed='auto'
          fetchDetails={true}
          onPress={(data, details = null) => {
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyDiJ0oGy0xy6mcrh0c318mtujMTn_ENrSc',
            language: 'en',
          }}
          currentLocation={true} 
          nearbyPlacesAPI='GoogleReverseGeocoding'
        /> */}
        <View style={{ flex: .4, marginHorizontal: 10 }}>

          <View style={{ flex: 1 }}>
            <View style={{ flex: .3, backgroundColor: 'white', justifyContent: 'center' }}>
              <Text> Rent a car now</Text>
              <Text style={{ top: 4 }}> Search and find the best rental prices</Text>
            </View>
            <View style={{ flex: .4 }}>
              <View style={{ backgroundColor: 'lightgray', flex: .45, borderRadius: 5, flexDirection: 'row' }}>
                <View style={{ flex: .12, justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    resizeMode="contain"
                    source={require('../../assets/menu.png')}
                    style={{ width: 20, height: 20, tintColor: 'black' }}
                  />
                </View>
                <View style={{ flex: .88, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 16, color: 'black' }}>Pick up location</Text>
                </View>
              </View>
              <View style={{ flex: .1 }} />
              {
                !isReturnToSameLocation && <View style={{ backgroundColor: 'lightgray', flex: .45, borderRadius: 5, flexDirection: 'row' }}>
                  <View style={{ flex: .12, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                      resizeMode="contain"
                      source={require('../../assets/menu.png')}
                      style={{ width: 20, height: 20, tintColor: 'black' }}
                    />
                  </View>
                  <View style={{ flex: .88, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 16, color: 'black' }}>Drop off location</Text>
                  </View>
                </View>
              }
            </View>
            <View style={{ flex: .3, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', bottom: toggleBottom }}>
              <Text>Return to same location</Text>
              <Switch value={isReturnToSameLocation} onValueChange={this.onChangeLocationToggle.bind(this)} />
            </View>
          </View>

        </View>
        <View style={{ flex: .6, backgroundColor: 'green', marginHorizontal: 10 }}>

        </View>
      </View>
    );
  }
}

export default Home;
