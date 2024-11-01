import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const Womenlist = () => {
    return (
        <Box sx={{ padding: 2, width: '100%' }}>
            <Grid container spacing={2}>
                <Grid item xs={2.2}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red', fontSize: '.9rem' }}>Topwear</Typography>
                    <Typography variant="body2">T-Shirts</Typography>
                    <Typography variant="body2">Casual Shirts</Typography>
                    <Typography variant="body2">Formal Shirts</Typography>
                    <Typography variant="body2">Sweatshirts</Typography>
                    <Typography variant="body2">Jackets</Typography>
                    <Typography variant="body2">Blazers & Coats</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red', fontSize: '.9rem' }}>Indian & Festive Wear</Typography>
                    <Typography variant="body2">Kurtas & Kurta Sets</Typography>
                    <Typography variant="body2">Sherwanis</Typography>
                    <Typography variant="body2">Nehru Jackets</Typography>
                    <Typography variant="body2">Dhotis</Typography>
                    <Typography variant="body2">Jackets</Typography>
                    <Typography variant="body2">Blazers & Coats</Typography>
                </Grid>
                <Grid item xs={2.2}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red', fontSize: '.9rem' }}>Bottomwear</Typography>
                    <Typography variant="body2">Jeans</Typography>
                    <Typography variant="body2">Casual Trousers</Typography>
                    <Typography variant="body2">Formal Trousers</Typography>
                    <Typography variant="body2">Shorts</Typography>
                    <Typography variant="body2">Track Pants & Joggers</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red', fontSize: '.9rem' }}>Innerwear & Sleepwear</Typography>
                    <Typography variant="body2">Briefs & Trunks</Typography>
                    <Typography variant="body2">Boxers</Typography>
                    <Typography variant="body2">Vests</Typography>
                    <Typography variant="body2">Sleepwear & Loungewear</Typography>
                    <Typography variant="body2">Thermals</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red', fontSize: '.9rem' }}>Plus Size</Typography>
                </Grid>
                <Grid item xs={2.2}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red', fontSize: '.9rem' }}>Footwear</Typography>
                    <Typography variant="body2">Casual Shoes</Typography>
                    <Typography variant="body2">Sports Shoes</Typography>
                    <Typography variant="body2">Formal Shoes</Typography>
                    <Typography variant="body2">Sneakers</Typography>
                    <Typography variant="body2">Sandals & Floaters</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red', fontSize: '.9rem' }}>Personal Care & Grooming</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red', fontSize: '.9rem' }}>Sunglasses & Frames</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red', fontSize: '.9rem' }}>Watches</Typography>
                </Grid>
                <Grid item xs={2.2}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red', fontSize: '.9rem' }}>Sports & Active Wear</Typography>
                    <Typography variant="body2">Sports Shoes</Typography>
                    <Typography variant="body2">Sports Sandals</Typography>
                    <Typography variant="body2">Active T-Shirts</Typography>
                    <Typography variant="body2">Track Pants & Shorts</Typography>
                    <Typography variant="body2">Tracksuits</Typography>
                    <Typography variant="body2">Jackets & Sweatshirts</Typography>
                    <Typography variant="body2">Sports Accessories</Typography>
                    <Typography variant="body2">Swimwear</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red', fontSize: '.9rem' }}>Gadgets</Typography>
                    <Typography variant="body2">Smart Wearables</Typography>
                    <Typography variant="body2">Fitness Gadgets</Typography>
                    <Typography variant="body2">Headphones</Typography>
                    <Typography variant="body2">Speakers</Typography>
                </Grid>
                <Grid item xs={2.2}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red', fontSize: '.9rem' }}>Fashion Accessories</Typography>
                    <Typography variant="body2">Wallets</Typography>
                    <Typography variant="body2">Belts</Typography>
                    <Typography variant="body2">Perfumes & Body Mists</Typography>
                    <Typography variant="body2">Deodorants</Typography>
                    <Typography variant="body2">Caps & Hats</Typography>
                    <Typography variant="body2">Mufflers, Scarves & Gloves</Typography>
                    <Typography variant="body2">Phone Cases</Typography>
                    <Typography variant="body2">Rings & Wristwear</Typography>
                    <Typography variant="body2">Helmets</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Womenlist;
