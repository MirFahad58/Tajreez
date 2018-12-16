/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  View, Text, Image, Switch,
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import DatePicker from 'react-native-datepicker';
import { HeaderComponent } from '../../common/Header/Header';
import ModalView from '../../common/Modal/Modal';
import Button from '../../common/Button/Button';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      toggleBottom: 0,
      date: '2016-05-15',
      isUnderAge: false,
      isReturnToSameLocation: false,
    };
  }

  onChangeBottomToggle = (value) => {
    if (value) {
      this.setState({ isUnderAge: value });
    } else {
      this.setState({ isUnderAge: value });
    }
  }

  onChangeLocationToggle = (value) => {
    if (value) {
      this.setState({ isReturnToSameLocation: value, toggleBottom: 50 });
    } else {
      this.setState({ isReturnToSameLocation: value, toggleBottom: 0 });
    }
  }

  render() {
    const { navigation } = this.props;
    const { toggleBottom, isReturnToSameLocation } = this.state;
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
        <View style={{ flex: 0.4, marginHorizontal: 20 }}>

          <View style={{ flex: 1 }}>
            <View style={{ flex: 0.3, backgroundColor: 'white', justifyContent: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Rent a car now</Text>
              <Text style={{ top: 4, color: 'grey' }}> Search and find the best rental prices</Text>
            </View>
            <View style={{ flex: 0.4 }}>
              <View style={{
                backgroundColor: '#ebebeb', flex: 0.45, borderRadius: 10, flexDirection: 'row',
              }}
              >
                <View style={{ flex: 0.12, justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    resizeMode="contain"
                    source={require('../../assets/search.png')}
                    style={{ width: 20, height: 20, tintColor: 'black' }}
                  />
                </View>
                <View style={{ flex: 0.88, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 18, color: 'grey' }}>Pick-up location</Text>
                </View>
              </View>
              <View style={{ flex: 0.1 }} />
              {
                !isReturnToSameLocation && (
                <View style={{
                  backgroundColor: '#ebebeb', flex: 0.45, borderRadius: 10, flexDirection: 'row',
                }}
                >
                  <View style={{ flex: 0.12, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                      resizeMode="contain"
                      source={require('../../assets/search.png')}
                      style={{ width: 20, height: 20, tintColor: 'black' }}
                    />
                  </View>
                  <View style={{ flex: 0.88, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, color: 'grey' }}>Drop-off location</Text>
                  </View>
                </View>
                )
              }
            </View>
            <View style={{
              flex: 0.3, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', bottom: toggleBottom,
            }}
            >
              <Text style={{ color: 'grey', fontSize: 16 }}>Return to same location</Text>
              <Switch value={isReturnToSameLocation} onValueChange={this.onChangeLocationToggle.bind(this)} />
            </View>
          </View>

        </View>
        <View style={{
          flex: 0.05, marginHorizontal: 10, borderTopWidth: 1, borderTopColor: 'grey', marginTop: 20,
        }}
        />
        <View style={{ flex: 0.3, marginHorizontal: 20 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 0.4, backgroundColor: 'white' }}>
              <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 0.2 }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Date</Text>
                </View>

                <View style={{ flex: 0.1 }}>
                  <Text style={{ fontSize: 16, color: 'grey', justifyContent: 'flex-end' }}>From</Text>
                </View>

                <View style={{ flex: 0.3, flexDirection: 'column' }}>

                  <DatePicker
                    style={{ width: '100%' }}
                    date="2018-12-12"
                    mode="date"
                    showIcon={false}
                    placeholder="select date"
                    format="DD MMM, ddd"
                    minDate="2018-12-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateInput: {
                        borderWidth: 0,
                      },
                    }}
                    onDateChange={(date) => { this.setState({ date }); }}
                  />
                </View>

                <View style={{ flex: 0.1 }}>
                  <Text style={{ fontSize: 16, color: 'grey', justifyContent: 'flex-end' }}>To</Text>
                </View>

                <View style={{ flex: 0.3, flexDirection: 'column' }}>

                  <DatePicker
                    style={{ width: '100%' }}
                    date="2018-12-12"
                    mode="date"
                    showIcon={false}
                    placeholder="select date"
                    format="DD MMM, ddd"
                    minDate="2018-12-01"
                    confirmBtnText="Confirm"
                    customStyles={{
                      dateInput: {
                        borderWidth: 0,
                      },
                    }}
                    cancelBtnText="Cancel"
                    onDateChange={(date) => { this.setState({ date }); }}
                  />
                </View>

              </View>

            </View>
            <View style={{ flex: 0.2 }} />
            <View style={{ flex: 0.4 }}>
              <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 0.2, alignItems: 'flex-end' }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Time</Text>
                </View>

                <View style={{ flex: 0.1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                  <Text style={{ fontSize: 16, color: 'grey' }}>From</Text>
                </View>

                <View style={{ flex: 0.3, flexDirection: 'column' }}>

                  <DatePicker
                    style={{ width: '100%' }}
                    time="09:00AM"
                    mode="time"
                    showIcon={false}
                    placeholder="Select Time"
                    format="LT"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateInput: {
                        borderWidth: 0,
                      },
                      dateText: {
                        position: 'absolute',
                      },
                    }}
                    onDateChange={(date) => { this.setState({ date }); }}
                  />
                </View>

                <View style={{ flex: 0.1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                  <Text style={{ fontSize: 16, color: 'grey' }}>To</Text>
                </View>

                <View style={{ flex: 0.3, flexDirection: 'column' }}>

                  <DatePicker
                    style={{ width: '100%' }}
                    date="2018-12-12"
                    mode="time"
                    showIcon={false}
                    placeholder="Select Time"
                    format="LT"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateInput: {
                        borderWidth: 0,
                      },
                    }}
                    onDateChange={(date) => { this.setState({ date }); }}
                  />
                </View>

              </View>
            </View>
          </View>
        </View>

        <View style={{ flex: 0.25, marginHorizontal: 20 }}>
          <View style={{
            flex: 0.25, alignItems: 'flex-start', backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20,
          }}
          >
            <Text style={{ color: 'grey', fontSize: 16 }}>Are you under 21 years old</Text>
            <Switch value={this.isUnderAge} onValueChange={this.onChangeBottomToggle.bind(this.value)} />
          </View>
          <View style={{ flex: 0.75, paddingTop: 20 }}>
            <Button buttonText="SEARCH NOW" onPress={() => navigation.navigate('SignupScreen')} />
          </View>

        </View>
      </View>
    );
  }
}

export default Home;
