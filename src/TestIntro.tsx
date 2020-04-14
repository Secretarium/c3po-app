import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
        key: 1,
        title: 'Title 1',
        text: 'Description.\nSay something cool',
        // image: require('./assets/1.jpg'),
        backgroundColor: '#59b2ab'
    },
    {
        key: 2,
        title: 'Title 2',
        text: 'Other cool stuff',
        // image: require('./assets/2.jpg'),
        backgroundColor: '#febe29'
    },
    {
        key: 3,
        title: 'Rocket guy',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        // image: require('./assets/3.jpg'),
        backgroundColor: '#22bcb5'
    }
];

const styles = StyleSheet.create({
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'black'
    },
    slide: {
        color: 'white'
    },
    text: {
        color: 'blue'
    }
});

export const TestIntro: React.FC = () => {

    const [showRealApp, setShowRealApp] = useState(false);

    const _renderItem = ({ item }: { item: { [key: string]: string } }): React.ReactNode => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{item.title}</Text>
                {/* <Image source={item.image} /> */}
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    };
    const _onDone = (): void => {
        setShowRealApp(true);
    };

    if (showRealApp) { return <Text>All done !</Text>; }
    return <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} showNextButton />;
};
