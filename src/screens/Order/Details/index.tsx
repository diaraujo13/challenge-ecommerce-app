import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/core';
import { format } from 'date-fns';
import { Heading, Text, View, FlatList } from 'native-base';

import { Badge, Container } from '~/components';
import {
  CartDetailsSection,
  CartDetailsSectionRow,
} from '~/screens/Cart/styles';
import { moneyFormat } from '~/common/utils';

const OrderDetails = () => {
  const {
    params: { order },
  } = useRoute();

  return (
    <Container>
      <View alignItems="center">
        <Text bold mb="1" fontSize="2xl">
          Pedido Nª {order.id}
        </Text>
        <Text bold>
          {format(new Date(order.createdAt), 'dd/MM/yyyy  hh:mm')}
        </Text>
      </View>

      <View borderBottomColor="gray.200" mt="5" mb="4">
        <Text bold fontSize="lg">
          Produtos
        </Text>
      </View>
      <FlatList
        data={order.products}
        flex="1"
        renderItem={({ item, index }) => (
          <View mb="2" flexDirection="row">
            <View alignItems="center" justifyContent="center">
              <Badge>{item.qty}x</Badge>
            </View>
            <Text ml="2">{item.item.title} </Text>
          </View>
        )}
      />

      <CartDetailsSection>
        <CartDetailsSectionRow>
          <Text bold>Quantidade itens</Text>
          <Text color="secondary">{order.totalItems}</Text>
        </CartDetailsSectionRow>
        <CartDetailsSectionRow>
          <Text bold>Total</Text>
          <Text color="secondary">{moneyFormat(order.amount)}</Text>
        </CartDetailsSectionRow>
      </CartDetailsSection>
    </Container>
  );
};

export default OrderDetails;
