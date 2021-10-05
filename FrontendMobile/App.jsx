import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigation } from './navigation/AppNavigation';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
    'montserrat-extra-light': require('./assets/fonts/Montserrat-ExtraLight.ttf'),
    'montserrat-light': require('./assets/fonts/Montserrat-Light.ttf'),
    'montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
    'montserrat-medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'montserrat-semi-bold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'montserrat-extra-bold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
    'montserrat-black': require('./assets/fonts/Montserrat-Black.ttf'),
  });
};

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontsLoaded(true)}
      onError={console.warn}
    />
  }

  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <AppNavigation />
    </NavigationContainer>
  );
}
export default App;