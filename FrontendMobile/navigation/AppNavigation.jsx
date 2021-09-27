import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen } from '../screen/LoginScreen';

export const AppNavigation = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerMode: 'screen'
            }}
        >
            <Stack.Screen
                name='login'
                options={{
                    headerShown: false
                }}
                component={LoginScreen}
            />
        </Stack.Navigator>
    )
}