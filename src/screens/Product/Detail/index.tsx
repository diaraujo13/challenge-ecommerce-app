import React, { Component, useEffect, useState, useCallback } from 'react';
import { useRoute } from '@react-navigation/native';
import { Button, Heading } from 'native-base';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '~/components';
import { getProductById } from '~/redux/selectors';
import { cartActions } from '~/redux/actions';

interface IProductDetailedParams {
  productId: number;
}
const ProductDetail = () => {
  const dispatch = useDispatch();
  const product = useSelector(getProductById);
  const addToCart = useCallback(() => {
    dispatch(cartActions.addProductToCart(product.id));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <View style={{ padding: 10 }}>
        <Heading>{product.title}</Heading>
      </View>
      <View style={{ backgroundColor: 'white' }}>
        <Image
          style={{ width: '100%', height: 330, resizeMode: 'contain' }}
          source={{ uri: product?.image }}
        />
      </View>
      <Text
        style={{ padding: 10, marginVertical: 40, fontSize: 16, color: '#777' }}
      >
        {product.description}
      </Text>

      <Button onPress={addToCart}>ADICIONAR AO CARRINHO</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default ProductDetail;
