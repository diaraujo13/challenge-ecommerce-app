import { AntDesign } from '@expo/vector-icons';
import { Badge } from 'native-base';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';

import { getTotalItemsFromCart } from '~/redux/modules/cart/selectors';
import { RootState } from '~/redux/store';

const CartButtonWrapper = styled(TouchableOpacity)`
  padding-right: 20px;
  padding-left: 20px;
`;
const CartButton = ({ onPress, ...props }) => {
  const totalItemsFromCart = useSelector<RootState>(getTotalItemsFromCart);
  return (
    <CartButtonWrapper {...{ onPress }}>
      <AntDesign name="shoppingcart" size={24} />
      {totalItemsFromCart > 0 && (
        <Badge style={{ position: 'absolute', bottom: -2, right: 10 }}>
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
