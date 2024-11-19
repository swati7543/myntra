import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../redux/features/addToCartSlice';
import { Box, Button, Typography } from '@mui/material';
import { removeFromWishlist } from '../../redux/features/addToWishlistSlice';
import { useNavigate } from 'react-router-dom';
import addcartimg from '../../assets/addtocartimg.png';


function Wishlist() {
    const navigate = useNavigate()
    const items = useSelector(state => state.wishlist.items);
    const dispatch = useDispatch();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box>
                
                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
                    <Box>
                        <Typography variant="h6" color="text.secondary" sx={{ fontSize: '1.2rem', fontWeight: 600 }}>PLEASE LOG IN</Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ fontSize: { lg: 16, md: 14, sm: 14, xs: 14 } ,mb:2,mt:2}}>Login to view items in your wishlist.</Typography>
                        <Box sx={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
                            <img src={addcartimg} alt='cartimg' style={{ width: '10rem', height: '100%' }} />
                        </Box>
                        <Button onClick={() => navigate('/login')} variant='outlined' sx={{ mt: 2 ,width:'10rem',height:'3.5rem',fontSize:'1.3rem',fontWeight:600}}>Login</Button>
                    </Box>
                </Box>


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
