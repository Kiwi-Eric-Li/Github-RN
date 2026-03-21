import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginPage from '../page/LoginPage';
import RegisterPage from '../page/RegisterPage';

const Stack = createNativeStackNavigator();

export default function AppNavigators(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="LoginPage"
                    component={LoginPage} 
                    options={{ headerShown: false }}
                />
                {/* <Stack.Screen 
                    name="RegisterPage"
                    component={RegisterPage}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}


