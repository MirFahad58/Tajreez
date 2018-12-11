/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';
import { HeaderComponent } from '../../common/Header/Header';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

class Home extends Component {
  render() {
    let { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <HeaderComponent onPress={() => navigation.openDrawer()} />
        <GooglePlacesAutocomplete
          placeholder='Search'
          autoFocus={false}
          returnKeyType={'search'}
          listViewDisplayed='auto'
          fetchDetails={true}
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyDiJ0oGy0xy6mcrh0c318mtujMTn_ENrSc',
            language: 'en', // language of the results
            types: '(cities)' // default: 'geocode'
          }}
          styles={{
            textInputContainer: {
              width: '100%'
            },
            description: {
              fontWeight: 'bold'
            },
            predefinedPlacesDescription: {
              color: '#1faadb'
            }
          }}
          currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
          nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          GooglePlacesSearchQuery={{
            rankby: 'distance',
            types: 'food'
          }}
        />
      </View>
    );
  }
}

export default Home;
