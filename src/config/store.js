import { configureStore } from '@reduxjs/toolkit';
import likedProductsReducer from '../features/likedProducts/likedProductsSlice';
import cartReducer from '../features/cart/cartSlice';
import authenticationReducer from '../features/authentication/authenticationSlice';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    likedProducts: likedProductsReducer,
    cart: cartReducer,
    authentication: authenticationReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    likedProducts: store.getState().likedProducts,
    cart: store.getState().cart,
    authentication: store.getState().authentication,
  });
});
