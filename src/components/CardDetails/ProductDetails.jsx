// CardDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Grid, Typography, Divider, List, ListItem, ListItemText, TextField } from '@mui/material';
import img1 from '../../assets/detailimg1.png';
import img2 from '../../assets/detailall1.png';

const images = [
    { id: 1, src: img1, alt: 'Image 1' },
    { id: 2, src: img2, alt: 'Image 2' },
];
const termcondition = [
    { id: 1, title: 'Terms & Condition', label: '12% Discount on RuPay Credit Card.', content: 'Min Spend ₹4000, Max Discount ₹1500.' },
    { id: 1, title: 'Terms & Condition', label: '10% Discount on RBL Bank Credit and Debit Cards.', content: 'Min Spend ₹3500, Max Discount ₹1000.' },
    { id: 1, title: 'Terms & Condition', label: '10% Discount on IDFC FIRST Bank Credit and Debit Cards.', content: 'Min Spend ₹3500, Max Discount ₹1000.' },
    { id: 1, title: 'Terms & Condition', label: '7.5% Discount on Myntra Kotak Credit Card.', content: 'Max Discount up to ₹750 on every spends.' },
    { id: 1, title: 'Terms & Condition', label: 'EMI option available', content: 'EMI starting from Rs.38/month' }
]

function ProductDetails() {
    const { id } = useParams();

    return (
        <Box sx={{ p: 4 }}>
            <Grid container spacing={4}>
                {/* Image Section */}
                <Grid item xs={12} md={7}>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2,
                            overflowX: 'auto',
                            '&::-webkit-scrollbar': { display: 'none' } // Hides scrollbar in WebKit browsers
                        }}
                    >
                        {images.map((image) => (
                            <Box
                                key={image.id}
                                component="img"
                                src={image.src}
                                alt={image.alt}
                                sx={{
                                    flexShrink: 0, // Prevents image from shrinking below the specified size
                                    maxWidth: { xs: '100%', sm: '50%', md: '370px' }, // Adjusts width based on screen size
                                    width: '100%', // Ensures image fills its container
                                    height: 'auto', // Keeps aspect ratio
                                    borderRadius: 2,
                                    boxShadow: 3,
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: 5,
                                    },
                                }}
                            />
                        ))}
                    </Box>
                </Grid>


                {/* Details Section */}
                <Grid item xs={12} md={5}>
                    <Box sx={{ textAlign: 'left', pt: 2 }}>
                        <Typography variant="h6" color="text.secondary">H&M</Typography>
                        <Typography variant="h6" fontWeight="bold" sx={{}}>Women Striped Jumper</Typography>
                        <Divider sx={{ my: 3 }} />

                        <Box sx={{ display: '', alignItems: 'center', mt: 2 }}>
                            <Typography variant="h5" color="" fontWeight="bold">MRP ₹799</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{}}>inclusive of all taxes</Typography>
                        </Box>


                        <Typography variant="body1" fontWeight="bold" sx={{ mt: 2 }}>Select Size</Typography>
                        {/* Size Buttons */}
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 1,
                                mt: 1,
                                width: '100%',
                            }}
                        >
                            {['XXS', 'XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                <Button
                                    key={size}
                                    variant="outlined"
                                    sx={{
                                        flex: '1 1 auto', // Ensures buttons take equal width and don't wrap
                                        minWidth: { sm: '50px', xs: 0, md: '25px' },      // Allows them to shrink as needed
                                        maxWidth: { sm: '50px', xs: 0, md: '50px' },
                                        borderRadius: '100%',
                                        height: { sm: '50px', xs: 'auto', md: '50px' }
                                    }}
                                >
                                    {size}
                                </Button>
                            ))}
                        </Box>


                        <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                            <Button variant="contained" color="primary" fullWidth sx={{ py: 1.5, bgcolor: '#FF527B', fontWeight: 'bold', fontSize: 13 }}>
                                Add to Bag
                            </Button>
                            <Button variant="outlined" color="secondary" fullWidth sx={{ py: 1.5, fontWeight: 'bold', fontSize: 13 }}>
                                Wishlist
                            </Button>
                        </Box>
                        <Divider sx={{ my: 3 }} />


                        <Box sx={{ pl: 1 }}>
                            <Typography>Delivery Options     </Typography>
                            <TextField id="outlined-basic" placeholder='Enter Pincode' variant="outlined" size='small' sx={{ mt: 2, mb: 1 }} />
                            <Typography sx={{ fontSize: '.8rem' }}>Please enter PIN code to check delivery time & Pay on Delivery Availability</Typography>

                        </Box>


                        <Box sx={{ pl: 1, mt: 3, lineHeight: 1.6 }}>
                            <Typography variant="body2" sx={{ fontSize: '0.95rem' }}>100% Original Products</Typography>
                            <Typography variant="body2" sx={{ fontSize: '0.95rem' }}>Pay on delivery might be available</Typography>
                            <Typography variant="body2" sx={{ fontSize: '0.95rem' }}>Easy 7 days returns and exchanges</Typography>
                        </Box>

                        <Box sx={{ pl: 1, mt: 6, lineHeight: 1.6 }}>
                            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: '1rem', mb: 1 }}>BEST OFFERS</Typography>
                            <Typography variant="body2" color="success.main" sx={{ fontSize: '0.95rem', fontWeight: 'bold' }}>Best Price: Rs. 499</Typography>
                            <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>Applicable on: Orders above Rs. 300 (only on first purchase)</Typography>
                            <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 'bold', color: 'primary.main' }}>Coupon code: 50PERCENTOFF</Typography>
                            <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>Coupon Discount: 50% off (Your total saving: Rs. 300)</Typography>
                        </Box>


                        <Box sx={{ pl: 1 }}>
                            <Typography variant="body1" fontWeight="bold">Offers & Terms</Typography>
                            {termcondition.map((term) => (
                                <Box key={term.id} sx={{ mt: 2 }}>
                                    <Typography variant="body2" fontWeight="bold" sx={{ color: '#FF3F6C' }}>{term.title}</Typography>
                                    <Typography variant="body2" fontWeight="bold" >{term.label}</Typography>
                                    <Typography variant="body2" color="text.secondary">{term.content}</Typography>
                                </Box>
                            ))}
                        </Box>

                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ProductDetails;
