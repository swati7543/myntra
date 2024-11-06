import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../redux/features/addToCartSlice';
import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, Box, Breadcrumbs, Button, Checkbox, Divider, Grid, Link, Menu, MenuItem, Radio, Slider, TextField, Typography } from '@mui/material';
import img1 from '../../assets/detailimg1.png';
import addcartimg from '../../assets/addtocartimg.png';
// import img2 from '../../assets/detailall1.png';

function Bags() {
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    // Calculate total price
    const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
    const hasItems = items.length > 0;

    return (
        <>
            

            {hasItems ?
                <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'left' }
                } >
                    <Grid container sx={{  mt: 4 }}>
                        {/* Sidebar */}
                        <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'right', }}>
                            <Box sx={{ padding: 2, width: { md: '70%', sm: '100%', xs: '100%' }, }} >
                                <Box sx={{ display: 'flex', bgcolor: '#F', mb: 2, justifyContent: 'space-between', border: 1, height: 'auto', padding: 2, alignItems: 'center' }}>
                                    <Typography>Check delivery time & services</Typography>
                                    <Button variant='outlined' >Enter Pin Code</Button>
                                </Box>
                                <Box sx={{ border: 1, height: 'auto', padding: 2, }}>
                                    <Typography>Available offers</Typography>
                                    <Typography>7.5% Instant Discount up to ₹750 on every spend with Myntra Kotak Credit Card. TCA</Typography>

                                </Box>
                                <Box sx={{ display: 'flex', m: { md: 2, sm: 0, xs: 0 }, justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Checkbox />
                                    <Typography>1/1Items Selected</Typography>
                                    {items.map(item => (
                                        <Box key={item.id} sx={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            borderColor: 'divider',
                                            borderRadius: 2,
                                            bgcolor: 'background.paper',
                                            color: 'text.secondary',
                                            '& svg': {
                                                m: 1,
                                            },
                                        }}
                                        >
                                            <Typography
                                                variant="outlined"
                                                color="error"
                                                onClick={() => dispatch(removeItem(item.id))}
                                                sx={{ m: 1, cursor: 'pointer' }}
                                            >
                                                Remove
                                            </Typography>
                                            <Divider orientation="vertical" flexItem />
                                            <Typography
                                                variant="outlined"
                                                color="error"
                                                onClick={() => dispatch(removeItem(item.id))}
                                                sx={{ m: 1, cursor: 'pointer' }}
                                            >
                                                Move to Wishlist
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        width: '100%',
                                        border: 1,
                                        // p: 1,
                                        gap: 2,
                                        overflowX: 'auto',
                                        '&::-webkit-scrollbar': { display: 'none' } // Hides scrollbar in WebKit browsers
                                    }}
                                >

                                    <Box
                                        sx={{
                                            flexShrink: 0,
                                            maxWidth: { xs: '100%', sm: '50%', md: '100px' },
                                            width: '100%',
                                            height: 'auto',
                                            borderRadius: 2,
                                            boxShadow: 3,
                                            transition: 'transform 0.3s, box-shadow 0.3s',
                                            '&:hover': {
                                                transform: 'scale(1.05)',
                                                boxShadow: 5,
                                            },
                                        }}
                                    >
                                        <img src={img1} alt='img' style={{ width: '100%', height: '100%' }} />

                                    </Box>
                                    <Box>
                                        <Typography variant="h6" color="text.secondary">H&M</Typography>
                                        <Typography variant="h6" fontWeight="bold">Women Striped Jumper</Typography>
                                        <Typography variant="h6" fontWeight="bold">799</Typography>
                                    </Box>

                                </Box>
                            </Box>
                        </Grid>

                        {/* Content Area */}
                        <Grid item xs={12} md={5}>
                            <Box sx={{ textAlign: 'left', padding: 2, width: { md: '70%', sm: '90%', xs: '90%' } }}>
                                <Typography variant="h6" color="text.secondary">Coupons</Typography>
                                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { md: 15, sm: 13, xs: 13 } }}>Apply Coupons</Typography>
                                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { md: 15, sm: 13, xs: 13 } }}>Login to get upto 200 off on first order</Typography>
                                <Divider sx={{ my: 3 }} />

                                <Box sx={{ mt: 2 }}>
                                    <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { md: 15, sm: 13, xs: 13 } }}>Support Transformative social work in india</Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: 15 }}>Donate and make a difference</Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        gap: 1,
                                        mt: 1,
                                        width: '100%',
                                    }}
                                    >
                                        {['10', '20', '50', '100'].map((size) => (
                                            <Button
                                                key={size}
                                                variant="outlined"
                                                sx={{
                                                    flex: '1 1 auto',
                                                    minWidth: { sm: '50px', xs: 0, md: '25px' },
                                                    maxWidth: { sm: '50px', xs: '50px', md: '50px' },
                                                    borderRadius: '100%',
                                                    height: { sm: '50px', xs: '50px', md: '50px' },
                                                    gap: 2
                                                }}
                                            >
                                                {size}
                                            </Button>
                                        ))}
                                    </Box>
                                </Box>
                                <Button>Know more</Button>
                                <Divider />
                                <Typography variant="body1" fontWeight="bold" sx={{ mt: 2, fontSize: 15 }}>PriceDetails</Typography>
                                <Box
                                    sx={{
                                        // display: 'flex',
                                        // gap: 1,
                                        // mt: 1,
                                        // width: '100%',
                                    }}
                                >
                                    {items.map(item => (
                                        <Box
                                            key={item.id}
                                            sx={{
                                                width: { md: '100%', sm: '100%', xs: '100%' },
                                                // border: '1px solid #ddd',
                                                // borderRadius: '8px',
                                                // padding: '16px',
                                                mb: 2,
                                                textAlign: 'left'
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', textAlign: 'left', justifyContent: 'space-between' }}>

                                                <Typography sx={{ fontSize: 15 }}>Total MRP :</Typography>
                                                <Typography sx={{ fontSize: 15 }}> ₹{totalPrice}</Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', textAlign: 'left', justifyContent: 'space-between' }}>

                                                <Typography sx={{ fontSize: 15 }}>Coupon Discount</Typography>
                                                <Typography sx={{ fontSize: 15 }}>
                                                    Apply Coupon
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', textAlign: 'left', justifyContent: 'space-between' }}>

                                                <Typography sx={{ fontSize: 15 }}>Platform Fee</Typography>
                                                <Typography sx={{ fontSize: 15 }}>Free</Typography>

                                            </Box>
                                            <Box sx={{ display: 'flex', textAlign: 'left', justifyContent: 'space-between' }}>

                                                <Typography sx={{ fontSize: 15 }}>Shipping Fee</Typography>
                                                <Typography sx={{ fontSize: 15 }}>Free</Typography>
                                            </Box>
                                            {/* <Typography variant="h6" sx={{ fontSize: 15 }}>Name: {item.name}</Typography>
                                    <Typography variant="body1" sx={{ fontSize: 15 }}>Price: ₹{item.price}</Typography>
                                    <Typography variant="body2" sx={{ fontSize: 15 }}>ID: {item.id}</Typography> */}
                                            <Divider sx={{ mt: 2 }} />
                                            <Box sx={{ mt: 2, display: 'flex', textAlign: 'left', justifyContent: 'space-between' }}>
                                                <Typography variant="h6">Total Amount: </Typography>
                                                <Typography variant="h6"> ₹{totalPrice}</Typography>
                                            </Box>

                                        </Box>
                                    ))}
                                </Box>


                                <Divider sx={{ my: 3 }} />


                            </Box>
                        </Grid >
                    </Grid >

                </Box >
                : (
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
                        <Box>
                            <Box sx={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
                                <img src={addcartimg} alt='cartimg' style={{ width: '10rem', height: '100%' }} />
                            </Box>
                            <Typography variant="h6" color="text.secondary" sx={{ fontSize: '1.2rem', fontWeight: 600 }}>Hey, it feels so light</Typography>
                            <Typography variant="h6" color="text.secondary" sx={{ fontSize: { lg: 16, md: 14, sm: 14, xs: 14 } }}>There is nothing in your bag. Let's add some items</Typography>
                            <Button variant='contained' sx={{ mt: 2 }}>Add Items from Wishlist</Button>
                        </Box>
                    </Box>


                )}
        </>
    );
}

export default Bags;
