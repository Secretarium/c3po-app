/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, } from 'react-native';
import { Providers } from './Providers';
import { Colors, } from 'react-native/Libraries/NewAppScreen';
import KeepAwake from 'react-native-keep-awake';
import TestAnimation from './TestAnimation';

const App = () => {
    return (
        <Providers>
            <StatusBar barStyle="dark-content" animated={true} networkActivityIndicatorVisible={false} />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.body}>
                        <KeepAwake />
                        <View style={styles.sectionContainer}>
                            <TestAnimation />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Providers>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default App;
