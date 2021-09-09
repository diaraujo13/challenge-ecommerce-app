import React, { Component, useEffect, useState, useCallback } from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, View, Button, Heading, ScrollView } from 'native-base';
import { Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Container, ModalHeader } from '~/components';
import { getProductById } from '~/redux/selectors';
import { cartActions } from '~/redux/actions';

interface IProductDetailedParams {
  productId: number;
}
const ProductDetail = () => {
  const dispatch = useDispatch();
  const product = useSelector(getProductById);
  const addToCart = useCallback(() => {
    dispatch(
      cartActions.addProductToCart({
        id: product.id,
      }),
    );
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF', paddingBottom: 30 }}>
      <ModalHeader>{product?.title}</ModalHeader>
      <Image
        style={{ width: '100%', height: 230, resizeMode: 'contain' }}
        source={{ uri: product?.image }}
      />
      <ScrollView>
        <Text
          style={{
            padding: 10,
            marginVertical: 40,
            fontSize: 16,
            color: '#777',
          }}
        >
          {product?.description}
        </Text>
      </ScrollView>
      <View>
        <Button onPress={addToCart}>ADICIONAR AO CARRINHO</Button>
      </View>
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
