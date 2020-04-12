import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import BLEAdvertiser from 'react-native-ble-advertiser'

export const TestBeacon: React.FC = () => {

    const [success, setSuccess] = useState('unknown');

    useEffect(() => {
        BLEAdvertiser.setCompanyId(0xFFFF);
        BLEAdvertiser.broadcast('ba801029-6fe1-4c32-a35a-106b68851f75', [12, 23, 56]) // The UUID you would like to advertise and additional manufacturer data. 
            .then(success => {
                setSuccess(success);
                console.log('Broadcasting Sucessful', success);
            })
            .catch(error => console.log('Broadcasting Error', error));
    }, [])

    return (
        <Text>Coucou {success}</Text>
    )
}