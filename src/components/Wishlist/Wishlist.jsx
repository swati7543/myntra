import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../redux/features/addToCartSlice';
import { Box, Typography } from '@mui/material';
import { removeFromWishlist } from '../../redux/features/addToWishlistSlice';

function Wishlist() {
    const items = useSelector(state => state.wishlist.items);
    const dispatch = useDispatch();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box>
                <Typography>Cart Items</Typography>
                {items.map((item) => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>Price: ₹{item.price}</p>
                    </div>
                ))}

                {/* <button onClick={() => dispatch(addItem({ id: 'new-item', name: 'New Item' }))}>
                Add Item
            </button> */}
            </Box>
        </Box>
    );
}

export default Wishlist;
