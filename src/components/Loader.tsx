import React from 'react';
import { Text, View } from 'react-native';
import layout from './Layout.less';
import { useHistory } from 'react-router-native';
import SparklesIcon from '../assets/sparkle.svg';

export const Loader: React.FC = () => {

    const history = useHistory();

    const handleConsent = (): void => {
        history.push('/bluetooth');
    };

    return (
        <View className={layout.background}>
            <View className={layout.padder}>
                <SparklesIcon className={layout.icon} />
                <Text className={layout.title}>{'\n'}...</Text>
            </View>
            <View className={layout.padder}>
                <Text className={layout.description}>
                    Getting Ready...
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

export default Loader;
