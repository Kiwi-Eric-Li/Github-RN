import { registerRootComponent } from 'expo';

import App from './App';
// import App_1 from './App_1';
// import LoginPage from './page/LoginPage';
// import AppNavigators from './navigator/AppNavigators';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
