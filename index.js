import { registerRootComponent } from 'expo';

import App from './App';
import App_1 from './App_1';
import LoginPage from './page/LoginPage';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(LoginPage);
