/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native-animatable';
import StarRating from 'react-native-star-rating';

class Home2 extends Component {

    constructor(props) {
        super()
        this.state = {
            starCount: 2
        }
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ height: 300, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 0.2 }}>
                            <View style={{ flexDirection: 'row', paddingVertical: 20, flex: .8 }}>
                                <View style={{ marginHorizontal: 20 }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>BMW F80 M3</Text>
                                </View>

                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 16, backgroundColor: '#d5e7e0', paddingHorizontal: 10 }}>Excellent Value</Text>
                                </View>
                            </View>
                            <View style={{ flex: .2, borderBottomWidth: 1, borderBottomColor: 'lightgray', marginHorizontal: 15 }}></View>
                        </View>
                        <View style={{ flex: 0.6, backgroundColor: 'white' }}>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <View style={{ flex: .8, flexDirection: 'row', marginHorizontal: 20 }}>
                                    <View style={{ flex: 0.5, backgroundColor: 'white' }}>
                                        <Image
                                            // resizeMode="contain"
                                            style={{ flex: 1, width: null, height: null }}
                                            source={require('../../assets/car.png')}
                                        />
                                    </View>
                                    <View style={{ flex: 0.5, backgroundColor: 'white' }}>

                                    </View>
                                </View>
                                <View style={{ flex: .2, backgroundColor: 'white' }}>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flex: .8, justifyContent: 'center', marginHorizontal: 20 }}>
                                            <Text style={{ fontSize: 16, color: 'gray' }}>Free Cancellation</Text>
                                        </View>
                                        <View style={{ flex: .2, borderBottomWidth: 1, borderBottomColor: 'lightgray', marginHorizontal: 15 }}></View>
                                    </View>
                                </View>

                            </View>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 20 }}>
                                <View style={{ flex: .2, backgroundColor: 'red' }}>
                                    <Image
                                        resizeMode="contain"
                                        style={{ flex: 1, width: null, height: null }}
                                        source={require('../../assets/logo.png')}
                                    />
                                </View>
                                <View style={{ flex: .6, marginVertical: 7, flexDirection: 'column', justifyContent: 'center' }}>
                                    <Text> 8 / 10</Text>
                                    <StarRating
                                        disabled={false}
                                        maxStars={5}
                                        rating={this.state.starCount}
                                        selectedStar={(rating) => { }}
                                    />
                                </View>
                                <View style={{ flex: .2, backgroundColor: 'pink', marginVertical: 7 }}>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Home2;
