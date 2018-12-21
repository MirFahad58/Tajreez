import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback } from 'react-native';


const Days = ({ day, time , showUnderLine }) => (
        <View>
            <View style={{paddingHorizontal: 20, paddingVertical: 7,flexDirection:'row' }}>
                <View style={{flex:0.4}}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{day}</Text>
                </View>
                <View style={{flex:0.5}}>
                    <Text style={{ fontSize: 14, color:'grey'}}>{time}</Text>
                </View>
            </View>
             {
            showUnderLine && <View style={{
                borderBottomWidth: 1, borderBottomColor: 'lightgrey',paddingTop:5, marginHorizontal: 15,
            }}
            />
            }
        </View>
);

Days.propTypes = {
    day: PropTypes.string,
    time: PropTypes.string,
    showUnderLine : PropTypes.bool
};
Days.defaultProps = {
    day: 'Sunday',
    description: '10:00-22:00',
    showUnderLine : true

};

export default Days;
