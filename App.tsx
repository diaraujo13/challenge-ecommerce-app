import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider as ThemeProvider } from 'native-base';
import { Provider as ReduxProvider } from 'react-redux';

import { theme } from '~/common';
import { useCachedResources } from '~/hooks';
import { store } from '~/redux';
import Navigation from '~/routes';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar />
        <Navigation />
      </ThemeProvider>
    </ReduxProvider>
  );
}
