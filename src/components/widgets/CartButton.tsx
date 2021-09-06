import { AntDesign } from '@expo/vector-icons';
import { Badge } from 'native-base';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';

import { getTotalItemsFromCart } from '~/redux/modules/cart/selectors';
import { RootState } from '~/redux/store';

const CartButtonWrapper = styled(TouchableOpacity)`
  margin-right: 20px;
`;
const CartButton = () => {
  const totalItemsFromCart = useSelector<RootState>(getTotalItemsFromCart);
  return (
    <CartButtonWrapper>
      <AntDesign name="shoppingcart" size={24} />
      {totalItemsFromCart > 0 && (
        <Badge style={{ position: 'absolute', top: -2, right: -10 }}>
          {String(totalItemsFromCart)}
        </Badge>
      )}
    </CartButtonWrapper>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CartButton;
