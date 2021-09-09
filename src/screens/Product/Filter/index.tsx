import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  View,
  Text,
  Heading,
  IconButton,
  Pressable,
  Button,
  Select,
  Slider,
} from 'native-base';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';

import { CloseButton, Container } from '~/components';
import { RootState } from '~/redux/store';
import { productActions } from '~/redux/actions';

const Filter = () => {
  const navigation = useNavigation();

  const { orderBy } = useSelector(state => state.products.filter);
  const [orderFilter, setOrderFilter] = React.useState(orderBy);

  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <CloseButton />
        <View style={{ flex: 1 }}>
          <Heading mt="10">Filtros</Heading>

          <Text bold mt="10" mb="5">
            Ordernar por
          </Text>
          <Select
            selectedValue={orderFilter}
            onValueChange={value => {
              console.log(value);
            }}
          >
            <Select.Item label="Padrão" value="default" />
            <Select.Item label="Preço" value="preco" />
            <Select.Item label="Nome" value="nome" />
          </Select>
        </View>
        <Button
          onPress={() => {
            dispatch(
              productActions.setFilter({
                orderBy: orderFilter,
              }),
            );
            navigation.goBack();
          }}
          colorScheme="secondary"
        >
          APLICAR FILTROS
        </Button>
      </Container>
    </>
  );
};

export default Filter;
