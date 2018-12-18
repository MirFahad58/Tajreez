import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback } from 'react-native';


const AboutItem = ({title , description}) => (
    <View>
        <View style={{ paddingHorizontal: 25, paddingVertical: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'green' }}>About the company</Text>
        </View>

        <View style={{ paddingHorizontal: 25, paddingVertical: 10 }}>
            <Text style={{ fontSize: 18, color: 'grey', fontWeight: '700' }}>
                asdadsasdsad
      </Text>
        </View>
        <View style={{
            borderBottomWidth: 2, borderBottomColor: 'lightgrey', paddingVertical: 10, marginHorizontal: 15,
        }}
        />
    </View>
);

AboutItem.propTypes = {
};
AboutItem.defaultProps = {
};

export default AboutItem;
