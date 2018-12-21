/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Days from '../../../common/Days/Days';
import AboutItem from '../../../common/AboutItem/AboutItem';
import Button from '../../../common/Button/Button';
import StarRating from 'react-native-star-rating';


class AboutCompany extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={{flex:0.15,paddingHorizontal:20,paddingVertical:20,backgroundColor:'white'}}>
          
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>8</Text>
            <Text style={{fontSize:18,color:'grey'}}> out of 10</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:14,color:'grey'}}>Our customer rate this company as </Text>
            <Text style={{fontSize:18,fontWeight:'bold' , bottom:3}}>Excellent</Text>  
          </View>

          <View style={{width:'50%',paddingTop:20}}>
          <StarRating
              fullStarColor={'#008260'}
              emptyStarColor={'#d5e7e1'}
              starSize={25}
              disabled={true}
              maxStars={5}
              rating={3}
            />
          </View>
        </View>

        <View style={{flex:0.5, backgroundColor:'white',marginVertical:10}}>
          <View style={{paddingVertical:20}}>
          <Text style={{color:'#008260',fontWeight:'bold',paddingHorizontal:20,paddingBottom:10}}>Opening times</Text>
            <ScrollView>
            <Days showUnderLine={true} day={'Sunday'} time={'10:00-22:00'} />
            <Days showUnderLine={true} day={'Monday'} time={'10:00-22:00'} />
            <Days showUnderLine={true} day={'Tuesday'} time={'10:00-22:00'} />
            <Days showUnderLine={true} day={'Wednesday'} time={'10:00-22:00'} />
            <Days showUnderLine={true} day={'Thursday'} time={'10:00-22:00'} />
            <Days showUnderLine={true} day={'Friday'} time={'Official Holliday'} />
            <Days showUnderLine={false} day={'Saturday'} time={'Officail Holliday'} />
            </ScrollView>
          </View>
        </View>

        <View style={{flex:0.35, backgroundColor:'white'}}>
          <View style={{flex:1, paddingTop:10}}>
            <View style={{flex:0.66}}>
              <AboutItem showUnderLine={false} title={'Supplier location'} description={'Dubai Marina Mall, Lower Ground Floor, Dubai, U.A.E'} />
            </View>
            <View style={{ flex: 0.33,marginHorizontal: 15,paddingTop:20 }}>
              <Button buttonText="Book now" onPress={() => { }} />
            </View>
          </View>
        </View>  
      </View>
    );
  }
}

export default AboutCompany;
