import { combineReducers } from '@reduxjs/toolkit';

import { reducer as productReducer } from '~/redux/modules/products/slices';
import { reducer as cartReducer } from '~/redux/modules/cart/slices';

export default combineReducers({
  products: productReducer,
  cart: cartReducer,
});
