/**
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { Route, Switch } from 'react-router-native';
import StorybookUI from '../storybook';
import { Providers } from './Providers';
import Welcome from './components/Welcome';
import Bluetooth from './components/Bluetooth';
import Exposure from './components/Exposure';
import Scanning from './components/Scanning';

const App: React.FC = () => {
    return (
        <Providers>
            <StatusBar barStyle="dark-content" backgroundColor="white" animated={true} />
            {__DEV__ ? <Route path="/storybook" component={StorybookUI} /> : undefined}
            <Switch>
                <Route path="/bluetooth" component={Bluetooth} />
                <Route path="/exposure" component={Exposure} />
                <Route path="/scanning" component={Scanning} />
                <Route path="/" component={Welcome} />
            </Switch>
        </Providers>
    );
};

export default App;
