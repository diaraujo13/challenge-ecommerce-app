import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Text, Box, FlatList, Heading } from 'native-base';

import Badge from '../widgets/Badge';
import RowContent from './RowContent';
import RowImage from './RowImage';

import { moneyFormat } from '~/common/utils';

const ProductRow = ({ title, price, image, onPress, ...item }) => (
  <TouchableOpacity {...{ onPress }}>
    <RowContent>
      <Box flex={1} flexDir="column">
        <Heading size="sm">{title}</Heading>
        <Text size="xs">{moneyFormat(price)}</Text>
      </Box>
      <Box>
        <RowImage source={{ uri: image }} />
      </Box>
    </RowContent>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  container: {},
});

// make this component available to the app
export default ProductRow;
