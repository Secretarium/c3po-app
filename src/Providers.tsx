import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import KeepAwake from 'react-native-keep-awake';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';

import { store, persistor } from './redux/store';

export const Providers: React.FC = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate
                loading={(
                    <View>
                        <ActivityIndicator />
                    </View>
                )}
                persistor={persistor}
            >
                <NavigationContainer>
                    {__DEV__ ? <KeepAwake /> : undefined}
                    {children}
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
};
