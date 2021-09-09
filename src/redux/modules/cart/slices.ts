import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '~/screens/Product';

interface ICartItem {
  id: number;
  item: IProduct;
  qty: number;
}

interface ICart {
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
  },
});

export { actions, reducer };
