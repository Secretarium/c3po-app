import React from 'react';
import { Text, View } from 'react-native';
import layout from './Layout.less';
import { useHistory } from 'react-router-native';
import BluetoothIcon from '../assets/bluetooth.svg';

export const Bluetooth: React.FC = () => {

    const history = useHistory();

    const handleConsent = (): void => {
        history.push('/exposure');
    };

    return (
        <View className={layout.background}>
            <View className={layout.padder}>
                <BluetoothIcon className={layout.icon} />
                <Text className={layout.title}>{'\n'}Activate Bluetooth</Text>
            </View>
            <View className={layout.padder}>
                <Text className={layout.description}>
                    Wonderful! Almost there.
                    {'\n\n'}
                    Contact Tracing works by letting your phone monitor and catalogue other Contact Tracing enabled devices around you.
                    {'\n\n'}
                    The information collected never leaves your phone unless you have been confirmed, diagnosed by a healthcare professional.
                    In this case, only   anonymised encrypted data will be securely uploaded to the cloud.
                    At no time will you have access to the data collected.
                </Text>
            </View>
            <View className={layout.padder}>
                <Text className={layout.testbullet}>
                    {'\n'}
                    {'\n'}
                </Text>
                <Text onPress={handleConsent} className={layout.button}>Activate my Bluetooth</Text>
            </View>
        </View>
    );
};

export default Bluetooth;
