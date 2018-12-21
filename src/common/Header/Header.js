import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, View, Image, TouchableOpacity, TouchableWithoutFeedback
} from 'react-native';
import {
  HeaderView,
  HeaderLeft,
  HeaderTitle,
  HeaderRight,
} from './style';


export const HeaderComponent = ({ headerText, onPress, showBackButton, headerBackgroundColor, showMenuButton, headerRightText, onPressHeaderRight }) => (
  <HeaderView backgroundColor={headerBackgroundColor}>
    <HeaderLeft theme={{ opacity: 1 }}>
      <TouchableOpacity onPress={onPress}>
        {
          showBackButton ?
            <Image
              resizeMode="contain"
              source={require('../../assets/back.png')}
              style={{ width: 20, height: 20, tintColor: '#60a08e' }}
            />
            : showMenuButton ? 
            <Image
              resizeMode="contain"
              source={require('../../assets/menu.png')}
              style={{ width: 20, height: 20, tintColor: '#60a08e' }}
            />
             : null
        }
      </TouchableOpacity>
    </HeaderLeft>
    <HeaderTitle>
      <View>
        {
          headerText !== undefined
            ? <Text style={{ fontSize: 20, color: 'green', fontWeight: '500' }}>{headerText}</Text>
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
      <View style={{ flex: 1, flexDirection: 'row' , justifyContent:'center' , alignItems:'center' }}>
      <Text onPress={onPressHeaderRight} style={{ fontSize: 20, color: 'green', fontWeight: '500' }}>{headerRightText}</Text>
      </View>
    </HeaderRight>
  </HeaderView>
);


HeaderComponent.propTypes = {
  headerText: PropTypes.any,
  onPress: PropTypes.func,
  onPressHeaderRight: PropTypes.func,
  showBackButton: PropTypes.bool,
  headerBackgroundColor : PropTypes.string,
  showMenuButton : PropTypes.bool,
  headerRightText : PropTypes.string
};
HeaderComponent.defaultProps = {
  headerText: undefined,
  onPress: () => { },
  onPressHeaderRight: () => { },
  showBackButton: false,
  headerBackgroundColor : 'white',
  showMenuButton : false,
  headerRightText : ''
};
