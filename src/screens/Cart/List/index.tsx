import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, FlatList, Text, View } from 'native-base';
import { useSelector } from 'react-redux';

import { CartDetailsSection, CartDetailsSectionRow } from '../styles';

import { CloseButton, Container, ModalHeader, ProductRow } from '~/components';
import {
  getCartItems,
  getTotalItemsFromCart,
  getTotalAmountFromCart,
} from '~/redux/selectors';
import { moneyFormat } from '~/common/utils';

const CartList = () => {
  const items = useSelector(getCartItems);
  const totalItems = useSelector(getTotalItemsFromCart);
  const amount = useSelector(getTotalAmountFromCart);

  return (
    <View style={{ flex: 1, paddingBottom: 40 }}>
      <ModalHeader>Carrinho</ModalHeader>
      <FlatList
        data={items}
        flex="1"
        renderItem={({ item }) => <ProductRow {...item.item} />}
      />

      <CartDetailsSection>
        <CartDetailsSectionRow>
          <Text bold>Quantidade itens</Text>
          <Text color="secondary">{totalItems}</Text>
        </CartDetailsSectionRow>
        <CartDetailsSectionRow>
          <Text bold>Total</Text>
          <Text color="secondary">{moneyFormat(amount)}</Text>
        </CartDetailsSectionRow>
      </CartDetailsSection>
      <Button onPress={() => {}} colorScheme="secondary">
        FECHAR PEDIDO
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CartList;
