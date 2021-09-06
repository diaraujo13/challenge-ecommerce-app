import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
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
    addProduct(state, action: PayloadAction<number>) {
      state.items.push(action.payload);
    },
  },
});
