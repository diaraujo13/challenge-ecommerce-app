import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Badge as NBadge, Text } from 'native-base';

const Badge = ({ children, ...props }) => {
  return (
    <NBadge colorScheme="secondary" padding={1} {...props}>
      <Text bold textAlign="center" color="white">
        {children}
      </Text>
    </NBadge>
  );
};

export default Badge;
