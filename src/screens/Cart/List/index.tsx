import React, { Component, useCallback } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Button, FlatList, Text, View } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

import { CartDetailsSection, CartDetailsSectionRow } from '../styles';

import {
  CloseButton,
  Container,
  ModalHeader,
  CartProductRow,
} from '~/components';
import {
  getCartItems,
  getTotalItemsFromCart,
  getTotalAmountFromCart,
} from '~/redux/selectors';
import { moneyFormat } from '~/common/utils';
import { cartActions, orderActions } from '~/redux/actions';

const CartList = props => {
  const items = useSelector(getCartItems);
  const totalItems = useSelector(getTotalItemsFromCart);
  const amount = useSelector(getTotalAmountFromCart);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const checkoutOrder = useCallback(async () => {
    await dispatch(
      orderActions.addOrder({
        products: items,
        totalItems,
        amount,
        createdAt: new Date().toISOString(),
      }),
    );
    dispatch(cartActions.clearCart());
    navigation.popToTop();
    navigation.navigate('Pedidos', { screen: 'OrderList' });
  }, [items, totalItems, navigation]);

  return (
    <View style={{ flex: 1, paddingBottom: 40 }}>
      <ModalHeader>Carrinho</ModalHeader>
      <FlatList
        data={items}
        flex="1"
        renderItem={({ item }) => (
          <CartProductRow {...item.item} qty={item.qty} />
        )}
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
      <Button
        onPress={checkoutOrder}
        disabled={totalItems == 0}
        colorScheme="secondary"
      >
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
