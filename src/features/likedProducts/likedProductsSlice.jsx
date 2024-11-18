
import { createSlice } from '@reduxjs/toolkit';

export const likedProductsSlice = createSlice({
  name: 'likedProducts',
  initialState: {
    items: [],
  },
  reducers: {
    toggleLike: (state, action) => {
      const product = action.payload;
      const index = state.items.findIndex((item) => item.id === product.id);
      if (index >= 0) {
        state.items.splice(index, 1); 
      } else {
        state.items.push(product); 
      }
    },
    removeFromLikedProducts: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      },
  },
});

export const { toggleLike, removeFromLikedProducts } = likedProductsSlice.actions;

export default likedProductsSlice.reducer;
