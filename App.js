import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      animation : "fadeIn",
      image : require('./src/assets/logo2.png'),
      iterationCount : 1,
      image1Loaded : 0,
      image2Loaded : 0,
      image1FullyLoaded : 0
    }
  }
  onImageAnimatedCompleted = () => {
    this.state.image1Loaded == 2 ? this.setState({image1FullyLoaded : 1 , iterationCount : 1 ,animation : "zoomIn" , image : require('./src/assets/logo.png') }) : null
    this.state.image1Loaded == 1 ? this.setState({animation :'bounceOut', iterationCount : 1 , image1Loaded : 2}) : console.log('in else?')
    this.state.image1Loaded == 0 ? this.setState({animation:"pulse" , iterationCount : 1 , image1Loaded : 1}) : null
  }
  onSecondImageAnimatedCompleted = () => {
    console.log('in second completed')
    this.setState({
      iterationCount : "infinite",
      animation : 'pulse'
    })
  }
  renderAnimatedView = () => {
    if(this.state.image1FullyLoaded == 0){
     return (
        <Animatable.View 
          animation={this.state.animation} 
          easing="ease-in"
          iterationCount={this.state.iterationCount}
          onAnimationEnd={this.onImageAnimatedCompleted.bind(this)}
          >
          <Image
            source={this.state.image}
            style={{width:250,height:250}}
            resizeMode="contain"
          />
        </Animatable.View>
     )
    }
    return (
      <Animatable.View 
          animation={this.state.animation} 
          easing="ease-in"
          iterationCount={this.state.iterationCount}
          onAnimationEnd={this.onSecondImageAnimatedCompleted.bind(this)}
          >
          <Image
            source={this.state.image}
            style={{width:250,height:250}}
            resizeMode="contain"
          />
        </Animatable.View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        {/*<Animatable.Text animation="slideInDown" iterationCount={5} direction="alternate">Up and down you go</Animatable.Text>*/}
        {this.renderAnimatedView()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
