import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { RootState } from '~/redux/store';
import { IProduct } from '~/screens/Product';

const productsState = state => state.products;

export const getAllProducts = createSelector(
  productsState,
  ({ items }) => items,
);

export const getProductById = createSelector(
  productsState,
  ({ items, selected }: RootState) => items.find(el => el.id === selected),
);
