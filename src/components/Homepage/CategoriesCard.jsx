// ImageSlider.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';

// Import images at the top

import img from '../../assets/categoriesimg.png';
import img1 from '../../assets/imgslid1.png';
import img2 from '../../assets/imgslid2.png';
import img3 from '../../assets/imgslid3.png';
import img4 from '../../assets/imgslid4.png';
import img5 from '../../assets/imgslid5.png';
import img6 from '../../assets/imgslid6.png';
import img7 from '../../assets/imgslid7.png';
import img8 from '../../assets/imgslid8.png';
import img9 from '../../assets/imgslid9.png';

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
];

function CategoriesCard() {
    const navigate = useNavigate();

    return (
        <Box sx={{ padding: 2, textAlign: 'center' }}>
            <img src={img} alt='firstimg' style={{ width: '100%', maxWidth: '100%' }} />

            <Grid container spacing={2}>
                {images.map((image) => (
                    <Grid item xs={12} sm={6} md={2} key={image.id}>
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
                            onClick={() => navigate(`/details/${image.id}`)}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default CategoriesCard;
