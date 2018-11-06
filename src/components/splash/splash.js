import React, { Component } from 'react';
import { StyleSheet, Text, View , Platform} from 'react-native';


class Splash extends Component {
  constructor({ navigation }){
    super()
  }
  
  render() {
    return (
        <View style={styles.container}>
          <Text>Hello Splash</Text>
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
