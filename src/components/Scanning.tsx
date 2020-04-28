import React from 'react';
import { Text, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import layout from './Layout.less';
import BarcodeIcon from '../assets/barcode.svg';

export const Scanning: React.FC = () => {

    return (
        <View className={layout.background}>
            <View className={layout.padder}>
                <BarcodeIcon className={layout.icon} />
            </View>
            <View className={layout.padder}>
                <Text className={layout.description}>
                    Welcome to your healthcare centre.
                    {'\n'}
                    Please follow the instructions given by your healthcare professional.
                    {'\n\n'}
                    Once you’re ready, please scan the barcode on the sample collection tube.
                    {'\n\n'}
                    We will use this information to inform you of the result.
                </Text>
            </View>
            <View className={layout.padder}>
                <RNCamera
                    className={layout.camera}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    captureAudio={false}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel'
                    }}
                    onBarCodeRead={({ data }): void => {
                        console.log(data);
                    }}
                />
            </View>
        </View>
    );
};

export default Scanning;
