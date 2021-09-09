// import liraries
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, { Component, memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CloseButton = () => {
  const navigation = useNavigation();

  return (
    <AntDesign name="close" onPress={() => navigation.goBack()} size={30} />
  );
};

export default memo(CloseButton);
