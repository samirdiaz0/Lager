import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screen/LoginScreen';
import { HomeScreen } from '../screen/HomeScreen';
import { Colors } from '../constants/Colors';

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Colors.primary,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    },
    headerTitleStyle: {
        fontFamily: 'montserrat-semi-bold',
        fontSize: 16
    },
    headerTintColor: 'white',
}

const Stack = createStackNavigator();

export const AppNavigation = () => {


    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerMode: 'screen',
                headerStyle: defaultNavOptions.headerStyle,
                headerTintColor: defaultNavOptions.headerTintColor,
                headerTitleStyle: defaultNavOptions.headerTitleStyle
            }}
        >
            <Stack.Screen
                name='Login'
                options={{
                    headerShown: false
                }}
                component={LoginScreen}
            />
            <Stack.Screen
                name='Home'
                options={{
                    headerShown: true
                }}
                component={HomeScreen}
            />
        </Stack.Navigator>
    )
}