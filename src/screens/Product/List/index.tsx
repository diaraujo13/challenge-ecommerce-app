import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {
  Text,
  Box,
  FlatList,
  Heading,
  View,
  Button,
  IconButton,
} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import * as selectors from '~/redux/selectors';
import { ProductRow, SearchBar } from '~/components';
import { productActions } from '~/redux/actions';

const ProductList = props => {
  const navigation = useNavigation();

  const products = useSelector(selectors.getAllProducts);
  const dispatch = useDispatch();

  return (
    <>
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            flex: 1,
            flexGrow: 1,
          }}
        >
          <SearchBar lightTheme />
        </View>
        <View style={{ width: '15%' }}>
          <IconButton
            onPress={() => navigation.navigate('ProductFilter')}
            icon={<AntDesign size={24} name="filter" />}
          />
        </View>
      </View>
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
        keyExtractor={item => item.id.toString()}
      />
    </>
  );
};

export default ProductList;
