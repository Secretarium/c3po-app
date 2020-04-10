/**
 * @format
 */

import React from 'react';
import { StatusBar, } from 'react-native';
import StorybookUI from '../storybook';
import { Providers } from './Providers';
import TestAnimation from './TestAnimation';
import TestBeacon from './components/TestBeacon';
import { Navigator, Screen } from './modules/navigation/Navigator';

const App = () => {
    return (
        <Providers>
            <StatusBar barStyle="dark-content" animated={true} />
            <Navigator initialRouteName="Home">
                <Screen name="Home" options={{
                    title: 'Beta software'
                }} component={TestBeacon} />
                {__DEV__ ? <Screen name="Storybook" component={StorybookUI} /> : undefined}
            </Navigator>
        </Providers>
    );
};

export default App;
