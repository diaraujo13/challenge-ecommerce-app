import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { RootState } from '~/redux/store';
import { IProduct } from '~/screens/Product';

const productsState = state => state.products;
const cartState = state => state.cart;

export const getCart = createSelector(cartState, ({ items }) => items);

export const getTotalItemsFromCart = createSelector(
  cartState,
  ({ items }: RootState) => items.length,
);
