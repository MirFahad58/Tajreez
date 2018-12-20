/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { HeaderComponent } from '../../common/Header/Header';
import { styles } from '../../constants';



class Loading extends Component {

    componentDidMount = () => {
        const { navigation } = this.props;
        setTimeout(() => {
            navigation.navigate('CarListingScreen')
        } , 2000)
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <HeaderComponent showBackButton onPress={() => navigation.goBack()} headerText={'Marnina car'} />
                <View style={{ flex: 1 }}>
                    <View style={{ flex: .3, backgroundColor: 'white' }}>
                        <Image
                            resizeMode="contain"
                            style={{ flex: 0.75, justifyContent: 'center', alignSelf: 'center', tintColor: 'green' }}
                            source={require('../../assets/logo.png')}
                        />
                        <Text style={{ textAlign: 'center', fontSize: 18, color: 'black' }}>Searching for best companies for you</Text>
                    </View>
                    <View style={{ flex: .7 }}>
                        <View style={{ flex: 1 }}>
                            <Image
                                resizeMode="contain"
                                style={{ flex: .3 , alignSelf:'center' }}
                                source={require('../../assets/companies.png')}
                            />
                            <View style={{ flex: .3 }} />
                            <View style={{ flex: .4 }} />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Loading;
