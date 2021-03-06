/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  View, Text, Image, Switch, TouchableWithoutFeedback, BackHandler
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import DatePicker from 'react-native-datepicker';
import { HeaderComponent } from '../../common/Header/Header';
import ModalView from '../../common/Modal/Modal';
import Button from '../../common/Button/Button';
import { styles } from '../../constants';

class Home extends Component {
  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      toggleBottom: 0,
      isUnderAge: false,
      fromDate: '2016-05-15',
      fromTime: '2016-05-15',
      toDate: '2016-05-15',
      toTime: '2016-05-15',
      isReturnToSameLocation: false,
      showPickUpModal: false
    };
  }
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }

  onChangeUnderAgeToggle = (value) => {
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
    const { toggleBottom, isReturnToSameLocation, showPickUpModal } = this.state;
    console.log("STATE IS" , showPickUpModal)
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <HeaderComponent onPress={() => navigation.openDrawer()} showMenuButton />
        <ModalView isVisible={showPickUpModal}>
          <HeaderComponent
            onPress={() => navigation.openDrawer()}
            headerRightText="Save"
            headerText={''}
            headerBackgroundColor={styles.green}
          />
          <GooglePlacesAutocomplete
            placeholder="Search"
            autoFocus={false}
            returnKeyType="search"
            listViewDisplayed="auto"
            fetchDetails
            onPress={(data, details = null) => {
              console.log(data, details);
            }}
            query={{
              key: 'AIzaSyDiJ0oGy0xy6mcrh0c318mtujMTn_ENrSc',
              language: 'en',
            }}
            currentLocation
            nearbyPlacesAPI="GoogleReverseGeocoding"
          />
        </ModalView>
        <View style={{ flex: 0.4, marginHorizontal: 20 }}>

          <View style={{ flex: 1 }}>
            <View style={{ flex: 0.3, backgroundColor: 'white', justifyContent: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Rent a car now</Text>
              <Text style={{ top: 4, color: 'grey' }}> Search and find the best rental prices</Text>
            </View>
            <View style={{ flex: 0.4 }}>
             <TouchableWithoutFeedback onPress={() => this.setState({ showPickUpModal : true})}>
              <View
                style={{
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
              </TouchableWithoutFeedback>
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
              <Switch  trackColor={styles.green} value={isReturnToSameLocation} onValueChange={this.onChangeLocationToggle.bind(this)} />
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
                    date={this.state.fromDate}
                    placeholder="select date"
                    format="DD MMM, ddd"
                    minDate="2018-12-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateInput: {
                        borderWidth: 0,
                        alignItems: 'flex-start',
                      },
                    }}
                    onDateChange={(date) => { this.setState({ fromDate: date }); }}
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
                    date={this.state.toDate}
                    showIcon={false}
                    placeholder="select date"
                    format="DD MMM, ddd"
                    minDate="2018-12-01"
                    confirmBtnText="Confirm"
                    customStyles={{
                      dateInput: {
                        borderWidth: 0,
                        alignItems: 'flex-start',
                      },
                    }}
                    cancelBtnText="Cancel"
                    onDateChange={(date) => { this.setState({ toDate: date }); }}
                  />
                </View>

              </View>

            </View>
            <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                resizeMode="contain"
                style={{ flex: 1, width: 60, height: 60 }}
                source={require('../../assets/fromto.png')}
              />
            </View>
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
                    date={this.state.fromTime}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateInput: {
                        borderWidth: 0,
                        alignItems: 'flex-end',
                      },
                      dateText: {
                        position: 'absolute',
                      },
                    }}
                    onDateChange={(time) => { this.setState({ fromTime: time }); }}
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
                    date={this.state.toTime}
                    placeholder="Select Time"
                    format="LT"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateInput: {
                        borderWidth: 0,
                        alignItems: 'flex-end',
                      },
                    }}
                    onDateChange={(time) => { this.setState({ toTime: time }); }}
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
            <Switch trackColor={styles.green} value={this.state.isUnderAge} onValueChange={this.onChangeUnderAgeToggle.bind(this)} />
          </View>
          <View style={{ flex: 0.75, paddingTop: 20 }}>
            <Button buttonText="SEARCH NOW" onPress={() => navigation.navigate('LoadingScreen')} />
          </View>

        </View>
      </View>
    );
  }
}

export default Home;
