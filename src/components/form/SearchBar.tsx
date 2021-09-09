import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Input, Icon } from 'native-base';

const SearchBar = props => {
  return (
    <View style={styles.container}>
      <Input
        bg="#fff"
        width="100%"
        borderRadius={4}
        py={3}
        px={1}
        fontSize={14}
        {...{ props }}
        InputLeftElement={
          <Icon
            size="sm"
            m={2}
            rounded={10}
            size={6}
            color="gray.400"
            as={<MaterialIcons name="search" />}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: 20,
    paddingLeft: 10,
    alignItems: 'center',
  },
});

export default SearchBar;
