import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/addToCartSlice'; 
import wishlistReducer from './features/addToWishlistSlice';
const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer,

    },
});

export default store;
