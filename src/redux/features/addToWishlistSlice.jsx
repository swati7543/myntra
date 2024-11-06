import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: [],
    },
    reducers: {
        addToWishlistItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeFromWishlist: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    },
});

export const { addToWishlistItem, removeFromWishlist } = wishlistSlice.actions;
export const selectWishlistItems = state => state.wishlist.items;

export default wishlistSlice.reducer;
