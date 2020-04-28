import React from 'react';
import { Text, View } from 'react-native';
import layout from './Layout.less';
import { useHistory } from 'react-router-native';
import SparklesIcon from '../assets/sparkle.svg';

export const Welcome: React.FC = () => {

    const history = useHistory();

    const handleConsent = (): void => {
        history.push('/bluetooth');
    };

    return (
        <View className={layout.background}>
            <View className={layout.padder}>
                <SparklesIcon className={layout.icon} />
                <Text className={layout.title}>{'\n'}Welcome</Text>
            </View>
            <View className={layout.padder}>
                <Text className={layout.description}>
                    C3PO stands for COVID-19 Privacy Preserving Protection of Others.
                    {'\n'}
                    This app can help you stay safe and help you help others.
                    {'\n\n'}
                    You are just a few steps away from being able to use this app. We simply need you to consent for Contact Tracing data to be collected and ask your permission to use your phone’s Bluetooth service to do so.
                    {'\n\n'}
                    Should you wish to stop Contact Tracing and withdraw consent, simply uninstall this application.
                </Text>
            </View>
            <View className={layout.padder}>
                <Text className={layout.testbullet}>
                    {'\n'}
                    {'\n'}
                </Text>
                <Text onPress={handleConsent} className={layout.button}>I consent</Text>
            </View>
        </View>
    );
};

export default Welcome;
