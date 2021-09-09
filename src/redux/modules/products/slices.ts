/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '~/screens/Product';
import productsMock from '~/mock/products';

interface IProductFilter {
  orderBy: string;
}
interface IProductState {
  items: IProduct[];
  selected: number;
  filter: IProductFilter;
}

const initialState: IProductState = {
  items: productsMock,
  selected: 0,
  filter: {
    orderBy: 'default',
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
