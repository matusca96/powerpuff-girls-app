import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './routes';

export const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};
