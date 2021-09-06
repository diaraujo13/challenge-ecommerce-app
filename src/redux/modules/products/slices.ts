/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '~/screens/Product';
import productsMock from '~/mock/products';

interface IProductState {
  items: IProduct[];
  selected: number;
  filter: Record<string, string>;
}

const initialState: IProductState = {
  items: productsMock,
  selected: 0,
  filter: {
    orderBy: '',
  },
};

const { actions, reducer } = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectProduct(state: IProductState, action: PayloadAction<number>) {
      const { id } = state.items.find(el => el.id === action.payload);
      state.selected = id;
    },
  },
});

export { actions, reducer };
