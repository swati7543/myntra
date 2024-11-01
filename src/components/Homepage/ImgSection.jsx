import React from 'react';
import img1 from '../../assets/fltimg1.jpg';
import img2 from '../../assets/fltimg2.jpg';
import img3 from '../../assets/fltimg3.jpg';
import img4 from '../../assets/fltimg4.jpg';
import homeimg1 from '../../assets/homeimg1.jpg';
import homeimg2 from '../../assets/homeimg2.jpg';
import titleimg1 from '../../assets/titleimg1.png';
import titleimg2 from '../../assets/titleimg2.png';
import titleimg3 from '../../assets/titleimg3.png';
import titleimg4 from '../../assets/titleimg4.png';
import titleimg5 from '../../assets/titleimg5.png';
import titleimg6 from '../../assets/titleimg6.png';
import titleimg7 from '../../assets/titleimg7.png';
import titleimg8 from '../../assets/titleimg8.png';

import { Box, Grid } from '@mui/material';

const ImgSection = () => {
    return (
        <Box sx={{ textAlign: 'center', padding: 2 }}>
            <Grid container justifyContent="center">
                {/* First Row of Images */}
                <Grid item xs={3} sm={6} md={3}>
                    <img src={img1} alt='firstimg' style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={3} sm={6} md={3}>
                    <img src={img2} alt='firstimg2' style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={3} sm={6} md={3}>
                    <img src={img3} alt='firstimg3' style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={3} sm={6} md={3}>
                    <img src={img4} alt='firstimg4' style={{ width: '100%' }} />
                </Grid>

                {/* Second Row of Images */}
                <Grid item xs={6} sm={6}>
                    <img src={homeimg1} alt='img' style={{ width: '100%', maxWidth: '630px' }} />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <img src={homeimg2} alt='img2' style={{ width: '100%', maxWidth: '630px' }} />
                </Grid>

                {/* Third Row of Images */}
                <Grid item xs={6} sm={6}>
                    <img src={titleimg1} alt='img' style={{ width: '100%', maxWidth: '630px' }} />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <img src={titleimg2} alt='img2' style={{ width: '100%', maxWidth: '630px' }} />
                </Grid>

                {/* Fourth Row of Images */}
                <Grid container item spacing={1} justifyContent="center" xs={12}>
                    {[titleimg3, titleimg4, titleimg5, titleimg6, titleimg7, titleimg8].map((src, index) => (
                        <Grid item xs={6} sm={4} md={2} key={index}>
                            <img src={src} alt={`titleimg${index + 3}`} style={{ width: '100%' }} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
};

export default ImgSection;
