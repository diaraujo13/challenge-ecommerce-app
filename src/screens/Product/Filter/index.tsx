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
  Radio,
} from 'native-base';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';

import { CloseButton, Container, ModalHeader } from '~/components';
import { RootState } from '~/redux/store';
import { productActions } from '~/redux/actions';

const Filter = () => {
  const navigation = useNavigation();

  const { orderBy } = useSelector(state => state.products.filter);

  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <ModalHeader>Filtros</ModalHeader>
        <View flex={1} px={4}>
          <Text bold mt="10" mb="5">
            Ordernar por
          </Text>
          <Radio.Group
            name="orderByRadio"
            value={orderBy}
            onChange={nextValue => {
              dispatch(productActions.setFilter({ orderBy: nextValue }));
            }}
          >
            <Radio ml={3} mb={4} value="default">
              Padrão
            </Radio>
            <Radio ml={3} mb={4} value="precoUp">
              Menor preço para maior
            </Radio>
            <Radio ml={3} mb={4} value="precoDown">
              Maior preço para menor
            </Radio>
            <Radio ml={3} mb={4} value="nameUp">
              Nome a-Z
            </Radio>
            <Radio ml={3} value="nameDown">
              Nome Z-a
            </Radio>
          </Radio.Group>
        </View>
        <Button
          onPress={() => {
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
