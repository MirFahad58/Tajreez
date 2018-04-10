import React, { Component } from 'react';
import { StyleSheet, Text, View , Platform} from 'react-native';
import { NavigationActions } from 'react-navigation'


class Splash extends Component {
  constructor({ navigation }){
    super()
  }
  
  componentDidMount() {
    // const resetAction = NavigationActions.reset({
    //         index: 0,
    //         actions: [
    //             NavigationActions.navigate({ routeName: 'Tab' })
    //         ]
    //     })
    //     this.props.navigation.dispatch(resetAction)
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
