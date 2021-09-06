import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Box, FlatList, Heading } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import * as selectors from '~/redux/selectors';
import { ProductRow } from '~/components';
import { productActions } from '~/redux/actions';

const ProductList = props => {
  const navigation = useNavigation();

  const products = useSelector(selectors.getAllProducts);
  const dispatch = useDispatch();

  return (
    <>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductRow
            onPress={() => {
              const { id } = item;
              dispatch(productActions.selectProduct(id));
              navigation.navigate('ProductDetails');
            }}
            {...item}
          />
        )}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default ProductList;
