import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Container } from '~/components';

const OrderList = () => {
  return (
    <Container>
      <Text>OrderList</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default OrderList;
