import React from 'react';
import { Text } from 'react-native';
import styles from "./TestAnimation.less";

const TestAnimation = () => {
    return (
        <>
            <Text>Coucou</Text>
            <Text className={styles.blue}>Blue Text</Text>
        </>
    );
};

export default TestAnimation;
