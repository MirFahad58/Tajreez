/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  View, ImageBackground, Image, TextInput,
} from 'react-native';
import Button from '../../common/Button/Button';
import {
  TextView, LoginButton, RegisterButton, ContinueAsGuestArea, ContinueText, AccountText, NeedAnAccountArea, ForgetPasswordArea, ForgetPassword,
} from './style';


class Login extends Component {
  render() {
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
            <TextView>
              <TextInput
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
            <LoginButton>
              <Button buttonText="LOGIN" />
            </LoginButton>
          </View>

        </View>

        <View style={{ flex: 0.5 }}>
          <View style={{ flex: 1 }}>
            <ForgetPasswordArea>
              <ForgetPassword>
                Forgot your password?
              </ForgetPassword>
              <ForgetPassword>
                {' '}
                Click Here
              </ForgetPassword>
            </ForgetPasswordArea>

            <NeedAnAccountArea>
              <AccountText>Need an account?</AccountText>
            </NeedAnAccountArea>

            <RegisterButton>
              <Button buttonText="REGISTER" />
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

export default Login;
