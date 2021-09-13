import { combineReducers } from '@reduxjs/toolkit';

import { reducer as productReducer } from '~/redux/modules/products/slices';
import { reducer as cartReducer } from '~/redux/modules/cart/slices';
import { reducer as orderReducer } from '~/redux/modules/orders/slices';
import { reducer as authReducer } from '~/redux/modules/auth/slices';

export default combineReducers({
  products: productReducer,
  cart: cartReducer,
  orders: orderReducer,
  auth: authReducer,
});
