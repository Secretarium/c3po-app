import React, { useRef, useEffect } from 'react';
import { Text, View } from 'react-native';
import layout from './Layout.less';
import { useHistory } from 'react-router-native';
import LottieView from 'lottie-react-native';
import HealthyIcon from '../assets/healthy.svg';
import RiskIcon from '../assets/risk.svg';

export const Exposure: React.FC = () => {

    const history = useHistory();
    const lottieRef = useRef<LottieView>();
    const risk = true;

    useEffect(() => {
        lottieRef.current?.play();
    });

    const handleConsent = (): void => {
        history.push('/');
    };

    if (risk) {
        return (
            <>
                <View className={layout.indicator}>
                    <LottieView resizeMode="cover" speed={0.4} source={require('../assets/radarRisk.json')} autoPlay />
                </View>
                <View className={layout.background}>
                    <View className={layout.padder}>
                        <RiskIcon className={layout.icon} />
                        <Text className={layout.title}>{'\n'}Risk of exposure</Text>
                    </View>
                    <View className={layout.padder}>
                        <Text className={layout.description}>
                            Our data shows that you may have been at risk of exposure on the
                            23rd of April 2020.
                            {'\n\n'}
                            Please carefully monitor if you develop a fever or cough,
                            shortness of breath or become unwell.
                            You can contact the NHS 111 service for more information.
                            {'\n\n'}
                            When going for a test, record your visit by click on the button below.
                        </Text>
                    </View>
                    <View className={layout.padder}>
                        <Text className={layout.testbullet}>
                            There is no COVID-19 tests in your record at the moment
                            {'\n'}
                        </Text>
                        <Text onPress={handleConsent} className={layout.button}>I am going for a test now</Text>
                    </View>
                </View>
            </>
        );
    } else {
        return (
            <>
                <View className={layout.indicator}>
                    <LottieView resizeMode="cover" speed={0.4} source={require('../assets/radarHealthy.json')} autoPlay />
                </View>
                <View className={layout.background}>
                    <View className={layout.padder}>
                        <HealthyIcon className={layout.icon} />
                        <Text className={layout.title}>{'\n'}No risk detected</Text>
                    </View>
                    <View className={layout.padder}>
                        <Text className={layout.description}>
                            Your phone is currently monitoring the surroundings and will keep you informed should you be at risk.
                            {'\n\n'}
                            If you develop a fever or cough,
                            shortness of breath or become unwell, please contact a healthcare professional through the NHS 111 service.
                            {'\n\n'}
                            When going for a test, record your visit by click on the button below.
                        </Text>
                    </View>
                    <View className={layout.padder}>
                        <Text className={layout.testbullet}>
                            There is no COVID-19 tests in your record at the moment
                            {'\n'}
                        </Text>
                        <Text onPress={handleConsent} className={layout.button}>I am going for a test now</Text>
                    </View>
                </View>
            </>
        );
    }
};

export default Exposure;
