import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { IProduct } from './slices';

import { RootState } from '~/redux/store';

const productsState = state => state.products;

export const getAllProducts = createSelector(
  productsState,
  ({ items, filter }) => {
    const { orderBy } = filter;
    switch (orderBy) {
      case 'default':
        return items;
      case 'nameDown':
        return items.slice().sort((a, b) => a.title < b.title);
      case 'nameUp':
        return items.slice().sort((a, b) => a.title > b.title);
      case 'precoDown':
        return items.slice().sort((a, b) => a.price < b.price);
      case 'precoUp':
        return items.slice().sort((a, b) => a.price > b.price);
      default:
        return items;
    }
  },
);

export const getProductById = createSelector(
  productsState,
  ({ items, selected }: RootState) => items.find(el => el.id === selected),
);
