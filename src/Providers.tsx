import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import { ActivityIndicator, View } from 'react-native';

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
                {children}
            </PersistGate>
        </Provider>
    );
}
