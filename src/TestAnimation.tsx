import React from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from "./TestAnimation.less";

const TestAnimation = () => {
    const route = useRoute();
    return (
        <>
            <Text className={styles.blue}>Welcome to Secret Coco</Text>
            <Text>You are in {route?.name}</Text>
        </>
    );
};

export default TestAnimation;
