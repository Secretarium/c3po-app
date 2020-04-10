/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import StorybookUI from '../storybook';
import App from './src/App';
import { name as appName } from './app.json';

// if (__DEV__)
//     AppRegistry.registerComponent(appName, () => StorybookUI);
// else
AppRegistry.registerComponent(appName, () => App);
