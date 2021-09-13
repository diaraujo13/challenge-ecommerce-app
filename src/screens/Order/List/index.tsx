import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { FlatList, Heading, View, Text } from 'native-base';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useNavigation } from '@react-navigation/core';

import { Container } from '~/components';
import { RootState } from '~/redux/store';
import { moneyFormat } from '~/common/utils';

const OrderProductRow = ({ item, index }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('OrderDetail', {
          order: { ...item, id: index + 1 },
        })
      }
    >
      <View p="3" m="3" flexDirection="row" borderRadius="7px" bg="gray.50">
        <View style={{ flex: 1 }}>
          <Text bold>Pedido #{index + 1}</Text>
          <Text fontSize="xs">
            {formatDistance(new Date(item.createdAt), new Date(), {
              addSuffix: true,
              locale: ptBR,
            })}
          </Text>
        </View>
        <Text fontSize="lg" bold>
          {moneyFormat(item.amount)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const OrderList = () => {
  const { items } = useSelector(state => state.orders);

  return (
    <FlatList
      data={items}
      keyExtractor={(item, index) => index.toString()}
      renderItem={item => <OrderProductRow {...item} />}
    />
  );
};

export default OrderList;
