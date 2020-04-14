import React from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './TestAnimation.less';

const TestAnimation: React.FC = () => {
    const route = useRoute();
    return (
        <>
            <Text className={styles.blue}>Welcome to C3PO</Text>
            <Text>You are in {route?.name}</Text>
        </>
    );
};

export default TestAnimation;
