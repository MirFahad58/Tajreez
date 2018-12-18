import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { HeaderComponent } from '../../common/Header/Header';


class Privacy extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <HeaderComponent showBackButton onPress={() => navigation.goBack()} />
        <ScrollView>
          <View style={{ paddingVertical: 20, paddingHorizontal: 25, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 18, color: '#2d8a6d', fontWeight: 'bold' }}>
                        Terms and conditions
            </Text>

            <Text style={{
              fontSize: 16, fontWeight: '700', color: 'grey', paddingTop: 20,
            }}
            >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate. Lacus viverra vitae congue eu consequat ac felis donec.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate. Lacus viverra vitae congue eu consequat ac felis donec.
            </Text>
          </View>

          <View style={{ height: 13, backgroundColor: 'transparent' }} />

          <View style={{ paddingVertical: 20, paddingHorizontal: 25, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 18, color: '#2d8a6d', fontWeight: 'bold' }}>
                        Policy about offers
            </Text>

            <Text style={{
              fontSize: 16, fontWeight: '700', color: 'grey', paddingTop: 20,
            }}
            >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate. Lacus viverra vitae congue eu consequat ac felis donec.
            </Text>
          </View>

          <View style={{ height: 13, backgroundColor: 'transparent' }} />

          <View style={{ paddingVertical: 20, paddingHorizontal: 25, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 18, color: '#2d8a6d', fontWeight: 'bold' }}>
                        Insurance policy
            </Text>

            <Text style={{
              fontSize: 16, fontWeight: '700', color: 'grey', paddingTop: 20,
            }}
            >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate. Lacus viverra vitae congue eu consequat ac felis donec.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate. Lacus viverra vitae congue eu consequat ac felis donec.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Privacy;
