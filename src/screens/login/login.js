import React, { Component } from 'react';
import {
  Text, View, ImageBackground, Image, TextInput,
} from 'react-native';
import Button from '../../common/Button/Button';


class Login extends Component {
  constructor({ }) {
    super();
  }

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
              style={{ flex: 0.5, justifyContent: 'center', alignSelf: 'center' }}
              source={require('../../assets/logo.png')}
              resizeMode="contain"
            />
            <View style={{ flex: 0.2, paddingHorizontal: 25, paddingVertical: 10 }}>
              <TextInput
                placeholder="Email Address"
                autoCorrect="false"
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

            </View>
            <View style={{ flex: 0.2, paddingHorizontal: 25, paddingVertical: 10 }}>
              <TextInput
                placeholder="Password"
                textContentType="password"
                secureTextEntry="true"
                placeholderTextColor="grey"
                autoCorrect="false"
                style={{
                  height: 50,
                  backgroundColor: 'white',
                  borderRadius: 3,
                  borderColor: 'green',
                  paddingLeft: 15,
                }}
              />

            </View>
            <View style={{ flex: 0.1, paddingHorizontal: 25, paddingVertical: 10 }}>
              <Button buttonText="LOGIN" />
            </View>
          </View>

        </View>

        <View style={{ flex: 0.5 }}>
          <View style={{ flex: 1 }}>
            <View style={{
              flex: 0.2, flexDirection: 'row', justifyContent: 'flex-start', alignSelf: 'center', marginTop: 20, backgroundColor: 'transparent',
            }}
            >
              <Text style={{
                fontSize: 16, fontWeight: '600', color: 'white', marginTop: 20,
              }}
              >
                Forgot your password?
              </Text>
              <Text style={{
                fontSize: 16, fontWeight: '900', color: 'white', marginTop: 20,
              }}
              >
                {' '}
                Click Here
              </Text>
            </View>

            <View style={{
              flex: 0.5, justifyContent: 'flex-end', alignSelf: 'center', backgroundColor: 'transparent', marginBottom: 20,
            }}
            >
              <Text style={{ fontSize: 15, fontWeight: '700', color: 'white' }}>Need an account?</Text>
            </View>

            <View style={{ flex: 0.2, justifyContent: 'flex-end', paddingHorizontal: 25 }}>
              <Button buttonText="REGISTER" />
            </View>

            <View style={{
              flex: 0.1, justifyContent: 'flex-end', alignSelf: 'center', paddingVertical: 22, backgroundColor: 'transparent',
            }}
            >
              <Text style={{ fontSize: 16, fontWeight: '900', color: 'white' }}>CONTINUE AS A GUEST</Text>
            </View>
          </View>

        </View>
      </ImageBackground>

    );
  }
}

export default Login;
