/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  View, Text, ImageBackground,
} from 'react-native';
import Button from '../../common/Button/Button';


class DrawerContent extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.3, backgroundColor: 'transparent' }}>
          <ImageBackground
            style={{
              flex: 1, flexDirection: 'column',
            }}
            source={require('../../assets/sidemenu.jpeg')}
          >

            <View style={{ flex: 0.8, justifyContent: 'flex-end', alignContent: 'flex-start' }}>
              <Text style={{
                fontSize: 20, color: 'white', fontWeight: '900', marginLeft: 20,
              }}
              >
Which car do
              </Text>
            </View>
            <View style={{ justifyContent: 'flex-end', alignContent: 'flex-start' }}>
              <Text style={{
                fontSize: 20, color: 'white', fontWeight: '900', marginLeft: 20,
              }}
              >
you want to driver today?
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ flex: 0.7, backgroundColor: '#323232' }}>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 0.85, paddingLeft: 20 }}>

              <View style={{ flex: 0.1, paddingTop: 40 }}>
                <Text style={{ fontSize: 17, fontWeight: '700', color: 'white' }}>My Booking</Text>
              </View>
              <View style={{ flex: 0.1, paddingTop: 5 }}>
                <Text style={{ fontSize: 17, fontWeight: '700', color: 'white' }}>Payments</Text>
              </View>
              <View style={{ flex: 0.1, paddingTop: 5 }}>
                <Text style={{ fontSize: 17, color: 'white', fontWeight: '700' }}>About Us</Text>
              </View>
              <View style={{ flex: 0.1, paddingTop: 5 }}>
                <Text style={{ fontSize: 17, color: 'white', fontWeight: '700' }}>Settings</Text>
              </View>
              <View style={{ flex: 0.1, paddingTop: 5 }}>
                <Text style={{ fontSize: 17, fontWeight: '700', color: 'white' }}>Privacy Policy</Text>
              </View>
              <View style={{ flex: 0.1, paddingTop: 5 }}>
                <Text style={{ fontSize: 17, color: 'white', fontWeight: '700' }}>Help</Text>
              </View>
              <View style={{ flex: 0.1, paddingTop: 5 }}>
                <Text style={{ fontSize: 17, color: 'white', fontWeight: '700' }}>Contact Us</Text>
              </View>
            </View>

            <View style={{ flex: 0.15, flexDirection: 'row' }}>
              <View style={{
                flex: 0.5, justifyContent: 'center', alignContent: 'center', marginHorizontal: 10, paddingLeft: 10,
              }}
              >
                <Button buttonText="LOGIN" onPress={() => navigation.navigate('LoginScreen')} />
              </View>
              <View style={{
                flex: 0.5, justifyContent: 'center', alignContent: 'center', marginHorizontal: 10, paddingLeft: 10,
              }}
              >
                <Button buttonText="REGISTER NOW" onPress={() => navigation.navigate('SignupScreen')} />
              </View>

            </View>
          </View>

        </View>


      </View>
    );
  }
}

export default DrawerContent;
