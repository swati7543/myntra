import { Box, Container, Divider, Grid2, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {

    return (
        <Box sx={{ backgroundColor: '#f8f8f8', padding: '20px', marginTop: '20px', borderTop: '1px solid #e0e0e0' }}>
            <Container >
                <Grid2 container spacing={2}>
                    {/* links start */}
                    <Grid2 size={{ xs: 6, md: 2 }} sx={{ textAlign: 'left' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 15, marginBottom: '10px' }}>Online Shopping</Typography>
                        <Box sx={{ textAlign: 'start', marginBottom: '20px' }}>
                            <Typography sx={{ fontSize: 15 }}> Men</Typography>
                            <Typography sx={{ fontSize: 15 }}>Women</Typography>
                            <Typography sx={{ fontSize: 15 }}>Kids</Typography>
                            <Typography sx={{ fontSize: 15 }}>Home & Living</Typography>
                            <Typography sx={{ fontSize: 15 }}>Beauty</Typography>
                            <Typography sx={{ fontSize: 15 }}>Gift Cards</Typography>
                            <Typography sx={{ fontSize: 15 }}>Myntra Insider</Typography>
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 14, marginBottom: '10px' }}>Useful links</Typography>
                        <Box sx={{ textAlign: 'start' }}>
                            <Typography sx={{ fontSize: 15 }} >Men</Typography>
                            <Typography sx={{ fontSize: 15 }}>Women</Typography>
                            <Typography sx={{ fontSize: 15 }}> Kids</Typography>
                            <Typography sx={{ fontSize: 15 }}>Home & Living</Typography>
                            <Typography sx={{ fontSize: 15 }}>Beauty</Typography>
                            <Typography sx={{ fontSize: 15 }}>Gift Cards</Typography>
                            <Typography sx={{ fontSize: 15 }}>Myntra Insider</Typography>
                        </Box>
                    </Grid2>

                    <Grid2 size={{ xs: 6, md: 2 }} sx={{ textAlign: 'left' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 14, marginBottom: '10px' }}>CUSTOMER POLICIES</Typography>
                        <Box sx={{ textAlign: 'start', marginBottom: '20px' }}>
                            <Typography sx={{ fontSize: 15 }}>Contact us</Typography>
                            <Typography sx={{ fontSize: 15 }}>FAQ</Typography>
                            <Typography sx={{ fontSize: 15 }}>T&C</Typography>
                            <Typography sx={{ fontSize: 15 }}>Terms of Use</Typography>
                            <Typography sx={{ fontSize: 15 }}>Track Orders</Typography>
                            <Typography sx={{ fontSize: 15 }}>Shipping</Typography>
                            <Typography sx={{ fontSize: 15 }}>Cancellation</Typography>
                            <Typography sx={{ fontSize: 15 }}>Return</Typography>
                            <Typography sx={{ fontSize: 15 }}>Privacy Policy</Typography>
                            <Typography sx={{ fontSize: 15 }}>Grievance Officer</Typography>
                        </Box>
                    </Grid2>

                    <Grid2 size={{ xs: 6, md: 4 }} sx={{ textAlign: 'left' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 14, marginBottom: '10px' }}>
                            EXPERIENCE MYNTRA APP ON MOBILE</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'left', mt: 2,gap:2 }}>
                            <Link href="https://play.google.com/store/apps/details?id=com.myntra.android">
                                <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="Google Play" style={{ width: '140px', height: '42px' }} />
                            </Link>
                            <Link href="https://apps.apple.com/in/app/myntra-indias-fashion-store/id907394059">
                                <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="App Store" style={{ width: '140px', height: '42px' }} />
                            </Link>
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
                    <Grid2 size={{ xs: 6, md: 3 }} sx={{ textAlign: 'left' }}>
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
                        <Box>
                            Makeup  Dresses For Girls  T-Shirts  Sandals  Headphones  Babydolls  Blazers For Men  Handbags  Ladies Watches  Bags  Sport Shoes  Reebok Shoes  Puma Shoes  Boxers  Wallets  Tops  Earrings  Fastrack Watches  Kurtis  Nike  Smart Watches  Titan Watches  Designer Blouse  Gowns  Rings  Cricket Shoes  Forever 21  Eye Makeup  Photo Frames  Punjabi Suits  Bikini  Myntra Fashion Show  Lipstick  Saree  Watches  Dresses  Lehenga  Nike Shoes  Goggles  Bras  Suit  Chinos  Shoes  Adidas Shoes  Woodland Shoes  Jewellery  Designers Sarees
                        </Box>
                        {/* You can add icons or links to download the app here */}
                    </Grid2>
                    <Grid2 size={{ md: 4, xs: 12 }} sx={{ textAlign: 'left' }}>
                        In case of any concern, Contact Us
                    </Grid2>
                    <Grid2 size={{ md: 4, xs: 12 }} >
                        In case of any concern, Contact Us
                    </Grid2>
                    <Grid2 size={{ md: 4, xs: 12 }}>
                        In case of any concern, Contact Us
                    </Grid2>
                    {/* POPULAR SEARCHES end */}
                    <Divider />

                    {/* Registered Office Address start */}

                    <Grid2 size={{ md: 12, xs: 12 }} sx={{ textAlign: 'left' }}>
                        <Typography variant="h6">Registered Office Address</Typography>
                    </Grid2>

                    <Grid2 size={{ md: 8, xs: 12 }} sx={{ mt: 2, textAlign: 'left' }}>
                        <Box>
                            <Typography>Buildings Alyssa, Begonia, and Clover</Typography>
                            <Typography>Embassy Tech Village, Outer Ring Road</Typography>
                            <Typography>Devarabeesanahalli Village, Varthur Hobli</Typography>
                            <Typography>Bengaluru – 560103, India</Typography>
                        </Box>
                    </Grid2>

                    <Grid2 size={{ md: 4, xs: 12 }} sx={{ mt: 8, }}>
                        <Box>
                            <Typography>CIN: U72300KA2007PTC041799</Typography>
                            <Typography>Telephone: +91-80-61561999</Typography>
                        </Box>
                    </Grid2>
                    {/* Registered Office Address end */}


                    {/*  */}
                    <Grid2 size={{ md: 12, xs: 12 }} sx={{ textAlign: 'left', }}>
                        <Typography variant="h6" sx={{ fontSize: 14, fontWeight: 600 }}>ONLINE SHOPPING MADE EASY AT MYNTRA
                        </Typography>
                        <Box>
                            <Typography sx={{ mt: 1, fontSize: 14, marginBottom: '10px' }}>If you would like to experience the best of online shopping for men, women and kids in India,
                                you are at the right place. Myntra is the ultimate destination for
                                fashion and lifestyle, being host to a wide array of merchandise including clothing,
                                footwear, accessories, jewellery, personal care products and more.
                                It is time to redefine your style statement with our treasure-trove
                                of trendy items. Our online store brings you the latest in designer
                                products straight out of fashion houses. You can shop online at Myntra
                                from the comfort of your home and get your favourites delivered right to your doorstep.</Typography>

                        </Box>
                    </Grid2>

                </Grid2>

            </Container>
        </Box >
    )
}
