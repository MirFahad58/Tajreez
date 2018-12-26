import React, { Component } from 'react';
import { View, TextInput,Text, Switch } from 'react-native';
import { HeaderComponent } from '../../common/Header/Header';
import { styles } from '../../constants';
import Button from '../../common/Button/Button';
import { StackActions, NavigationActions } from 'react-navigation';


class DriverDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAgree: false
        }
      }
    onChangeAgreeToggle = (value) => {
        if (value) {
          this.setState({ isAgree: value });
        } else {
          this.setState({ isAgree: value });
        }
      }
  render() {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })]
      });
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <HeaderComponent showBackButton onPress={() => navigation.goBack()} headerText={'Driver Details'} />
        
        <View style={{flex:1,paddingHorizontal:20}}>
            <View style={{paddingVertical:15}}>
                <Text style={{color:'grey'}}>Please enter your details to book a car</Text>
            </View>
            <View style={{paddingBottom:10}}>
                <TextInput
                    placeholder="First name"
                    autoCorrect={false}
                    underlineColorAndroid={'white'}
                    placeholderTextColor="grey"
                    autoCapitalize="words"
                    style={{
                    height: 45,
                    backgroundColor: '#dbdbdb',
                    paddingLeft: 15,
                    fontSize: 16,
                    borderColor: 'green',
                    borderRadius: 5,
                    }}
                />
            </View>

            <View style={{paddingBottom:10}}>
                <TextInput
                    placeholder="Surname"
                    autoCorrect={false}
                    underlineColorAndroid={'white'}
                    placeholderTextColor="grey"
                    autoCapitalize="words"
                    style={{
                    height: 45,
                    backgroundColor: '#dbdbdb',
                    paddingLeft: 15,
                    fontSize: 16,
                    borderColor: 'green',
                    borderRadius: 5,
                    }}
                />
            </View>

            <View style={{paddingBottom:10}}>
                <TextInput
                    placeholder="Email Address"
                    autoCorrect={false}
                    underlineColorAndroid={'white'}
                    placeholderTextColor="grey"
                    autoCapitalize="words"
                    style={{
                    height: 45,
                    backgroundColor: '#dbdbdb',
                    paddingLeft: 15,
                    fontSize: 16,
                    borderColor: 'green',
                    borderRadius: 5,
                    }}
                />
            </View>

            <View style={{paddingBottom:10}}>
                <TextInput
                    placeholder="Phone number"
                    autoCorrect={false}
                    underlineColorAndroid={'white'}
                    placeholderTextColor="grey"
                    autoCapitalize="words"
                    style={{
                    height: 45,
                    fontSize: 16,
                    backgroundColor: '#dbdbdb',
                    paddingLeft: 15,
                    borderColor: 'green',
                    borderRadius: 5,
                    }}
                />
            </View>
            <View style={{
            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20,
          }}
          >
            <Text style={{ color: 'grey', fontSize: 14 }}>Agreed to our </Text>
            <Text style={{ color:'black',fontWeight:'bold'}}>terms and condtions?</Text>
            <Switch trackColor={styles.green} value={this.state.isAgree} onValueChange={this.onChangeAgreeToggle.bind(this)} />
          </View>
        </View>
        <View style={{  justifyContent: 'flex-end', marginHorizontal: 20, marginBottom:20 }}>
            <Button buttonText="CONTINUE" onPress={() => navigation.dispatch(resetAction)}/>
          </View>
      </View>
    );
  }
}

export default DriverDetails;