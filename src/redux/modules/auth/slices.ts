import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  token: null,
};

const { actions, reducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signin: (state, action) => {
      const { token } = action.payload;
      state.token = token;

      AsyncStorage.setItem('authData', token);
    },
    clear: state => {
      state.token = null;
      AsyncStorage.clear();
    },
  },
});

export { actions, reducer };
