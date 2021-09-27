import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigation } from './navigation/AppNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AppNavigation/>
    </NavigationContainer>
  );
}
export default App;