import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableWithoutFeedback, Image,
} from 'react-native';
import StarRating from 'react-native-star-rating';

const CarItem = ({ onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={{ height: 300, backgroundColor: 'white', marginBottom: 10 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.2 }}>
            <View style={{ flexDirection: 'row', paddingVertical: 20, flex: 0.8 }}>
              <View style={{ marginHorizontal: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>BMW F80 M3</Text>
              </View>

              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 16, backgroundColor: '#d5e7e0', paddingHorizontal: 10 }}>Excellent Value</Text>
              </View>
            </View>
            <View style={{
              flex: 0.2, borderBottomWidth: 1, borderBottomColor: 'lightgray', marginHorizontal: 15,
            }}
            />
          </View>
          <View style={{ flex: 0.6, backgroundColor: 'white' }}>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <View style={{ flex: 0.8, flexDirection: 'row', marginHorizontal: 20 }}>
                <View style={{ flex: 0.5, backgroundColor: 'white' }}>
                  <Image
                    resizeMode="contain"
                    style={{ flex: 1, width: null, height: null }}
                    source={require('../../assets/car.png')}
                  />
                </View>
                <View style={{ flex: 0.5 }}>
                  <View style={{ flex: 1, marginHorizontal: 10 }}>
                    <View style={{ flex: 0.4, justifyContent: 'center' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Luxrucy car 4Seats 4 Door</Text>
                    </View>
                    <View style={{ flex: 0.6 }} />
                  </View>
                </View>
              </View>
              <View style={{ flex: 0.2, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                  <View style={{ flex: 0.8, justifyContent: 'center', marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 16, color: 'gray' }}>Free Cancellation</Text>
                  </View>
                  <View style={{
                    flex: 0.2, borderBottomWidth: 1, borderBottomColor: 'lightgray', marginHorizontal: 15,
                  }}
                  />
                </View>
              </View>

            </View>
          </View>
          <View style={{ flex: 0.2 }}>
            <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 20 }}>
              <View style={{ flex: 0.2 }}>
                <Image
                  resizeMode="contain"
                  style={{ flex: 1, width: null, height: null }}
                  source={require('../../assets/dollar.png')}
                />
              </View>
              <View style={{
                flex: 0.6, marginVertical: 7, flexDirection: 'column', justifyContent: 'center', marginLeft: 5,
              }}
              >
                <Text style={{ right: 4 }}> 8 / 10</Text>
                <View style={{ width: 100, top: 2 }}>
                  <StarRating
                    maxStars={5}
                    fullStarColor={'#008260'}
                    emptyStarColor={'#d5e7e1'}
                    starSize={17}
                    disabled
                    rating={2}
                    selectedStar={(rating) => rating}
                  />
                </View>
              </View>
              <View style={{ flex: 0.2, marginVertical: 7, justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}> AED 500</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

CarItem.propTypes = {
  onPress: PropTypes.func,
};
CarItem.defaultProps = {
  onPress: () => { },
};

export default CarItem;
