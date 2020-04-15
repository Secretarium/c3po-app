import React, { useEffect, useState, useCallback } from 'react';
import C3POReactNativeBle from '@secretarium/react-native-ble';
import { NativeEventEmitter, NativeModules, Text, Button } from 'react-native';
const eventEmitter = new NativeEventEmitter(NativeModules.C3POReactNativeBle);

export const TestBeacon: React.FC = () => {

    const [successScan, setSuccessScan] = useState(false);
    const [successBroad, setSuccessBroad] = useState(false);
    const [devices, setDevices] = useState<{ [key: string]: any }>({});

    const onDeviceFound = useCallback((event: any): void => {
        setDevices({
            ...devices,
            [event.identifier]: event
        });
    }, [devices]);

    useEffect(() => {
        C3POReactNativeBle.setManufacturerId(0xFFFF);
        eventEmitter.addListener('onDeviceFound', onDeviceFound);
        return (): void => {
            eventEmitter.removeListener('onDeviceFound', onDeviceFound);
        };
    }, [onDeviceFound]);

    const startAction = (): void => {
        C3POReactNativeBle.broadcast('00420000-0000-0000-0000-000000000000', [12, 23, 56])
            .then((success) => {
                if (success instanceof Error) { return; }
                setSuccessBroad(success);
                console.log('iOS, Broadcasting...', success);
            })
            .catch((error: Error) => { return; });
        C3POReactNativeBle.scan()
            .then((success) => {
                setSuccessScan(success);
                console.log('iOS, Scaning...', success);
            })
            .catch((error: Error) => { return; });
    };

    const stopAction = (): void => {
        C3POReactNativeBle.stopScan()
            .then((success: boolean) => console.log('iOS, Stopped Scanning', success))
            .catch((error: Error) => console.log('iOS, Stopped Scanning', error));
        C3POReactNativeBle.stopBroadcast()
            .then((success: boolean) => console.log('iOS, Stopped Broadcast', success))
            .catch((error: Error) => console.log('iOS, Stopped Broadcast', error));

    };

    return (
        <>
            <Button title="Start" onPress={startAction}>Start</Button>
            <Button title="Stop" onPress={stopAction}>Stop</Button>
            <Text>Scanning {successScan}</Text>
            <Text>Broadcasting {successBroad}</Text>
            <Text>Devices ({Object.keys(devices).length}) {JSON.stringify(Object.values(devices).filter(device => device.services.length > 0).map(device => `${device.name ?? ''} > ${device.services?.[0] ?? ''}`), null, 2)}</Text>
        </>
    );
};
