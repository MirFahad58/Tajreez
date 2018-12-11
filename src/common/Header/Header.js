import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, View, Image, TouchableOpacity,
} from 'react-native';
import {
  HeaderView,
  HeaderLeft,
  HeaderTitle,
  HeaderRight,
} from './style';


export const HeaderComponent = ({ headerText, onPress, showBackButton }) => (
  <HeaderView>
    <HeaderLeft theme={{ opacity: 1 }}>
      <TouchableOpacity onPress={onPress}>
        {
          showBackButton ?
            <Image
              resizeMode="contain"
              source={require('../../assets/back.png')}
              style={{ width: 20, height: 20, tintColor: '#60a08e' }}
            />
            :
            <Image
              resizeMode="contain"
              source={require('../../assets/menu.png')}
              style={{ width: 20, height: 20, tintColor: '#60a08e' }}
            />
        }
      </TouchableOpacity>
    </HeaderLeft>
    <HeaderTitle>
      <View>
        {
          headerText !== undefined
            ? <Text style={{ fontSize: 20, color: 'white', fontWeight: '500' }}>{headerText}</Text>
            : (
              <Image
                resizeMode="contain"
                source={require('../../assets/logo.png')}
                style={{ width: 70, height: 70, tintColor: '#60a08e' }}
              />
            )
        }
      </View>
    </HeaderTitle>
    <HeaderRight>
      <View style={{ flex: 1, flexDirection: 'row' }} />

    </HeaderRight>
  </HeaderView>
);


HeaderComponent.propTypes = {
  headerText: PropTypes.any,
  onPress: PropTypes.func,
  showBackButton: PropTypes.bool
};
HeaderComponent.defaultProps = {
  headerText: undefined,
  onPress: () => { },
  showBackButton: false
};
