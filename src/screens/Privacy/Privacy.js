import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { HeaderComponent } from '../../common/Header/Header';


class Privacy extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <HeaderComponent showBackButton onPress={() => navigation.goBack()} headerText={'Privacy Policy'} />
        <View style={{ paddingVertical: 20, paddingHorizontal: 25, backgroundColor: 'white' }}>
          <Text style={{ fontSize: 18, color: '#2d8a6d', fontWeight: 'bold' }}>
            Terms and conditions
            </Text>

          <Text style={{
            fontSize: 16, fontWeight: '700', color: 'grey', paddingTop: 20,
          }}
          >
            asdasd
            
            </Text>
        </View>

        </View>
    );
  }
}

export default Privacy;
