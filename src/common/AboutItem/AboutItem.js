import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { styles } from '../../constants';


const AboutItem = ({ title, description , showUnderLine }) => (
    <View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: styles.green }}>{title}</Text>
        </View>

        <View style={{ paddingHorizontal: 20, paddingVertical: 5  }}>
            <Text style={{ fontSize: 15, color: 'grey', fontWeight: '700' }}>
                {description}
      </Text>
        </View>
        {
            showUnderLine && <View style={{
                borderBottomWidth: 2, borderBottomColor: 'lightgrey', paddingVertical: 10, marginHorizontal: 15,
            }}
            />
        }
    </View>
);

AboutItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    showUnderLine : PropTypes.bool
};
AboutItem.defaultProps = {
    title: 'here is title',
    description: 'This is description',
    showUnderLine : true

};

export default AboutItem;
