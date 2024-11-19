import React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';

const Menlist = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container spacing={2}>
                <Grid item xs={2.2} >
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red', fontSize: '.9rem' }}>Topwear</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>T-Shirts</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Casual Shirts</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Formal Shirts</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Sweatshirts</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Jackets</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Blazers & Coats</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red', fontSize: '.9rem' }}>Indian & Festive Wear</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Kurtas & Kurta Sets</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Sherwanis</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Nehru Jackets</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Dhotis</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Jackets</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Blazers & Coats</Typography>
                </Grid>
                <Grid item xs={2.2}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red', fontSize: '.9rem' }}>Bottomwear</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Jeans</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Casual Trousers</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Formal Trousers</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Shorts</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Track Pants & Joggers</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red', fontSize: '.9rem' }}>Innerwear & Sleepwear</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Briefs & Trunks</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Boxers</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Vests</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Sleepwear & Loungewear</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Thermals</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red', fontSize: '.9rem' }}>Plus Size</Typography>
                </Grid>
                <Grid item xs={2.2}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red', fontSize: '.9rem' }}>Footwear</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Casual Shoes</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Sports Shoes</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Formal Shoes</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Sneakers</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Sandals & Floaters</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red', fontSize: '.9rem' }}>Personal Care & Grooming</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red', fontSize: '.9rem' }}>Sunglasses & Frames</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red', fontSize: '.9rem' }}>Watches</Typography>
                </Grid>
                <Grid item xs={2.2}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red', fontSize: '.9rem' }}>Sports & Active Wear</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Sports Shoes</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Sports Sandals</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Active T-Shirts</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Track Pants & Shorts</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Tracksuits</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Jackets & Sweatshirts</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Sports Accessories</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Swimwear</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red', fontSize: '.9rem' }}>Gadgets</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Smart Wearables</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Fitness Gadgets</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Headphones</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Speakers</Typography>
                </Grid>
                <Grid item xs={2.2}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'red', fontSize: '.9rem' }}>Fashion Accessories</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Wallets</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Belts</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Perfumes & Body Mists</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Deodorants</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Caps & Hats</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Mufflers, Scarves & Gloves</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Phone Cases</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Rings & Wristwear</Typography>
                    <Typography variant="body2" sx={{ '&:hover': { backgroundColor: '#f5f5f5' }}}>Helmets</Typography>
                </Grid>
            </Grid>
        </Box>

        // <Box
        //     sx={{
        //         width: '100%',
        //         padding: 4,
        //         backgroundColor: '#ffffff',
        //         borderRadius: 3,
        //         boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        //     }}
        // >
        //     <Grid container spacing={3}>
        //         {
        //         [
        //             {
        //                 title: "Topwear",
        //                 items: ["T-Shirts", "Casual Shirts", "Formal Shirts", "Sweatshirts", "Jackets", "Blazers & Coats"],
        //             },
        //             {
        //                 title: "Indian & Festive Wear",
        //                 items: ["Kurtas & Kurta Sets", "Sherwanis", "Nehru Jackets", "Dhotis", "Jackets", "Blazers & Coats"],
        //             },
        //             {
        //                 title: "Bottomwear",
        //                 items: ["Jeans", "Casual Trousers", "Formal Trousers", "Shorts", "Track Pants & Joggers"],
        //             },
        //             {
        //                 title: "Innerwear & Sleepwear",
        //                 items: ["Briefs & Trunks", "Boxers", "Vests", "Sleepwear & Loungewear", "Thermals"],
        //             },
        //             {
        //                 title: "Footwear",
        //                 items: ["Casual Shoes", "Sports Shoes", "Formal Shoes", "Sneakers", "Sandals & Floaters"],
        //             },
        //         ].map((category, index) => (
        //             <Grid item key={index}>
        //                 <Typography
        //                     variant="h6"
        //                     sx={{
        //                         fontWeight: 'bold',
        //                         color: '#d32f2f',
        //                         fontSize: '1rem',
        //                         marginBottom: 1,
        //                         textTransform: 'uppercase',
        //                     }}
        //                 >
        //                     {category.title}
        //                 </Typography>
        //                 <Divider sx={{ marginBottom: 2 }} />
        //                 {category.items.map((item, idx) => (
        //                     <Typography
        //                         key={idx}
        //                         variant="body2"
        //                         onClick={() => console.log(`Navigate to ${item}`)} // Replace with actual navigation function
        //                         sx={{
        //                             // padding: '6px 0',
        //                             cursor: 'pointer',
        //                             color: '#424242',
        //                             transition: 'all 0.2s',
        //                             borderRadius: 1,
        //                             '&:hover': {
        //                                 backgroundColor: '#f5f5f5',
        //                                 color: '#d32f2f',
        //                                 fontWeight: '500',
        //                             },
        //                         }}
        //                     >
        //                         {item}
        //                     </Typography>
        //                 ))}
        //             </Grid>
        //         ))}
        //     </Grid>
        // </Box>
    );
};


export default Menlist;
