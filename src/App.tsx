import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { Host } from 'react-native-portalize';

import { ShowProvider } from './contexts/ShowContext';
import { Routes } from './routes';

export const App = (): JSX.Element => {
  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ShowProvider>
      <Host>
        <NavigationContainer>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />
          <Routes />
        </NavigationContainer>
      </Host>
    </ShowProvider>
  );
};
