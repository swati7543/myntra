// ImageSlider.js
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

// Import images at the top

import img from '../../assets/categoriesimg.png';
import img1 from '../../assets/detailimg1.png';
import img2 from '../../assets/detailimg2.png';
import img3 from '../../assets/detailimg3.png';
import img4 from '../../assets/detailimg4.png';
import img5 from '../../assets/detailimg5.png';
import img6 from '../../assets/detailimg6.png';
import img7 from '../../assets/detailimg7.png';
import img8 from '../../assets/detailimg8.png';
import img9 from '../../assets/imgslid9.png';
import img10 from '../../assets/imgslid1.png';
import img12 from '../../assets/imgslid2.png';
import img13 from '../../assets/imgslid3.png';
import img14 from '../../assets/imgslid4.png';
import img15 from '../../assets/imgslid5.png';
import img16 from '../../assets/imgslid6.png';
import img17 from '../../assets/imgslid7.png';
import img18 from '../../assets/imgslid8.png';
import img19 from '../../assets/imgslid9.png';
import CardDetails from '.';
import { useNavigate } from 'react-router-dom';
const images = [
    { id: 1, src: img1, alt: 'Image 1' },
    { id: 2, src: img2, alt: 'Image 2' },
    { id: 3, src: img3, alt: 'Image 3' },
    { id: 4, src: img4, alt: 'Image 4' },
    { id: 5, src: img5, alt: 'Image 5' },
    { id: 6, src: img6, alt: 'Image 6' },
    { id: 7, src: img7, alt: 'Image 7' },
    { id: 8, src: img8, alt: 'Image 8' },
    { id: 9, src: img9, alt: 'Image 9' },
    { id: 10, src: img10, alt: 'Image 1' },
    { id: 12, src: img12, alt: 'Image 2' },
    { id: 13, src: img13, alt: 'Image 3' },
    { id: 14, src: img14, alt: 'Image 4' },
    { id: 15, src: img15, alt: 'Image 5' },
    { id: 16, src: img16, alt: 'Image 6' },
    { id: 17, src: img17, alt: 'Image 7' },
    { id: 18, src: img18, alt: 'Image 8' },
    { id: 19, src: img19, alt: 'Image 9' },
];

function DetailsPage() {
    const navigate = useNavigate()
    return (
        <CardDetails>
            <Box sx={{  textAlign: 'center', mt: { md: '1rem', sm: 0, xs: 0 } }}>

                <Grid container spacing={2}>
                    {images.map((image) => (
                        <Grid item xs={6} sm={6} md={3} key={image.id}>
                            <Box
                                component="img"
                                src={image.src}
                                alt={image.alt}
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: 2,
                                    boxShadow: 2,
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: 5,
                                        cursor: 'pointer',
                                    },

                                }}
                                onClick={() => navigate(`/productdetails/${image.id}`)}

                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </CardDetails>

    );
}

export default DetailsPage;
