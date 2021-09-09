import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { RootState } from '~/redux/store';
import { IProduct } from '~/screens/Product';

const productsState = state => state.products;
const cartState = state => state.cart;

export const getCartItems = createSelector(
  [cartState, productsState],
  (_cart, _products) =>
    _cart.items.map(el => _products.items.find(p => p.id === el)), // TODO: checar contra id em el
);

export const getTotalItemsFromCart = createSelector(
  cartState,
  ({ items }: RootState) => items.length,
);
