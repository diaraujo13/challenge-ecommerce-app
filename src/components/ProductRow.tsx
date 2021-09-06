import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Text, Box, FlatList, Heading } from 'native-base';

import { moneyFormat } from '~/common/utils';

export const RowContent = styled.View`
  flex-direction: row;
  width: 100%;
  height: 130px;
  padding: 15px 10px;
  margin: 5px 0px;
  background: #eaeaea;
  border-radius: 10px;
  box-shadow: 0.4px 0.5px 0.2px #ddd;
`;

export const RowImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  resize-mode: cover;
`;

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
  container: {},
});

// make this component available to the app
export default ProductRow;
