/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  View, ImageBackground, Image, TextInput,
} from 'react-native';
import Button from '../../common/Button/Button';
import {
  TextView, LoginButton, RegisterButton, ContinueAsGuestArea, ContinueText, AccountText, NeedAnAccountArea,
} from './style';
import { StackActions, NavigationActions } from 'react-navigation';

class Signup extends Component {

  render() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })]
    });
    const { navigation } = this.props

    return (
      <ImageBackground
        style={{
          flex: 1, justifyContent: 'center', flexDirection: 'column', alignContent: 'center',
        }}
        source={require('../../assets/background.png')}
      >
        <View style={{ flex: 0.7 }}>
          <View style={{ flex: 1 }}>
            <Image
              resizeMode="contain"
              style={{ flex: 0.75, justifyContent: 'center', alignSelf: 'center' }}
              source={require('../../assets/logo.png')}
            />
            <TextView>
              <TextInput
                underlineColorAndroid={'white'}
                placeholder="Full Name"
                autoCorrect={false}
                placeholderTextColor="grey"
                autoCapitalize="words"
                style={{
                  height: 50,
                  backgroundColor: 'white',
                  paddingLeft: 15,
                  borderColor: 'green',
                  borderRadius: 3,
                }}
              />

            </TextView>
            <TextView>
              <TextInput
              underlineColorAndroid={'white'}
                placeholder="Email Address"
                autoCorrect={false}
                placeholderTextColor="grey"
                textContentType="username"
                autoCapitalize="none"
                style={{
                  height: 50,
                  backgroundColor: 'white',
                  paddingLeft: 15,
                  borderColor: 'green',
                  borderRadius: 3,
                }}
              />

            </TextView>
            <TextView>
              <TextInput
                placeholder="Password"
                underlineColorAndroid={'white'}
                textContentType="password"
                secureTextEntry
                placeholderTextColor="grey"
                autoCorrect={false}
                style={{
                  height: 50,
                  backgroundColor: 'white',
                  borderRadius: 3,
                  borderColor: 'green',
                  paddingLeft: 15,
                }}
              />

            </TextView>
            <TextView>
              <TextInput
                placeholder="Confirm Password"
                underlineColorAndroid={'white'}
                textContentType="password"
                secureTextEntry
                placeholderTextColor="grey"
                autoCorrect={false}
                style={{
                  height: 50,
                  backgroundColor: 'white',
                  borderRadius: 3,
                  borderColor: 'green',
                  paddingLeft: 15,
                }}
              />

            </TextView>
            <RegisterButton>
              <Button buttonText="REGISTER" />
            </RegisterButton>

          </View>

        </View>

        <View style={{ flex: 0.3 }}>
          <View style={{ flex: 1 }}>

            <NeedAnAccountArea>
              <AccountText>Already have an account?</AccountText>
            </NeedAnAccountArea>

            <LoginButton>
              <Button buttonText="LOGIN" onPress={() => navigation.dispatch(resetAction)} />
            </LoginButton>

            <ContinueAsGuestArea>
              <ContinueText>CONTINUE AS A GUEST</ContinueText>
            </ContinueAsGuestArea>
          </View>

        </View>
      </ImageBackground>

    );
  }
}

export default Signup;
