import React from 'react';
import PropTypes from 'prop-types';
import { View , Text, TouchableWithoutFeedback } from 'react-native'


const DrawerItem = ({ onPress, itemName }) => (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={{ flex: 0.1, marginTop: 12 }}>
        <Text style={{ fontSize: 17, fontWeight: '700', color: 'white' }}>{itemName}</Text>
    </View>
    </TouchableWithoutFeedback>
);

DrawerItem.propTypes = {
    onPress: PropTypes.func,
    itemName: PropTypes.string,
};
DrawerItem.defaultProps = {
    onPress: () => {console.log('clicked') },
    itemName: '',
};

export default DrawerItem;
