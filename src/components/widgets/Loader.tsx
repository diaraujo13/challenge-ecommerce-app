import React from 'react';
import { View } from 'native-base';
import { ActivityIndicator } from 'react-native';

const Loader = () => (
  <View
    style={{ flex: 1 }}
    backgroundColor="primary.500"
    justifyContent="center"
    alignItems="center"
  >
    <ActivityIndicator size="large" color="secondary.500" />
  </View>
);

export default Loader;
