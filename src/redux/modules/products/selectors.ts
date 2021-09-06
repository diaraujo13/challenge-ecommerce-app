import { useSelector } from 'react-redux';

import { RootState } from '~/redux/store';
import { IProduct } from '~/screens/Product';

export const getAllProducts = state => state.products.items;

export const getProductById = id =>
  useSelector((state: RootState) =>
    state.products.items.find(el => item.id === el.id),
  );
