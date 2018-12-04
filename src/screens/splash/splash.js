import React, { Component } from 'react';
import { StyleSheet, Text, View , Platform} from 'react-native';


class Splash extends Component {
  constructor({ navigation }){
    super()
  }
  
  render() {
    return (
        <View style={{flex:1 , backgroundColor:'red' , flexDirection:'column'}}>
          <View style={{flex:.3, backgroundColor:'blue'}}>
            <View style={{flex: 1 , backgroundColor:'gray' , justifyContent:'center' , alignItems:'flex-end'}}>
              <Text>Hello</Text>
            </View>
          </View>
          <View style={{flex:.3 ,  backgroundColor:'yellow'}}>

          </View>
        </View>
    );
  }
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'yellow'
  }
})
