/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  View, Text, ImageBackground,
} from 'react-native';
import { styles } from '../../constants';
import DrawerItem from '../../common/DrawerItem/DrawerItem';
import { Div } from './style';



const { drawer } = styles;

class DrawerContent extends Component {
  componentWillMount() {
    const { navigation } = this.props;
    navigation.openDrawer()
  }
  render() {
    const { navigation } = this.props;
    return (
      <Div>
        <View style={{ flex: 0.3, backgroundColor: 'transparent' }}>
          <ImageBackground
            style={{
              flex: 1, flexDirection: 'column'
            }}
            blurRadius={2}
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
        <View style={{ flex: 0.7, backgroundColor: drawer.backgroundColor }}>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 0.8, paddingLeft: 20 }}>
              <View style={{ flex: 0.1, marginTop: 20 }} />
              <DrawerItem itemName={'My Booking'} />
              <DrawerItem itemName={'Payments'} />
              <DrawerItem itemName={'About Us'} />
              <DrawerItem itemName={'Settings'} />
              <DrawerItem itemName={'Privacy Policy'} />
              <DrawerItem itemName={'Help'} />
              <DrawerItem itemName={'Contact Us'} />
            </View>

            <View style={{ flex: 0.2, flexDirection: 'row', marginHorizontal: 10 }}>
              <View style={{
                flex: 0.5, justifyContent: 'center', marginHorizontal: 10, marginVertical: 25, borderColor: 'white', borderWidth: 1
              }}
              >
                <Text style={{ fontSize: 14, alignSelf: 'center', color: 'white', fontWeight: 'bold' }}>LOGIN</Text>
              </View>
              <View style={{
                backgroundColor: '#ffdc69', flex: 0.5, justifyContent: 'center', marginHorizontal: 10, marginVertical: 25, borderColor: '#ffdc69', borderWidth: 1
              }}
              >
                <Text style={{ fontSize: 14, alignSelf: 'center', color: 'black', fontWeight: 'bold' }}>REGISTER NOW</Text>
              </View>

            </View>
          </View>

        </View>
        </Div>
    );
  }
}

export default DrawerContent;
