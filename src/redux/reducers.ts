import { combineReducers } from '@reduxjs/toolkit';

import { reducer as productReducer } from '~/redux/modules/products/slices';

export default combineReducers({
  products: productReducer,
});
