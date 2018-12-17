import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';


const PaymentItem = ({ onPress, itemName }) => (
    <View style={{ height: 110, backgroundColor: 'white', marginBottom :10}}>
        <View style={{ flex: 1, backgroundColor: 'white', marginHorizontal: 20 }}>
            <View style={{ flex: 0.4, flexDirection: 'row', backgroundColor: 'white' }}>

                <View style={{ flex: 0.5, justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                        BMW F80 M3
        </Text>
                </View>

                <View style={{ flex: 0.2, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'grey' }}>
                        Verifying
        </Text>
                </View>

                <View style={{ flex: 0.3, flexDirection: 'row', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'green' }}>
                        AED 500
        </Text>
                </View>

            </View>
            <View style={{ flex: 0.1, borderTopColor: 'lightgrey', borderTopWidth: 1 }} />
            <View style={{ flex: 0.3 }}>
                <Text style={{ fontWeight: 'bold' }}>
                    Madina Mall - Dubai International City
        </Text>

            </View>

            <View style={{ flex: 0.1, justifyContent: 'flex-end', bottom: 5 }}>
                <Text style={{ color: 'grey' }}>
                    Tue Nov 13 10:00 AM - Fri Nov 20 10:00 AM
      </Text>

            </View>
        </View>
    </View>
);

PaymentItem.propTypes = {
    onPress: PropTypes.func,
    itemName: PropTypes.string,
};
PaymentItem.defaultProps = {
    onPress: () => { },
    itemName: '',
};

export default PaymentItem;
