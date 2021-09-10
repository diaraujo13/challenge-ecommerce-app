import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '~/redux/modules/products/slices';

export interface IOrder {
  items: Array<IProduct>;
  total: number;
  amount: number;
  createdAt: string;
  status: string;
}

const initialState: IOrder = {
  items: [],
  total: 0,
  amount: 0,
  createdAt: '',
  status: '',
};

const { reducer, actions } = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<IOrder>) => {
      state.items.push(action.payload);
    },
  },
});

export default { reducer, actions };
