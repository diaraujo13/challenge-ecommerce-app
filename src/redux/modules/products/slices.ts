/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import productsMock from '~/mock/products';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Record<string, any>;
}

export interface IProductFilter {
  orderBy: string;
}
export interface IProductState {
  items: IProduct[];
  selected: number;
  filter: IProductFilter;
}

const initialState: IProductState = {
  items: productsMock,
  selected: 0,
  filter: {
    orderBy: 'default',
    sortBy: 1,
  },
};

const { actions, reducer } = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectProduct(state: IProductState, action: PayloadAction<number>) {
      // const { id } = state.items.find(el => el.id === action.payload);
      state.selected = action.payload;
    },
    setFilter(state: IProductState, action: PayloadAction<IProductFilter>) {
      state.filter = {
        ...state.filter,
        ...action.payload,
      };
    },
  },
});

export { actions, reducer };
