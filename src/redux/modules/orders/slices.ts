import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '~/redux/modules/products/slices';

export interface IOrder {
  products: Array<IProduct>;
  totalItems: number;
  amount: number;
  createdAt: string;
  orderId: number;
}

export interface IRootOrder {
  items: Array<IOrder>;
}

const initialState: IRootOrder = {
  items: [],
};

const { actions, reducer } = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<IOrder>) => {
      console.log(action.payload);
      state.items.push(action.payload);
    },
  },
});

export { actions, reducer };
