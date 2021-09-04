import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { Box, FlatList } from 'native-base';

import { Container } from 'components';
import { apiService } from 'common';

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Record<string, any>;
}

const ProductList = () => {
  const [products, setProducts] = useState<Array<IProduct>>([]);

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get<IProduct[]>(
          'https://fakestoreapi.com/products',
        );
        setProducts(data);
      } catch (e) {
        alert('Ocorreu um erro com sua requisição');
      }
    })();
  }, []);

  return (
    <>
      <Container>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <Box px={5} py={2} rounded="md" my={2} bg="primary.300">
              {item.title}
            </Box>
          )}
          keyExtractor={item => item.id}
        />
      </Container>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
});

// make this component available to the app
export default ProductList;
