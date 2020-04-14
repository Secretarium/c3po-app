import React, { useEffect, useState } from 'react';
import C3POBLE from '@secretarium/react-native-ble';
import { NativeEventEmitter, NativeModules, Text } from 'react-native';
const eventEmitter = new NativeEventEmitter(NativeModules.C3POBLE);

export const TestBeacon: React.FC = () => {

    const [successScan, setSuccessScan] = useState('unknown');
    const [successBroad, setSuccessBroad] = useState('unknown');
    const [devices, setDevices] = useState<unknown[]>([]);

    useEffect(() => {
        eventEmitter.addListener('onBTStatusChange', (enabled: true) => {
            console.log('Android, Bluetooth status: ', enabled);
        });

        C3POBLE.setCompanyId(0xFFFF);
        C3POBLE.broadcast('13370000-0000-0000-0000-000000000000', [12, 23, 56]) // The UUID you would like to advertise and additional manufacturer data.
            .then((success: React.SetStateAction<string>) => {
                setSuccessBroad(success);
                console.log('Android, Broadcasting Sucessful', success);
            })
            .catch((error: Error) => console.log('Android, Broadcasting Error', error));
        C3POBLE.scan([12, 23, 56], {})
            .then((success: React.SetStateAction<string>) => {
                setSuccessScan(success);
                eventEmitter.addListener('onDeviceFound', (event) => {
                    console.log(event); // "device data"
                    setDevices([...devices, event]);
                });
                console.log('Android, Scan Sucessful', success);
            })
            .catch((error: Error) => console.log('Android, Scan Error', error));

        return (): void => {
            eventEmitter.removeAllListeners('onDeviceFound');
            C3POBLE.stopScan()
                .then((success: string) => console.log('Android, Stop Scan Successful', success))
                .catch((error: Error) => console.log('Android, Stop Scan Error', error));
            C3POBLE.stopBroadcast()
                .then((success: string) => console.log('Android, Stop Broadcast Successful', success))
                .catch((error: Error) => console.log('Android, Stop Broadcast Error', error));
        };
    }, [devices]);

    return (
        <>
            <Text>Scanning {successScan}</Text>
            <Text>Broadcasting {successBroad}</Text>
            <Text>Devices ({devices.length}) {devices}</Text>
        </>
    );
};
