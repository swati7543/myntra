import { Box, Container, Divider, Grid2, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import fimg1 from '../../assets/footerimg1.png'
import fimg2 from '../../assets/footerimg2.png'

export const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#f8f8f8', p: 1, marginTop: '20px', borderTop: '1px solid #e0e0e0' }}>
            <Container >
                <Grid2 container >
                    {/* links start */}
                    <Grid2 size={{ xs: 6, md: 2 }} sx={{ textAlign: 'left' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 13, marginBottom: '10px' }}>Online Shopping</Typography>
                        <Box sx={{ textAlign: 'start', marginBottom: '20px' }}>
                            <Typography sx={{ fontSize: 13 }}> Men</Typography>
                            <Typography sx={{ fontSize: 13 }}>Women</Typography>
                            <Typography sx={{ fontSize: 13 }}>Kids</Typography>
                            <Typography sx={{ fontSize: 13 }}>Home & Living</Typography>
                            <Typography sx={{ fontSize: 13 }}>Beauty</Typography>
                            <Typography sx={{ fontSize: 13 }}>Gift Cards</Typography>
                            <Typography sx={{ fontSize: 13 }}>Myntra Insider</Typography>
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 13, marginBottom: '10px' }}>Useful links</Typography>
                        <Box sx={{ textAlign: 'start' }}>
                            <Typography sx={{ fontSize: 13 }} >Men</Typography>
                            <Typography sx={{ fontSize: 13 }}>Women</Typography>
                            <Typography sx={{ fontSize: 13 }}> Kids</Typography>
                            <Typography sx={{ fontSize: 13 }}>Home & Living</Typography>
                            <Typography sx={{ fontSize: 13 }}>Beauty</Typography>
                            <Typography sx={{ fontSize: 13 }}>Gift Cards</Typography>
                            <Typography sx={{ fontSize: 13 }}>Myntra Insider</Typography>
                        </Box>
                    </Grid2>

                    <Grid2 size={{ xs: 6, md: 2 }} sx={{ textAlign: 'left' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 12, marginBottom: '10px' }}>CUSTOMER POLICIES</Typography>
                        <Box sx={{ textAlign: 'start', marginBottom: '20px' }}>
                            <Typography sx={{ fontSize: 13 }}>Contact us</Typography>
                            <Typography sx={{ fontSize: 13 }}>FAQ</Typography>
                            <Typography sx={{ fontSize: 13 }}>T&C</Typography>
                            <Typography sx={{ fontSize: 13 }}>Terms of Use</Typography>
                            <Typography sx={{ fontSize: 13 }}>Track Orders</Typography>
                            <Typography sx={{ fontSize: 13 }}>Shipping</Typography>
                            <Typography sx={{ fontSize: 13 }}>Cancellation</Typography>
                            <Typography sx={{ fontSize: 13 }}>Return</Typography>
                            <Typography sx={{ fontSize: 13 }}>Privacy Policy</Typography>
                            <Typography sx={{ fontSize: 13 }}>Grievance Officer</Typography>
                        </Box>
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 4 }} sx={{ textAlign: 'left', mt: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 13, marginBottom: '10px' }}>
                            EXPERIENCE MYNTRA APP ON MOBILE</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'left', mt: 2, gap: 2 }}>
                            <img src={fimg1} alt="Google Play" style={{ width: '140px', height: '42px' }} />
                            <img src={fimg2} alt="App Store" style={{ width: '140px', height: '42px' }} />
                        </Box>

                        <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: 14, mt: 2 }}>KEEP IN TOUCH</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'left', mt: 2, gap: 2 }}>
                            <Link href="#"><FacebookIcon fontSize="small" /></Link>
                            <Link href="#"><TwitterIcon fontSize="small" /></Link>
                            <Link href="#"><YouTubeIcon fontSize="small" /></Link>
                            <Link href="#"><InstagramIcon fontSize="small" /></Link>
                        </Box>
                        {/* You can add icons or links to download the app here */}
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 3 }} sx={{ textAlign: 'left' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 14, marginBottom: '10px' }}>
                            EXPERIENCE MYNTRA APP ON MOBILE</Typography>
                        <Grid2 item>
                            <Box display="flex" alignItems="center">
                                <Box sx={{ width: '5rem', }}>

                                    <img style={{ width: '100%', height: '100%' }} src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="Original" />
                                </Box>
                                <Typography variant="body2" sx={{ ml: 1 }}>
                                    <strong>100% Original</strong> guarantee for all products at myntra.com
                                </Typography>
                            </Box>
                        </Grid2>
                        <Grid2 item>
                            <Box display="flex" alignItems="center">
                                <Box sx={{ width: '5rem' }}>

                                    <img style={{ width: '100%', height: '100%' }} src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" alt="30 Days Return" />
                                </Box>
                                <Typography variant="body2" sx={{ ml: 1 }}>
                                    <strong>Return within 30 days</strong> of receiving your order
                                </Typography>
                            </Box>
                        </Grid2>
                        {/* You can add icons or links to download the app here */}
                    </Grid2>
                    {/* links end */}

                    {/* POPULAR SEARCHES start */}
                    <Grid2 size={{ xs: 12, md: 12 }} sx={{ textAlign: 'left' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 14, marginBottom: '10px' }}>
                            <Divider textAlign="left"> POPULAR SEARCHES</Divider>
                        </Typography>
                        <Box sx={{ fontSize: 13 }}>
                            Makeup  Dresses For Girls  T-Shirts  Sandals  Headphones  Babydolls  Blazers For Men  Handbags  Ladies Watches  Bags  Sport Shoes  Reebok Shoes  Puma Shoes  Boxers  Wallets  Tops  Earrings  Fastrack Watches  Kurtis  Nike  Smart Watches  Titan Watches  Designer Blouse  Gowns  Rings  Cricket Shoes  Forever 21  Eye Makeup  Photo Frames  Punjabi Suits  Bikini  Myntra Fashion Show  Lipstick  Saree  Watches  Dresses  Lehenga  Nike Shoes  Goggles  Bras  Suit  Chinos  Shoes  Adidas Shoes  Woodland Shoes  Jewellery  Designers Sarees
                        </Box>
                        {/* You can add icons or links to download the app here */}
                    </Grid2>
                    <Grid2 size={{ md: 4, xs: 12 }} sx={{ textAlign: 'left' }}>
                        In case of any concern, Contact Us
                    </Grid2>
                    <Grid2 size={{ md: 4, xs: 12 }} sx={{ textAlign: 'left' }}>
                        In case of any concern, Contact Us
                    </Grid2>
                    <Grid2 size={{ md: 4, xs: 12 }} sx={{ textAlign: 'left' }}>
                        In case of any concern, Contact Us
                    </Grid2>
                    {/* POPULAR SEARCHES end */}
                    <Divider />

                    {/* Registered Office Address start */}


                    <Grid2 size={{ md: 12, xs: 12 }} sx={{ textAlign: 'left' }}>
                        <Typography variant="h6" sx={{ fontSize: 14, mt: 2, fontWeight: 600 }}>Registered Office Address</Typography>
                    </Grid2>

                    <Grid2 size={{ md: 8, xs: 12 }} sx={{ mt: 2, textAlign: 'left' }}>
                        <Box >
                            <Typography sx={{ fontSize: 13 }}>Pizza Tower, Burger Street  </Typography>
                            <Typography sx={{ fontSize: 13 }} > Chowmein Avenue, Taco Lane </Typography>
                            <Typography sx={{ fontSize: 13 }}>  Spicy Biryani District, Sector 8</Typography>
                            <Typography sx={{ fontSize: 13 }}>   Foodville City – 123987, India</Typography>
                        </Box>
                    </Grid2>

                    <Grid2 size={{ md: 4, xs: 12 }} sx={{ mt: { md: 8, xs: 0, sm: 0 }, textAlign: 'left' }}>
                        <Box>
                            <Typography sx={{ fontSize: 13 }}>CIN:xxxxx4444gggg2227PTC041799</Typography>
                            <Typography sx={{ fontSize: 13 }}>Telephone: +91-xx000099999900</Typography>
                        </Box>
                    </Grid2>
                    {/* Registered Office Address end */}


                    {/*  */}
                    <Grid2 size={{ md: 12, xs: 12 }} sx={{ textAlign: 'left', mt: 1 }}>
                        <Typography variant="h6" sx={{ fontSize: 14, fontWeight: 600 }}>ONLINE SHOPPING MADE EASY AT MYWeb
                        </Typography>
                        <Box>
                            <Typography sx={{ mt: 1, fontSize: 13, marginBottom: '10px' }}>If you would like to experience the best of online shopping for men, women and kids in India,
                                If you’re craving the best in online shopping for men, women, and kids, you've come to the right place. BurgerHub is your ultimate destination for food-inspired fashion and lifestyle, serving up a delectable collection of clothing, fries, sneakers, accessories, cupcakes, personal care products, and more. Redefine your style with our tasty selection of trendy items, all available from the comfort of your home. You can shop for your favorite 'dishes' and have them delivered hot and fresh to your doorstep, straight from the snack aisle of fashion!
                                online at Myntra
                                from the comfort of your home and get your favourites delivered right to your doorstep.</Typography>

                        </Box>
                    </Grid2>

                </Grid2>

            </Container>
        </Box >
    )
}
