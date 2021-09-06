// import liraries
import { useRoute } from '@react-navigation/native';
import { Heading } from 'native-base';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { Container } from '~/components';
import { getProductById } from '~/redux/selectors';

interface IProductDetailedParams {
  productId: number;
}
const ProductDetail = () => {
  const product = useSelector(getProductById);

  return (
    <Container>
      <Heading>Produto</Heading>
      <Text>{JSON.stringify(product)}</Text>
    </Container>
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
