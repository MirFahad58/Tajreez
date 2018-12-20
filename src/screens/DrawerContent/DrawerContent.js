/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  View, ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import { styles } from '../../constants';
import DrawerItem from '../../common/DrawerItem/DrawerItem';
import {
  FirstTextView, Div, SecondTextView, TextStyle, ListView, ButtonArea, ButtonViewLogin, ButtonTextAreaRegister, ButtonTextAreaLogin, ButtonViewRegister,
} from './style';

const { drawer } = styles;

class DrawerContent extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Div>
        <View style={{ flex: 0.3, backgroundColor: 'transparent' }}>
          <ImageBackground
            style={{
              flex: 1, flexDirection: 'column',
            }}
            blurRadius={4}
            source={require('../../assets/sidemenu.jpeg')}
          >
            <FirstTextView>
              <TextStyle>
                Which car do
              </TextStyle>
            </FirstTextView>
            <SecondTextView>
              <TextStyle>
                you want to drive today?
              </TextStyle>
            </SecondTextView>
          </ImageBackground>
        </View>
        <View style={{ flex: 0.7, backgroundColor: drawer.backgroundColor }}>
          <View style={{ flex: 1 }}>
            <ListView>
              <View style={{ flex: 0.1, marginTop: 20 }} />
              <DrawerItem itemName="My Booking" />
              <DrawerItem itemName="Payments" onPress={() => navigation.navigate('PaymentScreen')} />
              <DrawerItem itemName="About Us" onPress={() => navigation.navigate('AboutUsScreen')} />
              <DrawerItem itemName="Settings" />
              <DrawerItem itemName="Privacy Policy" onPress={() => navigation.navigate('PrivacyScreen')}/>
              <DrawerItem itemName="Help" />
              <DrawerItem itemName="Contact Us" />
            </ListView>
            <ButtonArea>
              <ButtonViewLogin>
                <ButtonTextAreaLogin>LOGIN</ButtonTextAreaLogin>
              </ButtonViewLogin>
              <ButtonViewRegister>
                <ButtonTextAreaRegister>REGISTER NOW</ButtonTextAreaRegister>
              </ButtonViewRegister>
            </ButtonArea>
          </View>

        </View>
      </Div>
    );
  }
}

DrawerContent.propTypes = {
  navigation: PropTypes.object,
};
DrawerContent.defaultProps = {
  navigation: {},
};

export default DrawerContent;
