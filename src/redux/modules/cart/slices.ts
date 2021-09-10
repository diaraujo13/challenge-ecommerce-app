import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '~/screens/Product';

interface ICartItem {
  id: number;
  qty: number;
}

export interface ICart {
  items: Array<ICartItem>;
  loading: boolean;
  error: string;
}

const initialState: ICart = {
  items: [],
  loading: false,
  error: '',
};

const { reducer, actions } = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    addProductToCart(state, action: PayloadAction<ICartItem>) {
      const { id } = action.payload;

      const existentIndex = state.items.findIndex(el => el.id === id);

      if (existentIndex >= 0) state.items[existentIndex].qty += 1;
      else state.items.push({ id, qty: 1 });
    },
    changeQuantity(state, action) {
      const { items } = state;
      const { id, newQty } = action.payload;
      const n = state.items.findIndex(el => el.id === id);

      items[n].qty += newQty;
      if (items[n].qty === 0) state.items.splice(n, 1);
    },
  },
});

export { actions, reducer };
