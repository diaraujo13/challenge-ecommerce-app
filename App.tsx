import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider as ThemeProvider } from 'native-base';
import { theme } from 'common';
import { useCachedResources } from 'hooks';
import Navigation from './src/routes';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      <Navigation />
    </ThemeProvider>
  );
}
