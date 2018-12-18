import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import PropTypes from 'prop-types';


const ModalView = (props) => (
    <View>
    <Modal {...props}>
      <View style={{ flex: 1 , backgroundColor:'white' }}>
        {props.children}
      </View>
    </Modal>
  </View>
  
  );
  
  ModalView.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
  };
  ModalView.defaultProps = {
    onPress: () => {},
    buttonText: '',
  };
  
  export default ModalView;