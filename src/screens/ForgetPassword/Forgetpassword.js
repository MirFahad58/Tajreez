/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  View, ImageBackground, Image, TextInput,
} from 'react-native';
import Button from '../../common/Button/Button';
import {
  TextView, LoginButton, RegisterButton, ContinueAsGuestArea, ContinueText, AccountText, NeedAnAccountArea, MessageView, MessageText,
} from './style';


class ForgetPassword extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground
        style={{
          flex: 1, justifyContent: 'center', flexDirection: 'column', alignContent: 'center',
        }}
        source={require('../../assets/background.png')}
      >
        <View style={{ flex: 0.5 }}>
          <View style={{ flex: 1 }}>
            <Image
              resizeMode="contain"
              style={{ flex: 0.5, justifyContent: 'center', alignSelf: 'center' }}
              source={require('../../assets/logo.png')}
            />
            <MessageView>
              <MessageText>
              Please enter your email address to receive a reset password.
              </MessageText>
            </MessageView>
            <TextView>
              <TextInput
                placeholder="Email Address"
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
            <LoginButton>
              <Button buttonText="SUBMIT" />
            </LoginButton>
          </View>

        </View>

        <View style={{ flex: 0.5 }}>
          <View style={{ flex: 1 }}>
            <NeedAnAccountArea />
            <NeedAnAccountArea>
              <AccountText>Already have an account?</AccountText>
            </NeedAnAccountArea>

            <RegisterButton>
              <Button buttonText="LOGIN" onPress={() => navigation.navigate('LoginScreen')} />
            </RegisterButton>

            <ContinueAsGuestArea>
              <ContinueText>CONTINUE AS A GUEST</ContinueText>
            </ContinueAsGuestArea>
          </View>

        </View>
      </ImageBackground>

    );
  }
}

export default ForgetPassword;
