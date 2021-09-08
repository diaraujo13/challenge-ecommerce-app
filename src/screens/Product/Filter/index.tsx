import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Heading } from 'natibe-base';

const Filter = () => {
  return (
    <View style={styles.container}>
      <Heading>Filtros</Heading>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// make this component available to the app
export default Filter;
