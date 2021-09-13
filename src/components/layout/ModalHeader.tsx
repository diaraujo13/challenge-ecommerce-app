// import liraries
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';

import CloseButton from '../widgets/CloseButton';

const ModalHeader = ({ children, ...props }) => {
  return (
    <View py="5" px="5" flexDirection="row">
      <View style={{ flex: 1 }} alignItems="flex-start">
        <Text bold mb="10" fontSize="2xl">
          {children}
        </Text>
      </View>
      <View>
        <CloseButton />
      </View>
    </View>
  );
};

export default ModalHeader;
