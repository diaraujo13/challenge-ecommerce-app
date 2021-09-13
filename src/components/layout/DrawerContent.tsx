import React, { Component } from 'react';
import { Text, View } from 'native-base';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';

import { authActions } from '~/redux/actions';

const DrawerContent = (props: DrawerContentComponentProps) => {
  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sair"
        onPress={() => {
          dispatch(authActions.clear());
        }}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
