import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import KeepAwake from 'react-native-keep-awake';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NativeRouter } from 'react-router-native';

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
                <NativeRouter>
                    {__DEV__ ? <KeepAwake /> : undefined}
                    {children}
                </NativeRouter>
            </PersistGate>
        </Provider>
    );
};
