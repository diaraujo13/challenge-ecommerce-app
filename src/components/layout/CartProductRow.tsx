import React, { Component, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {
  Text,
  View,
  Box,
  FlatList,
  Heading,
  VStack,
  useTheme,
} from 'native-base';
import styled from 'styled-components/native';
import { useDispatch } from 'react-redux';

import Badge from '../widgets/Badge';
import RowContent from './RowContent';
import RowImage from './RowImage';

import { moneyFormat } from '~/common/utils';
import { cartActions, productActions } from '~/redux/actions';

const ButtonGroup = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const CartProductRow = ({ id, title, qty, price, image, onPress, ...item }) => {
  const {
    colors: { primary, secondary, gray },
  } = useTheme();

  const dispatch = useDispatch();

  return (
    <RowContent>
      <View flex={1}>
        <Box flex={1} flexDir="column">
          <Heading size="sm">{title}</Heading>
          <Text size="xs">{moneyFormat(price)}</Text>
        </Box>
        <ButtonGroup>
          <TouchableOpacity
            onPress={() => {
              dispatch(cartActions.changeQuantity({ id, newQty: -1 }));
            }}
          >
            <View
              width="30px"
              height="30px"
              bg={gray['300']}
              alignItems="center"
              borderRadius="7"
              justifyContent="center"
            >
              <Text bold>-</Text>
            </View>
          </TouchableOpacity>
          <Text bold width="30px" textAlign="center">
            {qty}
          </Text>
          <TouchableOpacity
            onPress={() => {
              dispatch(cartActions.changeQuantity({ id, newQty: 1 }));
            }}
          >
            <View
              width="30px"
              height="30px"
              bg={secondary['400']}
              alignItems="center"
              borderRadius="7"
              justifyContent="center"
            >
              <Text color="secondary">+</Text>
            </View>
          </TouchableOpacity>
        </ButtonGroup>
      </View>
      <Box>
        <RowImage source={{ uri: image }} />
      </Box>
    </RowContent>
  );
};

export default CartProductRow;
